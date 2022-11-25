import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'projects/libs/shared/src/lib/alert.service';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { deleteRole, getPermission, getRolByEdit, getRoles, saveRole } from 'projects/libs/state-management/src/lib/state/role/role.actions';
import { selectAllPermissions, selectAllRoles, selectRoleForEdit } from 'projects/libs/state-management/src/lib/state/role/role.selector';
import { PermissionNode } from 'projects/rds-components/src/models/pemission.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DatePipe
  ],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  isAnimation: boolean = true;

  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  constructor(public datepipe: DatePipe, private store: Store, private _arrayToTreeConverterService: ArrayToTreeConverterService, private alertService: AlertService, public translate: TranslateService) { }

  rdsNewRoleMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompRoleList'
  };

  // public rdsNewRoleMfeConfig: ComponentLoaderOptions;

  treeData: any = [];
  Roledetails: any = {}
  selectdnames: any = [];
  EditPermissionData: any;
  isEdit = false;
  selectedPermissions: any = [];
  selectedPermissionnames: any = [];
  selectedPermissionValues: any = [];

  @Input() RoleTableHeader: TableHeader[] = [
    { displayName: 'Role Name', key: 'rolename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },

    { displayName: ' Creation Date & Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  @Output() deleteRole = new EventEmitter<{ item: any }>();
  RoleDatatable: any = []
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  rdsRoleTableMfeConfig: ComponentLoaderOptions;

  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })

    this.subscribeToAlerts();
    this.rdsNewRoleMfeConfig = {
      name: 'RdsCompRoleList',
      input: {
        roleHeaders: this.RoleTableHeader,
        roleList: this.RoleDatatable,
        isShimmer: true,
        EditShimmer: true,
        noDataTitle: 'Currently you do not have edition',
      },
      output: {             
      }
    };
    const mfeConfig = this.rdsNewRoleMfeConfig;
    mfeConfig.input.isShimmer = true;
    this.rdsNewRoleMfeConfig = mfeConfig;
    this.store.dispatch(getRoles([]));
    this.store.select(selectAllRoles).subscribe((res: any) => {
      this.RoleDatatable = [];
      if (res && res.roles && res.roles.items && res.status == "success") {
        this.isAnimation = false;
        res.roles.items.forEach((element: any) => {
          const status: string = (element.isStatic) ? '<span class="badge badge-primary p-1 mx-1 rounded">Static</span> ' : '';
          const status1: string = (element.isDefault) ? '<span class="badge badge-success p-1 mx-1 rounded">Default</span> ' : '';
          const roleName: string = (element.displayName);
          const defaultLanguageTemplate = `<div class="d-flex align-items-center"> ${roleName} <div class="d-block text-end"> ${status} ${status1} </div></div> `
          const item: any = {
            rolename: defaultLanguageTemplate,
            isDefault: element.isDefault,
            creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, h:mm:ss a'),
            name: element.displayName,
            id: element.id
          }
          this.RoleDatatable.push(item);

        });
        const mfeConfig = this.rdsNewRoleMfeConfig
        mfeConfig.input.roleList = [...this.RoleDatatable]
        mfeConfig.input.isShimmer = false;
        this.rdsNewRoleMfeConfig = mfeConfig;
      }
    });
    this.store.select(selectRoleForEdit).subscribe((res: any) => {
      if (res && res.RoleEditI && res.status == 'success') {
        this.Roledetails = {}

        if (res.RoleEditI.role) {
          const itemRole: any = {
            displayName: res.RoleEditI.role.displayName,
            id: res.RoleEditI.role.id,
            isDefault: res.RoleEditI.role.isDefault,
            name: res.RoleEditI.role.displayName
          }
          this.Roledetails = itemRole
        }
        if (res.RoleEditI.permissions) {
          this.EditPermissionData = res.RoleEditI.permissions
          this.treeData = this.ConvertArraytoTreedata(res.RoleEditI.permissions)
          if (this.treeData && res.RoleEditI.grantedPermissionNames) {
            this.selectedPermissions = [];
            this.checkSelectedNodes(res.RoleEditI.grantedPermissionNames);
          }
        }
        const mfeConfig = this.rdsNewRoleMfeConfig
        mfeConfig.input.RolesData = this.Roledetails
        mfeConfig.input.EditShimmer = false;
        mfeConfig.input.permissionsList = this.treeData
        mfeConfig.input.SelectedPermissionValues = [...this.selectedPermissions];
        mfeConfig.input.SelectedPermissionList = [...res.RoleEditI.grantedPermissionNames]
        this.rdsNewRoleMfeConfig = { ...mfeConfig };

      }

    });
    this.store.select(selectAllPermissions).subscribe((res: any) => {
      if (res && res.PermissionI && res.PermissionI.items && res.status == 'success') {
        this.treeData = this.ConvertArraytoTreedata(res.PermissionI.items)
        const mfeConfig = this.rdsNewRoleMfeConfig
        mfeConfig.input.permissionsList = [... this.treeData];
        mfeConfig.input.SelectedPermissionValues = [...this.selectedPermissionValues]
        mfeConfig.input.EditShimmer = false;
        this.rdsNewRoleMfeConfig = { ...mfeConfig };
      }
    });
    // this.updateRoleData();
  }




  ConvertArraytoTreedata(tredata: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      tredata,
      'parentName',
      'name',
      null,
      'children',
      [
        {
          target: 'label',
          source: 'displayName',
        },
        {
          target: 'expandedIcon',
          value: 'fa fa-folder-open text-warning',
        },
        {
          target: 'collapsedIcon',
          value: 'fa fa-folder text-warning',
        },
        {
          target: 'expanded',
          value: true,
        },
      ],
      1
    );
    return treedaTA;
  }

  checkSelectedNodes(node: any) {
    if (node) {
      node.forEach((item: any) => {

        const selecteditem: any = {
          name: item,
          value: true
        }
        this.selectedPermissions.push(selecteditem);
      })
    }
  }
  FilterselectedPermissions(event: any) {
    this.selectedPermissions = [];
    for (const n of this.treeData) {
      this.selectedPermissionname(n, event);
    }


  }
  selectedPermissionname(node: any, checked: boolean) {
    if (node.selected == true) {
      this.selectedPermissions.push(node.data.name)
    }
    for (const n of node.children) {
      this.selectedPermissionname(n, checked);
    }

  }

  SetEditVar() {
    this.isEdit = false;

    const mfeConfig = this.rdsNewRoleMfeConfig
    mfeConfig.input.permissionsList = this.treeData;
    mfeConfig.input.selectedPermissions = ''
    mfeConfig.input.IsEdit = false;
    mfeConfig.input.RoleName = ''
    this.rdsNewRoleMfeConfig = { ...mfeConfig };
  }
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
        sticky: alert.sticky,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });

  }

  onSaveRole (eventData: any){
    if (eventData && eventData.role) {
      if (eventData.grantedPermissionNames && eventData.grantedPermissionNames.length) {
        this.FilterselectedPermissions(eventData.grantedPermissionNames)
        const data: any = {
          role: eventData.role,
          grantedPermissionNames: this.selectedPermissions
        };
        this.store.dispatch(saveRole(data));
      } else {
        const data: any = {
          role: eventData.role,
          grantedPermissionNames: [],
        };
        this.store.dispatch(saveRole(data));
      }
    }
  }

  onEditRole (event: any)  {
    if (event) {
      this.store.dispatch(getRolByEdit(event));
      this.isEdit = true;
    } else {
      this.Roledetails = undefined;
      const mfeConfig = this.rdsNewRoleMfeConfig
      mfeConfig.input.RolesData = { ... this.Roledetails };
      this.rdsNewRoleMfeConfig = mfeConfig;
    }
  }

  onnewRole (data: any)  {
    this.store.dispatch(getPermission());
    this.selectedPermissions = []
  }

  onRefreshRole ()  {
    const mfeConfig = this.rdsNewRoleMfeConfig
    mfeConfig.input.SelectedPermissionValues = [];
    this.rdsNewRoleMfeConfig = { ...mfeConfig };
    this.store.dispatch(getRoles([]));
  }

  onReset(event: any) {
    this.Roledetails = undefined;
    this.treeData = [];
    this.selectedPermissions = [];
    this.selectedPermissionValues = [];
    const mfeConfig = this.rdsNewRoleMfeConfig
    mfeConfig.input.RolesData = { ... this.Roledetails };
    mfeConfig.input.permissionsList = [... this.treeData];
    mfeConfig.input.EditShimmer = true;
    this.rdsNewRoleMfeConfig = mfeConfig;
  }

  deleteEvent (event: any)  {
    this.store.dispatch(deleteRole(event.id))
  }

  onFilterPermission (event: any)  {
    if (event && event.length) {
      this.FilterselectedPermissions(event)
      const data: any = {
        grantedPermissionNames: this.selectedPermissions
      };
      this.selectedPermissionValues = event;
      this.store.dispatch(getRoles(this.selectedPermissions));
      const mfeConfig = this.rdsNewRoleMfeConfig
      mfeConfig.input.SelectedPermissionValues = [...this.selectedPermissionValues];
      this.rdsNewRoleMfeConfig = { ...mfeConfig };
    }
  }

  onFilterPermissionReset(event: any)  {
    this.treeData = [];
    this.selectedPermissions = [];
    this.selectedPermissionValues = [];
    const mfeConfig = this.rdsNewRoleMfeConfig
    mfeConfig.input.RolesData = { ... this.Roledetails };
    mfeConfig.input.permissionsList = [... this.treeData];
    mfeConfig.input.SelectedPermissionValues = [... this.selectedPermissionValues];
    this.rdsNewRoleMfeConfig = mfeConfig;
  }
}
