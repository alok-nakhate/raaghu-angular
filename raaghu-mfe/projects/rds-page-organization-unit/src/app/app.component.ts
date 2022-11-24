import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions, FindOrganizationUnitRolesInput, FindOrganizationUnitUsersInput, OrganizationUnitServiceProxy } from '@libs/shared';
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
  organizationCount: any;
  userUniqueId: any;
  roleUniqueId: any;
  viewCanvas: boolean = false;
  nodeForm: FormGroup
  ItemsDescription: FormControl;
  activePage: number = 0;
  viewCreateOrganisationCanvas: boolean = false;
  usercanvasTitle: string = 'Select User';
  rolecanvasTitle: string = 'Select Role';
  selectedTreeNode: number = 0;
  offcanvasId: string = 'org_canvas';
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

  tableHeadersForMember: TableHeader[] = [{ displayName: 'Users', key: 'userName', dataType: 'text', dataLength: 30, filterable: true, required: true, sortable: true },
  { displayName: 'Addition Time', key: 'additionTime', dataType: 'text', dataLength: 5, required: true, sortable: true },];
  tableDataForMember = [];

  tableHeadersForRoles: TableHeader[] = [{ displayName: 'Role', key: 'roles', dataType: 'text', dataLength: 5, required: false, filterable: true, sortable: true },
  { displayName: 'Addition Time', key: 'additionTime', dataType: 'date', dataLength: 5, required: true, sortable: true },];
  tableDataForRoles = [];

  tableHeadersForRolesAdd = [{ displayName: 'Roles', key: 'displayName', dataType: 'text', dataLength: 5, required: false, filterable: true, sortable: true, checkbox: true },];
  tableDataForRolesAdd = [];

  tableHeadersForUserAdd = [{ displayName: 'Users', key: 'name', dataType: 'text', dataLength: 5, required: false, filterable: true, sortable: true, checkbox: true },];
  tableDataForUserAdd = [];

  rdsDataTableForMemberMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForMember,
      tableHeaders: this.tableHeadersForMember,
      recordsPerPage: 10,
      width: '100%',
      pagination: true,
      actions: [{ id: 'delete', displayName: 'Delete' }],
      noDataTitle: 'Currently you do not have member'
    },
    output: {
      onActionSelection: (event: any) => {
        if (event.actionId === 'delete') {
          this.store.dispatch(deleteMemberFromOrgUnit({ userId: event.selectedData.id, organizationUnitId: this.selectedTreeNode }))
          this.updateOrganizationTree();
          this.updateMembersTable();
        }
      }
    }
  };

  rdsDataTableForRoleMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForRoles,
      tableHeaders: this.tableHeadersForRoles,
      recordsPerPage: 10,
      width: '100%',
      pagination: true,
      actions: [{ id: 'delete', displayName: 'Delete' }],
      noDataTitle: 'Currently you do not have role'
    },
    output: {
      onActionSelection: (event: any) => {
        if (event.actionId === 'delete') {
          this.store.dispatch(deleteRoleFromOrgUnit({ roleId: event.selectedData.id, organizationUnitId: this.selectedTreeNode }))
          this.updateOrganizationTree();
          this.updateRolesTable();
        }
      }
    }
  };

  rdsDataTableForUserListMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForUserAdd,
      tableHeaders: this.tableHeadersForUserAdd,
      recordsPerPage: 5,
      enableCheckboxSelection: true,
      width: '100%',
      pagination: true,
      noDataTitle: 'Currently you do not have user',
      noDataSubTitle: 'Click on the button above to add'
    },
    output: {
      // onSelectedData: (data) => {
      //   this.pushUserData = data;
      // },
      getAllCheckedItems: (checkedItems: any) => {
        this.selectedUsers = [];
        checkedItems.forEach((item: any) => {
          if (item) {
            this.selectedUsers.push(+item.id)
          }
        });
      }
    }
  };

  rdsDataTableForRoleListMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForRolesAdd,
      tableHeaders: this.tableHeadersForRolesAdd,
      recordsPerPage: 5,
      width: '100%',
      pagination: true,
      enableCheckboxSelection: true,
      noDataTitle: 'Currently you do not have role',
      noDataSubTitle: ''
    },
    output: {

      getAllCheckedItems: (checkedItems: any) => {
        this.selectedRoles = [];
        checkedItems.forEach((item: any) => {
          if (item) {
            this.selectedRoles.push(+item.id)
          }
        });
      }
    }
  };



  TreeNodeLabeles: any = {

    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder: "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder: "Child label",
    ChildDescriptionEditPlaceholder: "Child Label",
    ParentNodeTitle: "Parent Node Title",
    ChildNodeTitle: "Child node Title",

  }
  TreeType: any = {
    IconLabel: true,
    Normal: false,
    checkbox: false,

  }
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

  organizationName: any;
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  pushUserData: any;
  pushRoleData: any;
  addedDataRole: boolean = false;
  addedDataMember: boolean = false;
  treeData2: any;
  node: string = '';
  selectedParent: any = null;
  selectedNodeInfo: any;
  constructor(
    private store: Store,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    private _organizationUnitService: OrganizationUnitServiceProxy,
    public datepipe: DatePipe,
    public translate: TranslateService
  ) {
  }
  ngOnInit(): void {


    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.store.dispatch(getOrganizationUnitTree());
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
      }
    };

    this.updateOrganizationTree();

  }

  updateOrganizationTree() {
    this.store.select(selectOrganizationUnitTree).subscribe((res: any) => {
      this.isAnimation = false;
      if (res && res.items) {
        this.treeData2 = this._arrayToTreeConverterService.createTree(
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

      const mfeConfig = this.rdsDataTableForMemberMfeConfig
      mfeConfig.input.tableData = [...this.tableDataForMember];
      //mfeConfig.input.refresh = true;
      this.rdsDataTableForMemberMfeConfig = { ...mfeConfig };
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
      const mfeConfig = this.rdsDataTableForRoleMfeConfig
      mfeConfig.input.tableData = [...this.tableDataForRoles];
      //mfeConfig.input.refresh = true;
      this.rdsDataTableForRoleMfeConfig = { ...mfeConfig };
    })
  }
  updateUsersListTable(data) {
    const input = new FindOrganizationUnitUsersInput();
    input.organizationUnitId = data;
    input.filter = "";
    input.skipCount = 0;
    input.maxResultCount = 1000;
    this.store.dispatch(getOrganizationUnitUsersList(input));
    this.store.select(selectOrganizationUnitUsersList).subscribe((res) => {
      this.isAnimation = false;
      if (res && res.items.length > 0) {
        this.addedDataMember = true;
        let tableDataForUserList = [];
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.value,
            name: element.name,
          }
          tableDataForUserList.push(item);
        });
        const mfeConfig = this.rdsDataTableForUserListMfeConfig
        mfeConfig.input.tableData = [...tableDataForUserList];
        //mfeConfig.input.refresh = true;
        this.rdsDataTableForUserListMfeConfig = { ...mfeConfig };
      }
      else {
        this.addedDataMember = false;
      }
    })
  }

  updateRolesListTable(data) {
    const input = new FindOrganizationUnitRolesInput();
    input.organizationUnitId = data;
    input.filter = "";
    input.skipCount = 0;
    input.maxResultCount = 1000;
    this.store.dispatch(getOrganizationUnitRolesList(input));
    this.store.select(selectOrganizationUnitRolesList).subscribe((res) => {
      this.isAnimation = false;
      if (res && res.items.length > 0) {
        this.addedDataRole = true;
        let tableDataForRoles1 = [];
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.value,
            displayName: element.name,
            name: element.name.trim()
          }
          tableDataForRoles1.push(item);
        });
        const mfeConfig = this.rdsDataTableForRoleListMfeConfig
        mfeConfig.input.tableData = [...tableDataForRoles1];
        //mfeConfig.input.refresh = true;
        this.rdsDataTableForRoleListMfeConfig = { ...mfeConfig };
      }
      else {
        this.addedDataRole = false;
      }
    })
  }


  btnClick(event) {
    this.selectedTabIndex = event;
    if (this.selectedTabIndex == 0) {
      this.updateMembersTable();
    }
    if (this.selectedTabIndex == 1) {
      this.updateRolesTable();
    }
  }


  pushUser() {
    var AddUsersToOrganizationUnitInput = { userIds: this.selectedUsers, organizationUnitId: this.selectedTreeNode }
    this.store.dispatch(addUsersToOrganizationUnit(AddUsersToOrganizationUnitInput));
    const self = this;
    var timesRun = 0;
    var refreshIntervalId = setInterval(function () {
      timesRun += 1;
      if (timesRun === 2) {
        clearInterval(refreshIntervalId);
      }
      self.updateOrganizationTree();
    }, 100);
  }
  pushRole() {
    var AddRolesToOrganizationUnitInput = { roleIds: this.selectedRoles, organizationUnitId: this.selectedTreeNode }
    this.store.dispatch(addRolesToOrganizationUnit(AddRolesToOrganizationUnitInput));
    const self = this;
    var timesRun = 0;
    var refreshIntervalId = setInterval(function () {
      timesRun += 1;
      if (timesRun === 2) {
        clearInterval(refreshIntervalId);
      }
      self.updateOrganizationTree();
    }, 100);
  }

  newUser(event: any): void {
    this.updateUsersListTable(this.selectedTreeNode);
    if (event) {
      this.userUniqueId = undefined;
      event.stopPropagation();
      this.usercanvasTitle = 'Select Users';
    }
    this.activePage = 0;
    this.viewCanvas = true;
    this.selectedUsers = [];
    setTimeout(() => {
      var offcanvas = document.getElementById('addUserModal');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();

    }, 100);
  };
  newRole(event: any): void {
    if (event) {
      this.roleUniqueId = undefined;
      event.stopPropagation();
      this.rolecanvasTitle = 'Select Roles';
    }
    this.activePage = 0;
    this.selectedRoles = [];
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById('addRoleModal');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      this.updateRolesListTable(this.selectedTreeNode);
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

    // this.updateOrganizationTree();
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

  onDeleteNode (data: any)  {
    this.store.dispatch(deleteUnitTree(data));
    this.updateOrganizationTree();
  }

  getSelectedParent (parent)  {
    this.selectedParent = parent;
    this.canvasTitle = 'New Organization Unit';
    this.viewCreateOrganisationCanvas = true;
    setTimeout(() => {
      this.openCanvas();
    }, 100);
  }

  
  onNodeEdit(node: any)  {
    this.canvasTitle = 'Edit Organization Unit';
    this.viewCreateOrganisationCanvas = true;
    this.selectedNodeInfo = node;
    this.node = node.data.displayName;
    setTimeout(() => {
      this.openCanvas();
    }, 100);
  }

  onSelectnode(onSelectnodeevent)  {
    this.selectedTreeNode = onSelectnodeevent.item.data.id;
    this.organizationName = onSelectnodeevent.item.data.displayName;
    this.store.dispatch(getOrganizationUnitRoles(this.selectedTreeNode));
    this.store.dispatch(getOrganizationUnitMembers(this.selectedTreeNode))
    this.updateMembersTable();
    this.updateRolesTable();
  }
}
