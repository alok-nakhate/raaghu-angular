import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
// import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
// import { getOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
// import { selectOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';
import {
  assignableRoles,
  availbleOrganizationUnit,
  deleteUser,
  getUserForEdit,
  getUserPermission,
  getUserPermissionFilterList,
  getUsers,
  saveUser,
  UpdateUserPermission,
} from 'projects/libs/state-management/src/lib/state/user/user.actions';
import {
  selectAllUserFilterPermissions,
  selectAllUsers,
  selectAssignableRoles,
  selectAvailableOrgUnit,
  selectUserForEdit,
  selectUserPermissionEdit,
} from 'projects/libs/state-management/src/lib/state/user/user.selector';
import {
  AlertService,
  ComponentLoaderOptions,
} from '../../../libs/shared/src/public-api';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { getRoles } from 'projects/libs/state-management/src/lib/state/role/role.actions';
import { selectAllRoles } from 'projects/libs/state-management/src/lib/state/role/role.selector';
import { PermissionNode } from 'projects/rds-components/src/models/pemission.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { getOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
import { selectOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {

  isAnimation: boolean = true;

  title: string = 'user';
  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts,
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      },
    },
  };
 TreeData: any = [];
  treeData1: any;
  isAssigned: boolean;
  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private alertService: AlertService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public translate:TranslateService,
    
  ) { }
  public rdsUserMfeConfig: ComponentLoaderOptions={ name:'RdsCompUserPermissionsNew'}
  UserPermissionFiltertreeData: any = [];
  roleName: any;
  userList: any = [];
  roles: any=[] ;
  userData:any=[];
  user:any=[];
  userinfo: any = undefined;
  organizationTreeList:any=[];
  permissionsList:any=[];
  Permission: any = [];
  isEdit: boolean = false;
  selectedPermissions: any = [];
  selectedFilterPermissions: any = [];
  organizationUnits: any = [];
  resOrganizationUnit:any=[];
  SelectedOrganizationUnit: any = [];
  selectedOrganizations:any = [];
  Selectedata:any=[];
  navtabsItems: any = [];
  Selecteorganizationdata:any=[];
  treeData:any=[];
  //organizationtreeData:any=[];
  PermissionFiltertreeData:any=[];
  selectedRoles:any=[];
  listItemsm:any=[];
  orgTreeData: any = [];
 UserTableData: any = [];
 
  userHeaders: TableHeader[] = [
    { key: 'name',displayName: 'Name',dataType: 'html',filterable: true,sortable: true,},
    { key: 'statusTemplate',displayName: 'Status',dataType: 'html',filterable: true,sortable: true,},
    { key: 'email',displayName: 'email',dataType: 'html',filterable: true,sortable: true,},
    { key: 'surName',displayName: 'surName',dataType: 'html',filterable: true,sortable: true,},

    
  ]
  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.store.select(selectAllUsers).subscribe((res: any) => {
      this.userList = [];
      if (res && res.items) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          
          const item: any = {
            name: element.userName,
            statusTemplate: statusTemplate,
            id: element.id,
            email: element.email,
            surName:element.surname,
          }
          this.userList.push(item);
        });
        const mfeConfig = this.rdsUserMfeConfig
        mfeConfig.input.userList = [... this.userList];
        mfeConfig.input.isShimmer = false;
        this.rdsUserMfeConfig = mfeConfig;
      }
    });
 
    this.store.dispatch(getUsers());
    this.store.select(selectAllUsers).subscribe((res: any) => {
     
      this.userList = [];
      if (res  && res.items && res.status == "success") {
        this.isAnimation = false;
      
        res.items.forEach((element: any) => {
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div><span class="badge badge-success">Active</span></div>`;
          }
          else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          let emailConfirmTemplate;
          if (element.isActive) {
            emailConfirmTemplate = `<div> <span class="badge badge-primary">Yes</span></div>`;
          }
          else {
            emailConfirmTemplate = `<div> <span class="badge badge-danger">No</span></div>`;
          }
          const item: any = {
           name: element.userName,
           id: element.id,
           statusTemplate: element.statusTemplate,
           email: element.email,
            surName:element.surname,
          
          };
         
          this.userList.push(item);
        });

        const mfeConfig = this.rdsUserMfeConfig;
        mfeConfig.input.userList = [...this.userList];
        mfeConfig.input.isShimmer=false;
        this.rdsUserMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(assignableRoles());
    this.store.select(selectAssignableRoles).subscribe((res: any) => {
      this.roles =  [];
      if (res && res.items) {
            this.isAnimation = false;
            res.items.forEach((element: any) => {
            const item: any = {
            name: element.name,
            id:element.id,
            isAssigned:false
          }
          this.roles.push(item);
        });
        const mfeConfig = this.rdsUserMfeConfig;
             mfeConfig.input.roles = this.roles;
          this.rdsUserMfeConfig = mfeConfig;
      }
    });
    
  






    this.store.dispatch(availbleOrganizationUnit());
    this.store.select(selectAvailableOrgUnit).subscribe((res: any) => {
      this.orgTreeData =  [];
      if (res && res.items) {
        this.isAnimation = false;
    this.treeData1 = this._arrayToTreeConverterService.createTree(
      res.items,
      'parentId',
      'code',
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
        res.items.forEach((element: any) => {
            const item: any = {
            displayName: element.displayName,
          }
          this.orgTreeData.push(item);
        });
        const mfeConfig = this.rdsUserMfeConfig;
             mfeConfig.input.orgTreeData = [...this.treeData1];
          this.rdsUserMfeConfig = mfeConfig;
      }
    });

  
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // })

 
    this.rdsUserMfeConfig = {
      name: 'RdsCompUserPermissionsNew',
      input: {
        userList: this.userList,
        roles: this.roles,
        userinfo:this.userinfo,
        organizationTreeList:this.organizationTreeList,
        // organizationUnits:this.organizationUnits,
        // permissionsList:this.permissionsList,
         orgTreeData:this.orgTreeData,
         isAssigned: this.isAssigned,
         selectedPermissions:this.selectedPermissions,
         selectedOrganizations:this.selectedOrganizations,
         Selectedata:this.Selectedata,
         Selecteorganizationdata:this.Selecteorganizationdata,
         treeData:this.treeData,
       // organizationtreeData:this.organizationtreeData,
         PermissionFiltertreeData:this.PermissionFiltertreeData,
         listItemsm:this.listItemsm,
        selectedRoles:this.selectedRoles,
        userHeaders:this.userHeaders,
        userTableData:this.UserTableData,
        //  isShimmer:false,
        //  editShimmer:false
      },
      output: {
        
        Saveuserinfo: (user: any ) => {
          if(user && user.userInfo ){
            if(user.userInfo.id){
              const data: any = {
                email : user.userInfo.email,
                isActive:user.userInfo.isActive,
                name:user.userInfo.name,
                password:user.userInfo.password,
                surname:user.userInfo.surname,
                id:user.userInfo.id,
                userName:user.userInfo.userName,
                phoneNumber:user.userInfo.phoneNumber
               };
               this.store.dispatch(getUserForEdit(data));
               console.log(getUserForEdit(data));
            }
              else{

                const data: any = {
                  email : user.userInfo.email,
                  isActive:user.userInfo.isActive,
                  name:user.userInfo.name,
                  password:user.userInfo.password,
                  surname:user.userInfo.surname,
                  userName:user.userInfo.userName,
                  phoneNumber:user.userInfo.phoneNumber,
                  //roleNames:user.roles.name
                 };
                this.store.dispatch(saveUser(data));
              console.log(saveUser(data));
           }
           
          }
         
        },
        CreateOrEditUser: (user: any) => {
          console.log(user);
          this.store.dispatch(getUserForEdit(user));
          this.store.select(selectUserForEdit).subscribe(res=>{
            const data: any = {
              email : user.userInfo.email,
              isActive:user.userInfo.isActive,
              name:user.userInfo.name,
              password:user.userInfo.password,
              surname:user.userInfo.surname,
              id:user.userInfo.id,
              roleNames:user.roles.name,
              userName:user.userInfo.userName,
              phoneNumber:user.userInfo.phoneNumber
             };
           console.log(res);
           const mfeConfig = this.rdsUserMfeConfig
           mfeConfig.input.user = { ... this.user};
                 })  

         // this.store.dispatch(getTenantFesaturesForEdit(selectedTenant))

        },
        
        onClose: (event: any) => {
        this.userinfo = undefined;  
          const mfeConfigedit = this.rdsUserMfeConfig;
          mfeConfigedit.input.userinfo = { ...this.userinfo };
          mfeConfigedit.input.editShimmer=true;
          this.rdsUserMfeConfig = mfeConfigedit;
        },
        deleteUser: (eventData: any) => {
          this.store.dispatch(deleteUser(eventData.id));
        },
      

        
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
      
      },
    };
   
    
    this.store.dispatch(getUserPermissionFilterList());
    this.store.select(selectAllUserFilterPermissions).subscribe((res: any) => {
      if (res && res.UserPermissionFilterI && res.UserPermissionFilterI.items)
        this.UserPermissionFiltertreeData = this.ConvertArraytoTreedata(
          res.UserPermissionFilterI.items
        );
      const mfeConfig = this.rdsUserMfeConfig;
     
      this.rdsUserMfeConfig = { ...mfeConfig };
    });

    this.updateOrganizationTree();

  }
  updateOrganizationTree() {
    this.store.dispatch(getOrganizationUnitTree());
    this.store.select(selectOrganizationUnitTree).subscribe((res: any) => {
      if (res && res.items) {
        this.treeData1 = this._arrayToTreeConverterService.createTree(
          res.items,
          'parentId',
          'code',
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
        const mfeConfig = this.rdsUserMfeConfig;
        mfeConfig.input.orgTreeData = [...this.treeData1];
        this.rdsUserMfeConfig = mfeConfig;
      }
    });
  }
  checkSelectedNodes(treeData: any, node: any) {
    treeData.forEach((item: any) => {
      if (item.data.name === node) {
        const selecteditem: any = {
          name: node,
          value: 'true',
        };
        // this.selectedPermissions.push(selecteditem);
      } else {
        this.checkSelectedNodes(item.children, node);
      }
    });
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
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
  }
  FilterselectedPermissions(event: any) {
    this.selectedFilterPermissions = [];
    for (const n of this.UserPermissionFiltertreeData) {
      this.selectedPermissionname(n, event);
    }
  }
  selectedPermissionname(node: any, checked: boolean) {
    if (node.selected == true) {
      this.selectedFilterPermissions.push(node.data.name);
    }
    for (const n of node.children) {
      this.selectedPermissionname(n, checked);
    }
  }
 
   
}
