import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { getOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
import { selectOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';
import {
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
  orgTreeData: any = [];
  treeData1: any;
  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private alertService: AlertService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public translate: TranslateService
  ) { }
  public rdsUserMfeConfig: ComponentLoaderOptions;
  UserPermissionFiltertreeData: any = [];
  roleName: any;
  userList: any = [];
  roles: any = [];
  userinfo: any = undefined;
  Permission: any = [];
  isEdit: boolean = false;
  selectedPermissions: any = [];
  selectedFilterPermissions: any = [];
  OrganizationUnit: any = [];
  resOrganizationUnit: any = [];
  SelectedOrganizationUnit: any = [];
  ngOnInit(): void {
    // this.store.dispatch(getRoles([]));
    // this.store.select(selectAllRoles).subscribe((res: any) => {
    //   this.roles = [];
    //   if (res && res.roles && res.roles.items && res.status == "success") {
    //     this.isAnimation = false;
    //     res.roles.items.forEach((element: any) => {
    //       const status: string = (element.isStatic) ? '<span class="badge badge-primary p-1 mx-1 rounded">Static</span> ' : '';
    //       const status1: string = (element.isDefault) ? '<span class="badge badge-success p-1 mx-1 rounded">Default</span> ' : '';
    //       const roleName: string = (element.displayName);
    //       const defaultLanguageTemplate = `<div class="d-flex align-items-center"> ${roleName} <div class="d-block text-end"> ${status} ${status1} </div></div> `
    //       const item: any = {
    //         rolename: defaultLanguageTemplate,
    //         isDefault: element.isDefault,
    //         creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, h:mm:ss a'),
    //         name: element.displayName,
    //         id: element.id
    //       }
    //       this.roles.push(item);
    //     });
    this.isAnimation = true;

    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })

    this.subscribeToAlerts();
    this.rdsUserMfeConfig = {
      name: 'RdsCompUserPermissions',
      input: {
        userList: this.userList,
        roles: this.roles,
        isEdit: false,
        orgTreeData: this.orgTreeData,
        isShimmer: true,
        editShimmer: true
      },
      output: {                           
      },
    };
    this.store.dispatch(getUsers([]));
    this.store.select(selectAllUsers).subscribe((res: any) => {
      this.userList = [];
      if (res && res.users && res.users.items && res.status == "success") {
        this.isAnimation = false;
        res.users.items.forEach((element: any) => {
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
            userName: element.userName,
            name: element.name,
            statusTemplate: statusTemplate,
            emailAddress: element.emailAddress,
            emailConfirmTemplate: emailConfirmTemplate,
            creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, hh:mm:ss a'),
            id: element.id
          };
          if (element && element.roles) {
            this.roleName = '';
            element.roles.forEach((e: any) => {
              if (this.roleName == '') {
                this.roleName = e.roleName
              }
              else {
                this.roleName = this.roleName + ', ' + e.roleName;
              }
            });
            item.roleName = this.roleName
          }
          this.userList.push(item);
        });

        const mfeConfig = this.rdsUserMfeConfig;
        mfeConfig.input.userList = [...this.userList];
        mfeConfig.input.isShimmer = false;
        this.rdsUserMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getUserPermissionFilterList());
    this.store.select(selectAllUserFilterPermissions).subscribe((res: any) => {
      if (res && res.UserPermissionFilterI && res.UserPermissionFilterI.items)
        this.UserPermissionFiltertreeData = this.ConvertArraytoTreedata(
          res.UserPermissionFilterI.items
        );
      const mfeConfig = this.rdsUserMfeConfig;
      mfeConfig.input.FilterPermissionList = [
        ...this.UserPermissionFiltertreeData,
      ];
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
        this.selectedPermissions.push(selecteditem);
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
      const mfeConfigedit = this.rdsUserMfeConfig;
      mfeConfigedit.input.showLoadingSpinner = false;
      this.rdsUserMfeConfig = mfeConfigedit;
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
  CheckSelectedOrganizationUnit(SelectedCode: any) {
    if (this.resOrganizationUnit && this.resOrganizationUnit.length > 0) {
      this.resOrganizationUnit.forEach((element: any) => {
        if (element.code == SelectedCode) {

          const selecteditem: any = {
            name: element.displayName,
            value: 'true',
            // displayName: element.displayName,
            //     isAssignedUnit: false,
            //     code: element.id,
            //     uniteCode: element.code
          };

          this.SelectedOrganizationUnit.push(selecteditem)
          // console.log( this.SelectedOrganizationUnit)
        }

      })
    }

  }

  Saveuserinfo (eventData: any)  {
    const data: any = {
      user: eventData.item.userInfo,
      assignedRoleNames: eventData.item.roles,
      organizationUnits: eventData.item.organizationUnits,
      sendActivationEmail: false,
      setRandomPassword: false,
    };
    this.store.dispatch(saveUser(data));
  }

   
  onClose (event: any)  {
    this.userinfo = undefined;
    const mfeConfigedit = this.rdsUserMfeConfig;
    mfeConfigedit.input.userinfo = { ...this.userinfo };
    mfeConfigedit.input.editShimmer = true;
    this.rdsUserMfeConfig = mfeConfigedit;
  }

  deleteUser (eventData: any) {
    this.store.dispatch(deleteUser(eventData.id));
  }

  FilterPermission (event: any) {
    if (event && event.FilterPermission.length) {
      this.FilterselectedPermissions(event.FilterPermission);
      const data: any = {
        grantedPermissionNames: this.selectedFilterPermissions,
      };
      this.store.dispatch(getUsers(this.selectedFilterPermissions));
      this.store.select(selectAllUsers).subscribe((res: any) => {
        this.userList = [];
        if (res && res.users && res.users.items) {
          res.users.items.forEach((element: any) => {
            const item: any = {
              userName: element.userName,
              name: element.name,
              emailAddress: element.emailAddress,
              isEmailConfirmed: element.isEmailConfirmed,
              isActive: element.isActive,
              creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, hh:mm:ss a'),
              id: element.id,
            };
            if (element && element.roles) {
              this.roleName = '';
              element.roles.forEach((e: any) => {
                if (this.roleName == '') {
                  this.roleName = e.roleName
                }
                else {
                  this.roleName = this.roleName + ' , ' + e.roleName;
                }
              });
              item.roleName = this.roleName
            }
            this.userList.push(item);

          });
          const mfeConfig = this.rdsUserMfeConfig;
          mfeConfig.input.userList = [...this.userList];
          this.rdsUserMfeConfig = mfeConfig;
        }
      });
    }
  }

  CreateOrEditUser (eventData: any) {
    if (eventData.id) {
      this.isEdit = true;
    } else {

      this.isEdit = false;
      const mfeConfigedit = this.rdsUserMfeConfig;
      mfeConfigedit.input.editShimmer = false;
      this.userinfo = undefined;
      mfeConfigedit.input.userinfo = { ...this.userinfo };
      this.rdsUserMfeConfig = { ...mfeConfigedit };

    }
    this.store.dispatch(getUserForEdit(eventData.id));
    this.store.select(selectUserForEdit).subscribe((res: any) => {
      if (res && res.UserEditI && res.UserEditI.roles && res.UserEditI.roles.length) {
        this.roles = [];
        res.UserEditI.roles.forEach((element: any) => {
          const item: any = {
            roleDisplayName: element.roleDisplayName,
            isAssigned: element.isAssigned,
            roleId: element.roleId,
            roleName: element.roleName,
            inheritedFromOrganizationUnit:
              element.inheritedFromOrganizationUnit,
          };
          this.roles.push(item);
        });
      }
      if (res && res.UserEditI && res.UserEditI.user) {
        const item: any = {
          name: res.UserEditI.user.name,
          emailAddress: res.UserEditI.user.emailAddress,
          phoneNumber: res.UserEditI.user.phoneNumber,
          userName: res.UserEditI.user.userName,
          password: res.UserEditI.user.password,
          confirmPass: res.UserEditI.user.confirmPass,
          id: res.UserEditI.user.id,
          setRandomPassword: res.UserEditI.user.setRandomPassword,
          isActive: res.UserEditI.user.isActive,
          isLockoutEnabled: res.UserEditI.user.isLockoutEnabled,
          isTwoFactorEnabled: res.UserEditI.user.isTwoFactorEnabled,
          shouldChangePasswordOnNextLogin:
            res.UserEditI.user.shouldChangePasswordOnNextLogin,
          surname: res.UserEditI.user.surname,
          imageUrl: '../assets/edit-profile.png',
        };
        this.userinfo = item;
      }
      if (res && res.UserEditI && res.UserEditI.allOrganizationUnits && res.status == "success") {
        this.resOrganizationUnit = res.UserEditI.allOrganizationUnits
        this.OrganizationUnit = [];
        this.SelectedOrganizationUnit = [];
        this.OrganizationUnit = this._arrayToTreeConverterService.createTree(
          res.UserEditI.allOrganizationUnits,
          'parentId',
          'id',
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
        if (this.isEdit) {
          this.SelectedOrganizationUnit = [];
          if (res && res.UserEditI && res.UserEditI.memberedOrganizationUnits && res.UserEditI.memberedOrganizationUnits.length && res.status == "success") {
            res.UserEditI.memberedOrganizationUnits.forEach((element: any) => {
              this.CheckSelectedOrganizationUnit(element)
            })
          }
        }
        const mfeConfigedit = this.rdsUserMfeConfig;
        mfeConfigedit.input.OrganizationUnit = [...this.OrganizationUnit];
        mfeConfigedit.input.selectedOrganizations = [...this.SelectedOrganizationUnit];
      }
      const mfeConfigedit = this.rdsUserMfeConfig;
      if (!this.isEdit) {
        this.roles.forEach(node => {
          node.isAssigned = false;
        })
      }
      mfeConfigedit.input.roles = [...this.roles];
      if (this.userinfo) {
        mfeConfigedit.input.userinfo = { ...this.userinfo };
      }
      mfeConfigedit.input.isEdit = this.isEdit;
      this.rdsUserMfeConfig = { ...mfeConfigedit };
    });
    if (eventData.id) {
      this.store.dispatch(getUserPermission(eventData.id));
      this.store
        .select(selectUserPermissionEdit)
        .subscribe((result: any) => {
          if (
            result &&
            result.UserPermissionI &&
            result.UserPermissionI.permissions && result.status == "success"
          ) {
            this.Permission = [];
            this.selectedPermissions = [];
            this.Permission = this.ConvertArraytoTreedata(
              result.UserPermissionI.permissions
            );
            if (result.UserPermissionI.grantedPermissionNames) {
              this.selectedPermissions = [];
              result.UserPermissionI.grantedPermissionNames.forEach(
                (item) => {
                  this.checkSelectedNodes(this.Permission, item);
                }
              );
            }
            const mfeConfigedit = this.rdsUserMfeConfig;
            mfeConfigedit.input.permissionsList = [...this.Permission];
            mfeConfigedit.input.selectedPermissions = [...this.selectedPermissions];
            mfeConfigedit.input.editShimmer = false;
            this.rdsUserMfeConfig = { ...mfeConfigedit };
          }

        });
    }
  }

  UpdateUserPermission (eventData: any)  {
    if (eventData.Permission) {
      const data: any = {
        grantedPermissionNames: eventData.Permission,
        id: eventData.id,
      };
      this.store.dispatch(UpdateUserPermission(data));
    }
  }
}
