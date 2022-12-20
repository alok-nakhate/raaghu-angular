import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClaimTypeDto, ComponentLoaderOptions, GetPermissionListResultDto, IdentityRoleClaimDto, IdentityRoleDto } from '@libs/shared';
// import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { deleteRole, getAllClaimTypes, getClaimTypes, getPermission, getRolByEdit, getRoles, saveClaims, savePermissions, saveRole, updateRole } from 'projects/libs/state-management/src/lib/state/role/role.actions';
import { selectAllClaimsTypesRoles, selectAllPermissions, selectAllRoles, selectClaimsTypeByRole, selectRoleForEdit } from 'projects/libs/state-management/src/lib/state/role/role.selector';
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
  viewCanvas: boolean = false;
  activePage: number = 0;
  viewCreateOrganisationCanvas: boolean = false;
  selectedTreeNode: number = 0;
  canvasTitle: string = 'New Role';
  navtabsItems: any = [
    {
      label: this.translate.instant('Role'),
      tablink: '#Role',
      ariacontrols: 'Role-information',
    },
    {
      label: this.translate.instant('Permission'),
      tablink: '#Permission',
      ariacontrols: 'Permission',

    },
    {
      label: this.translate.instant('Claims'),
      tablink: '#Claims',
      ariacontrols: 'Claims',
    }
  ];
  TreeNodeLabeles: any = {
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder: "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder: "Child label",
    ChildDescriptionEditPlaceholder: "Child Label",
    ParentNodeTitle: "Parent Node Title",
    ChildNodeTitle: "Child node Title",
  };
  TreeType: any = {
    IconLabel: true,
    Normal: false,
    checkbox: false,
  };
  treeData1 = [{
    "data": {
      "parentId": null,
      "code": "00001",
      "displayName": null,
      "memberCount": 1,
      "roleCount": 3,
      "lastModificationTime": "2022-05-06T00:08:34.702+05:30",
      "lastModifierUserId": 6,
      "creationTime": "2022-04-29T11:43:17.223+05:30",
      "creatorUserId": 1,
      "id": 1
    },
    "level": 1,
    "selected": false,
    "label": "waii",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
  }];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  treeData2: any;
  node: string = '';
  selectedNodeInfo: any;
  RdsCompNewRoleConfig: ComponentLoaderOptions;
  rdsClaimTypeRoleMfeConfig: ComponentLoaderOptions;
  rdsPermissionRoleMfeConfig: ComponentLoaderOptions;
  selectedPermissionList: any = [];
  actionId: 'edit' | 'new' | 'delete' = 'new';
  isReset: boolean = false;
  EditShimmer: boolean = false;
  Roledetails: any = {};
  treeData: any = [];
  selectedPermissions: any = [];
  claimValueData: any[] = [];
  claimDisplayArray: any[] = [];
  emitRoleData: any = {};
  emitClaimData = { claimData: [], id: undefined };
  saveNextBtn = 'Next';
  getOriginalData: any;
  permissionTreeData: any = [];
  emitPermissionsData = { name: undefined, permissions: { permissions: [] } };

  constructor(
    private store: Store,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public datepipe: DatePipe,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.isAnimation = true;
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // })
    this.rdsOrganizationTreeConfig = {
      name: 'RdsOrganizationTree',
      input: {
        organizationTreeData: this.treeData1,
        nodeColor: this.nodeColors,
        mutable: true,
        OrganizationTreeType: this.TreeType,
        OrganizationTreeLabeles: this.TreeNodeLabeles,
        ButtonLabel: "",
      },
      output: {
        onDeleteNode: (data: any) => {
          this.store.dispatch(deleteRole(data.id));
          this.updateOrganizationTree();
        },
        getSelectedParent: (parent: any) => {
          this.emitRoleData = {};
          this.emitPermissionsData = { name: undefined, permissions: { permissions: [] } };
          this.emitClaimData = { claimData: [], id: undefined };
          this.store.dispatch(getPermission('admin'));
          this.canvasTitle = 'New Role';
          this.viewCreateOrganisationCanvas = true;
          this.actionId = 'new';
          setTimeout(() => {
            this.openCanvas();
          }, 100);

          // Permissions
          this.store.select(selectAllPermissions).subscribe((res: any) => {
            if (res && res.groups) {
              this.permissionTreeData = res.groups;
              const mfeConfig = this.rdsPermissionRoleMfeConfig
              mfeConfig.input.treeData = [... this.permissionTreeData];
              mfeConfig.input.roleName = res.entityDisplayName;
              mfeConfig.input.isEdit = false;
              this.rdsPermissionRoleMfeConfig = { ...mfeConfig };
            }
          });

          // Claim Types
          this.store.dispatch(getAllClaimTypes());
          this.store.select(selectAllClaimsTypesRoles).subscribe((res: ClaimTypeDto[]) => {
            if (res) {
              res.forEach(element => {
                this.claimValueData.push({
                  id: element.id,
                  value: element.name,
                  some: element.name
                });
              });
              this.rdsClaimTypeRoleMfeConfig.input.claimValueData = this.claimValueData;
            }
          });
        },

        // Edit Actio click
        onNodeEdit: (node: any) => {
          this.actionId = 'edit';
          this.viewCreateOrganisationCanvas = true;
          this.canvasTitle = 'Edit Role';
          this.emitRoleData = {};
          this.emitPermissionsData = { name: undefined, permissions: { permissions: [] } };
          this.emitClaimData = { claimData: [], id: undefined };
          this.claimDisplayArray = [];
          this.claimValueData = [];
          this.selectedNodeInfo = node;
          this.node = node.data.displayName;
          this.emitPermissionsData.name = node.data.displayName;
          let openCanvasPromise = new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              this.openCanvas();
              this.emitClaimData.id = node.data.id;
              resolve();
            }, 100);
          });
          openCanvasPromise.then(() => {
            this.store.dispatch(getRolByEdit(this.emitClaimData.id));
            this.store.dispatch(getPermission(this.emitPermissionsData.name));
            this.store.dispatch(getAllClaimTypes());
            this.store.dispatch(getClaimTypes(this.emitClaimData.id));
          });

          // Bind Edit Role
          this.store.select(selectRoleForEdit).subscribe((res: IdentityRoleDto) => {
            if (res) {
              this.Roledetails = {};
              const itemRole: any = {
                name: res.name,
                id: res.id,
                isDefault: res.isDefault,
                isPublic: res.isPublic,
              };
              this.Roledetails['name'] = res.name;
              this.Roledetails['id'] = res.id;
              this.Roledetails['isDefault'] = res.isDefault;
              this.Roledetails['isPublic'] = res.isPublic;
              this.Roledetails = itemRole;
              const mfeConfig = this.RdsCompNewRoleConfig;
              mfeConfig.input.roleData = this.Roledetails;
              mfeConfig.input.EditShimmer = false;
              this.RdsCompNewRoleConfig = { ...mfeConfig };
            };
          });

          // Bind Edit Permissions
          this.store.select(selectAllPermissions).subscribe(res => {
            if (res && res.groups) {
              this.permissionTreeData = res.groups;
              const mfeConfig = this.rdsPermissionRoleMfeConfig
              mfeConfig.input.treeData = [... this.permissionTreeData];
              mfeConfig.input.roleName = res.entityDisplayName;
              mfeConfig.input.isEdit = true;
              this.rdsPermissionRoleMfeConfig = { ...mfeConfig };
            }
          });

          // Bind Edit Claim Types
          this.store.select(selectAllClaimsTypesRoles).subscribe((res: ClaimTypeDto[]) => {
            if (res) {
              res.forEach(element => {
                this.claimValueData.push({
                  id: element.id,
                  value: element.name,
                  some: element.name
                });
              });
              this.rdsClaimTypeRoleMfeConfig.input.claimValueData = this.claimValueData;
            };
          });
          this.store.select(selectClaimsTypeByRole).subscribe((res: IdentityRoleClaimDto[]) => {
            if (res) {
              if (this.claimDisplayArray.length > 0) this.claimDisplayArray = [];
              res.forEach(element => {
                this.claimDisplayArray.push({
                  roleId: element.roleId,
                  claimType: element.claimType,
                  claimValue: element.claimValue
                });
              });
              this.rdsClaimTypeRoleMfeConfig.input.claimDisplayArray = this.claimDisplayArray;
            };
          });
        },

        onSelectnode: (onSelectnodeevent) => { },
      }
    };

    // New Role
    this.RdsCompNewRoleConfig = {
      name: 'RdsCompNewRole',
      input: {
        roleData: this.Roledetails,
        isReset: this.isReset,
        EditShimmer: this.EditShimmer
      },
      output: {
        RoleInfo: (eventdata: any) => {
          if (eventdata.isOnSave) {
            this.emitRoleData = eventdata.role;
            this.activePage = 1;
          }
        },
        onCancel: () => {
          this.close();
        }
      }
    };

    // Permission
    this.rdsPermissionRoleMfeConfig = {
      name: 'RdsCompPermissionTree',
      input: {
        treeData: this.permissionTreeData,
        roleName: undefined,
        isEdit: false
      },
      output: {
        getAllselectedPermissions: (event: any) => {
          this.emitPermissionsData.permissions.permissions = [];
          this.emitPermissionsData.permissions.permissions = event;
        }
      }
    }

    // Claim Type
    this.rdsClaimTypeRoleMfeConfig = {
      name: 'RdsCompClaimTypeRole',
      input: {
        claimValueData: this.claimValueData,
        claimDisplayArray: this.claimDisplayArray
      },
      output: {
        addClaim: (data: any) => {
          if (this.actionId == 'edit') data.roleId = this.emitClaimData.id;
          this.claimDisplayArray.push(data);
          const mfeConfig = this.rdsClaimTypeRoleMfeConfig;
          mfeConfig.input.claimDisplayArray = this.claimDisplayArray;
        },
        deleteClaim: (deleteEvent: any) => {
          const deleteData = this.claimDisplayArray.find(x => x.roleId == deleteEvent.roleId);
          const deleteDataIndex = this.claimDisplayArray.indexOf(deleteData, 0);
          if (deleteDataIndex != undefined) this.claimDisplayArray.splice(deleteDataIndex, 1);
        },
        onClaimSave: () => {
          let promise = new Promise<void>((resolve, reject) => {

            // New
            if (this.actionId == 'new') {
              this.store.dispatch(saveRole(this.emitRoleData));
              this.store.dispatch(getRoles());
              this.store.select(selectAllRoles).subscribe(res => {
                const resArrayId: any[] = [];
                if (res && res.items) {
                  res.items.forEach(element => {
                    const item = {
                      id: element.id,
                      creationTime: undefined,
                      creatorId: undefined,
                      lastModificationTime: undefined,
                      lastModifierId: null,
                      isDeleted: false,
                      deleterId: null,
                      deletionTime: undefined,
                      parentId: null,
                      code: undefined,
                      displayName: element.name,
                      roles: [],
                      concurrencyStamp: undefined,
                      extraProperties: {}
                    }
                    resArrayId.push(item);
                  });
                  this.emitPermissionsData.name = this.emitRoleData.name;
                  const getId = resArrayId.filter(x => x.displayName == this.emitRoleData.name).map(m => m.id).toString();
                  this.emitClaimData.id = getId;
                  this.emitClaimData.claimData = this.claimDisplayArray;
                  for (let i = 0; i < this.claimDisplayArray.length; i++) {
                    this.emitClaimData.claimData[i].roleId = getId;
                  }
                  if (this.emitClaimData.id != '') {
                    resolve();
                  }
                }
              });
            }

            // Edit
            else if (this.actionId == 'edit') {
              if (this.claimDisplayArray.length > 0) this.emitClaimData.claimData = this.claimDisplayArray;
              const roleData = { ...this.emitRoleData, id: this.emitClaimData.id }
              this.store.dispatch(updateRole(roleData));
              this.store.dispatch(getRoles());
              this.store.select(selectAllRoles).subscribe(res => {
                if (res) {
                  this.emitPermissionsData.name = this.emitRoleData.name
                  resolve();
                }
              })
            }
          });
          promise.then(() => {
            setTimeout(() => {
              if (this.claimDisplayArray.length > 0) this.store.dispatch(saveClaims(this.emitClaimData));
            }, 1000);
          }).then(() => {
            setTimeout(() => {
              if (this.emitPermissionsData.permissions.permissions.length > 0) this.store.dispatch(savePermissions(this.emitPermissionsData));
              this.close();
            }, 2000);
          });
        },
        onCancel: () => {
          this.close();
        }
      }
    }
    this.updateOrganizationTree();
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }

  close(): void {
    this.viewCanvas = false;
    this.activePage = 0;
    this.Roledetails = undefined;
    this.treeData = [];
    this.selectedPermissions = [];
    this.EditShimmer = false;
  }

  updateOrganizationTree() {
    this.store.dispatch(getRoles());
    this.store.select(selectAllRoles).subscribe((res: any) => {
      this.isAnimation = false;
      if (res && res.items) {
        const resArrayId: any[] = []
        res.items.forEach(element => {
          const item = {
            id: element.id,
            creationTime: undefined,
            creatorId: undefined,
            lastModificationTime: undefined,
            lastModifierId: null,
            isDeleted: false,
            deleterId: null,
            deletionTime: undefined,
            parentId: null,
            code: undefined,
            displayName: element.name,
            roles: [],
            concurrencyStamp: undefined,
            extraProperties: {}
          }
          resArrayId.push(item);
        });
        this.getOriginalData = resArrayId;
        this.treeData2 = this._arrayToTreeConverterService.createTree(
          this.getOriginalData,
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
        const mfeConfig = this.rdsOrganizationTreeConfig;
        if (this.treeData2.length > 0) {
          mfeConfig.input.organizationTreeData = this.treeData2;
        }
        else {
          mfeConfig.input.organizationTreeData = this.treeData1;
        }
        this.rdsOrganizationTreeConfig = mfeConfig;
      }
    });
  }

  getNavTabItems(): any {
    return this.navtabsItems;
  }

  onCancelOrganisation(): void {
    this.viewCreateOrganisationCanvas = false;
    this.rdsPermissionRoleMfeConfig.input.treeData = [];
    this.activePage = 0;
  }

  openCanvas(): void {
    var offcanvas = document.getElementById('addNodeOffcanvas');
    if (offcanvas) {
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
      offcanvas.addEventListener('hidden.bs.offcanvas', event => {
        this.viewCreateOrganisationCanvas = false;
        this.selectedNodeInfo = undefined;
        this.node = '';
      })
    }
  }
}
