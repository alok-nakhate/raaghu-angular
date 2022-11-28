import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertService, ComponentLoaderOptions, FindOrganizationUnitRolesInput, FindOrganizationUnitUsersInput, OrganizationUnitServiceProxy } from '@libs/shared';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { addRolesToOrganizationUnit, addUsersToOrganizationUnit, createTreeUnit, deleteMemberFromOrgUnit, deleteRoleFromOrgUnit, deleteRoles, deleteUnitTree, getOrganizationUnitMembers, getOrganizationUnitRoles, getOrganizationUnitRolesList, getOrganizationUnitTree, getOrganizationUnitUsersList, updateUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
import { selectOrganizationUnitMembers, selectOrganizationUnitRoles, selectOrganizationUnitRolesList, selectOrganizationUnitTree, selectOrganizationUnitUsersList } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { selectDefaultLanguage } from '@libs/state-management';
import { TranslateService } from '@ngx-translate/core';
import { transition, trigger, query, style, animate, } from '@angular/animations';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
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
  selectedRoles: any = [];
  selectedUsers: any = [];
  selectedTabIndex: any = 0;
  viewCanvas: boolean = false;
  nodeForm: FormGroup
  viewCreateOrganisationCanvas: boolean = false;
  usercanvasTitle: string = 'Select User';
  rolecanvasTitle: string = 'Select Role';
  selectedTreeNode: number = 0;
  public currentAlerts: any = [];
  canvasTitle: string = 'New Organization Unit';
  navtabsItems: any = [
    {
      label: this.translate.instant('Members'),
      tablink: '#Members',
      ariacontrols: 'Members',
    },
    {
      label: this.translate.instant('Roles'),
      tablink: '#Roles',
      ariacontrols: 'Roles',
    },
  ];
  public tableHeadersForMember: TableHeader[] = [
    {
      displayName: 'Users',
      key: 'userName',
      dataType: 'text',
      dataLength: 30,
      filterable: true,
      required: true,
      sortable: true
    },
    {
      displayName: 'Addition Time',
      key: 'additionTime',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true
    }
  ];
  public tableDataForMember = [];
  public tableHeadersForRoles: TableHeader[] = [
    {
      displayName: 'Role',
      key: 'roles',
      dataType: 'text',
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true
    },
    {
      displayName: 'Addition Time',
      key: 'additionTime',
      dataType: 'date',
      dataLength: 5,
      required: true,
      sortable: true
    },];
  public tableDataForRoles = [];
  public tableHeadersForRolesAdd = [
    {
      displayName: 'Roles',
      key: 'displayName',
      dataType: 'text',
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
      checkbox: true
    }
  ];
  public tableDataForRolesAdd = [];
  public tableHeadersForUserAdd = [
    {
      displayName: 'Users',
      key: 'name',
      dataType: 'text',
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
      checkbox: true
    }
  ];
  public tableDataForUserAdd = [];
  public tableDataForRoleAdd = [];
  public actions: any = [{ id: 'delete', displayName: 'Delete' }];
  public nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  public organizationName: string = '';
  node: string = '';
  selectedParent: any = null;
  selectedNodeInfo: any;
  organizationTreeData: any = [];
  constructor(
    private store: Store,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public datepipe: DatePipe,
    public translate: TranslateService,
    private alertService: AlertService
  ) {
  }
  ngOnInit(): void {
    this.isAnimation = true;
    this.subscribeToAlerts();
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.store.dispatch(getOrganizationUnitTree());
    this.updateOrganizationTree();
    this.updateMembersTable();
    this.updateRolesTable();
    this.updateUsersListTable();
    this.updateRolesListTable();
  }

  updateOrganizationTree() {
    this.store.select(selectOrganizationUnitTree).subscribe((res: any) => {
      this.isAnimation = false;
      if (res && res.items) {
        this.organizationTreeData = this._arrayToTreeConverterService.createTree(
          res.items,
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
      }
    });
  }

  updateMembersTable() {
    this.store.select(selectOrganizationUnitMembers).subscribe((res) => {
      this.isAnimation = false;
      this.tableDataForMember = [];
      if (res && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.id,
            userName: element.name,
            additionTime: this.datepipe.transform(new Date(element.addedTime), 'MM/dd/yyyy, hh:mm:ss a'),
            name: element.name.trim()
          }
          this.tableDataForMember.push(item);
        });
      }
    })
  }

  updateRolesTable() {
    this.store.select(selectOrganizationUnitRoles).subscribe((res) => {
      this.isAnimation = false;
      this.tableDataForRoles = [];
      if (res && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.id,
            roles: element.displayName,
            additionTime: this.datepipe.transform(new Date(element.addedTime), 'MM/dd/yyyy, hh:mm:ss a'),
            name: element.displayName.trim()
          }
          this.tableDataForRoles.push(item);
        });
      }
    })
  }

  updateUsersListTable() {
    this.store.select(selectOrganizationUnitUsersList).subscribe((res) => {
      this.isAnimation = false;
      if (res && res.items.length > 0) {
        this.tableDataForUserAdd = [];
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.value,
            name: element.name,
          }
          this.tableDataForUserAdd.push(item);
        });
      }
    })
  }

  updateRolesListTable() {
    this.store.select(selectOrganizationUnitRolesList).subscribe((res) => {
      this.isAnimation = false;
      if (res && res.items.length > 0) {
        this.tableDataForRoleAdd = [];
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.value,
            displayName: element.name,
            name: element.name.trim()
          }
          this.tableDataForRoleAdd.push(item);
        });
      }
    })
  }

  btnClick(event) {
    this.selectedTabIndex = event;
  }

  pushUser() {
    if (!this.selectedUsers || this.selectedUsers.length == 0) {
      return;
    }
    var AddUsersToOrganizationUnitInput = { userIds: this.selectedUsers, organizationUnitId: this.selectedTreeNode }
    this.store.dispatch(addUsersToOrganizationUnit(AddUsersToOrganizationUnitInput));
  }

  pushRole() {
    if (!this.selectedRoles || this.selectedRoles.length == 0) {
      return;
    }
    var AddRolesToOrganizationUnitInput = { roleIds: this.selectedRoles, organizationUnitId: this.selectedTreeNode }
    this.store.dispatch(addRolesToOrganizationUnit(AddRolesToOrganizationUnitInput));
  }

  newUser(event: any): void {
    const input = new FindOrganizationUnitUsersInput();
    input.organizationUnitId = this.selectedTreeNode;
    input.filter = "";
    input.skipCount = 0;
    input.maxResultCount = 1000;
    this.store.dispatch(getOrganizationUnitUsersList(input));
    if (event) {
      event.stopPropagation();
      this.usercanvasTitle = 'Select Users';
    }
    this.viewCanvas = true;
    this.selectedUsers = [];
    setTimeout(() => {
      var offcanvas = document.getElementById('addUserModal');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();

    }, 100);
  };

  newRole(event: any): void {
    const input = new FindOrganizationUnitRolesInput();
    input.organizationUnitId = this.selectedTreeNode;
    input.filter = "";
    input.skipCount = 0;
    input.maxResultCount = 1000;
    this.store.dispatch(getOrganizationUnitRolesList(input));
    if (event) {
      event.stopPropagation();
      this.rolecanvasTitle = 'Select Roles';
    }
    this.selectedRoles = [];
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById('addRoleModal');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
  };

  close(): void {
    this.viewCanvas = false;
  }

  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('Members');
    this.navtabsItems[1].label = this.translate.instant('Roles');
    return this.navtabsItems;
  }

  saveNode(nodeForm: NgForm): void {
    if (!nodeForm.valid) {
      return;
    }
    if (this.selectedNodeInfo && this.selectedNodeInfo && this.selectedNodeInfo.data.id) {
      const data: any = { data: { id: this.selectedNodeInfo.data.id, displayName: this.node } }
      this.store.dispatch(updateUnitTree(data));
    } else {
      const data: any = { parentId: this.selectedParent, displayName: this.node }
      this.store.dispatch(createTreeUnit(data))
    }

  }

  onCancelOrganisation(): void {
    this.viewCreateOrganisationCanvas = false;
  }

  openCanvas(): void {
    var offcanvas = document.getElementById('addNodeOffcanvas');
    if (offcanvas) {
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
      offcanvas.addEventListener('hidden.bs.offcanvas', event => {
        this.viewCreateOrganisationCanvas = false;
        this.selectedParent = null;
        this.selectedNodeInfo = undefined;
        this.node = '';
      })
    }
  }

  onDeleteNode(data: any) {
    this.store.dispatch(deleteUnitTree(data));
    this.updateOrganizationTree();
  }

  getSelectedParent(parent) {
    this.selectedParent = parent;
    this.canvasTitle = 'New Organization Unit';
    this.viewCreateOrganisationCanvas = true;
    setTimeout(() => {
      this.openCanvas();
    }, 100);
  }


  onNodeEdit(node: any) {
    this.canvasTitle = 'Edit Organization Unit';
    this.viewCreateOrganisationCanvas = true;
    this.selectedNodeInfo = node;
    this.node = node.data.displayName;
    setTimeout(() => {
      this.openCanvas();
    }, 100);
  }

  onSelectnode(onSelectnodeevent) {
    this.selectedTreeNode = onSelectnodeevent.item.data.id;
    this.organizationName = onSelectnodeevent.item.data.displayName;
    this.store.dispatch(getOrganizationUnitRoles(this.selectedTreeNode));
    this.store.dispatch(getOrganizationUnitMembers(this.selectedTreeNode))

  }

  onMemberActionSelection(event: any) {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteMemberFromOrgUnit({ userId: event.selectedData.id, organizationUnitId: this.selectedTreeNode }))
    }
  }

  onRoleActionSelection(event: any) {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteRoleFromOrgUnit({ roleId: event.selectedData.id, organizationUnitId: this.selectedTreeNode }))
    }
  }

  getAllCheckedItems(checkedItems: any, isUser: boolean) {
    this.selectedUsers = [];
    this.selectedRoles = [];
    checkedItems.forEach((item: any) => {
      if (item) {
        if (isUser) {
          this.selectedUsers.push(+item.id)
        } else {
          this.selectedRoles.push(+item.id)
        }
      }
    });
  }

  onAlertHide(event: any): void {
    // this.currentAlerts = event;
  }
  subscribeToAlerts() {
    const _currentAlerts: any = [];
    this.alertService.alertEvents.subscribe((alert) => {
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert)
      console.log(this.currentAlerts);

    });

    // this.currentAlerts = JSON.parse(JSON.stringify(_currentAlerts));
  }
}
