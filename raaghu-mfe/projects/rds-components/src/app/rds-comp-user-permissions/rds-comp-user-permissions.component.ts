import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PermissionNode, TreeType } from '../../models/pemission.model';
import { TreeNode } from '../../models/tree-node.model';
import { TableHeader } from '../../models/table-header.model';
import { ComponentLoader } from 'ngx-bootstrap/component-loader';
import { ComponentLoaderOptions } from 'projects/libs/shared/src/lib/component-loader-options.model';
import { TableAction } from '../../models/table-action.model';
import { TranslateService } from '@ngx-translate/core';
import { OrganizationTreeNode } from '../../models/organization-tree.model';
import { AlertService } from '@libs/shared';

declare let bootstrap: any;

@Component({
  selector: 'rds-comp-user-permissions',
  templateUrl: './rds-comp-user-permissions.component.html',
  styleUrls: ['./rds-comp-user-permissions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsCompUserPermissionsComponent implements OnInit {
  actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'delete', displayName: 'Delete' }]
  activePage: number = 0;
  canvasTitle: string = '';
  isReset: boolean = false;
  viewCanvas: boolean = false;
  selectedId: any = '';
  selectedOrganizationUnit: any = [];
  @Input() showLoadingSpinner: boolean = false;
  public user: any = {
    userInfo: undefined,
    userSettings: undefined,
    featureList: [],
  };
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  selectedFilteredPermissions :  any = []
  public navtabsItems: any = [];
  currentAlerts: any = [];
  listItems = [
    {
      value: 'Export to excel',
      some: 'value',
      id: 1,
      href: '',
      icon: 'bi bi-upload',
    },
    {
      value: 'Import from excel',
      some: 'value',
      id: 2,
      href: '',
      icon: 'bi bi-download',
    },
    {
      value: 'Click here download sample import file.',
      some: 'value',
      id: 3,
      href: '',
      icon: '',
    },
  ];

  @Input() public FilterPermissionList: any = [];
  @Input() public userList: any = [];
  @Input() public roles: any = [];
  @Input() public userinfo: any;
  @Input() isShimmer: boolean = false;
  @Input() editShimmer: boolean = false;
  @Input() public isEdit: boolean = false;
  @Input() public OrganizationUnit: any = [];
  @Input() organizationTreeList: [];
  @Input() permissionsList: PermissionNode[] = [];
  @Input() selectedPermissions: any = [];
  @Input() selectedOrganizations: any = [];
  @Input() listItemsm = [
    { value: 'New User', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Export To Excel', some: 'value', key: 'download', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Filter By Permission', some: 'value', key: 'filterByPermission', icon: 'funnel', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Output() Saveuserinfo = new EventEmitter<{ item: any }>();
  @Output() CreateOrEditUser = new EventEmitter<{ id: any }>();
  @Output() UpdateUserPermission = new EventEmitter<{
    Permission: any;
    id: any;
  }>();
  @Output() FilterPermission = new EventEmitter<{ FilterPermission: any }>();
  @Output() searchItem = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<{ item: any }>();
  @Output() onClose = new EventEmitter<any>();
  @Input() Selectedata: any = [];
  Selecteorganizationdata: any = [];
  treeData: [] = [];
  organizationtreeData: [] = [];
  PermissionFiltertreeData: any = [];
  selectedRoles: any = [];
  PermissinFilterSelectedata: any = [];
  viewCanvasFilter : boolean = false;
  @ViewChild("openFilterByPermission") openFilterByPermission: ElementRef;
  @Input() userHeaders: TableHeader[] = [
    {
      key: 'userName',
      displayName: 'User name',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '12%'
    },
    {
      key: 'name',
      displayName: 'Name',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '12%'
    },
    {
      key: 'roleName',
      displayName: 'Roles',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '13%'
    },
    {
      key: 'emailAddress',
      displayName: 'Email Address',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '20%'
    },
    {
      key: 'emailConfirmTemplate',
      displayName: 'Email Confirm',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '18%'
    },
    {
      key: 'statusTemplate',
      displayName: 'Status',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '10%'
    },
    {
      key: 'creationTime',
      displayName: 'Creation Time',
      dataType: 'text',
      filterable: true,
      sortable: true,
      colWidth: '18%'
    },
  ];
  selectedTreeNode: number;
  constructor(public translate: TranslateService,  private alertService: AlertService) { }
  @Input() orgTreeData = [];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  TreeType: TreeType = {
    IconLabel: false,
    Normal: false,
    checkbox: true,
  };
  TreeNodeLabeles: any = {
    ParentItemPlaceholder: 'Parent node',
    ChildItemPlaceholder: 'Child Node',
    ParentDescriptionPlaceholder: 'Parent label',
    ChildDescriptionPlaceholder: 'Child label',
    ParentNodeTitle: 'Parent Node Title',
    ChildNodeTitle: 'Child node Title',
  };
  ngOnInit(): void {
    this.activePage = 0;
    this.rdsOrganizationTreeConfig = {
      name: 'RdsOrganizationTree',
      input: {
        organizationTreeData: this.orgTreeData,
        nodeColor: this.nodeColors,
        mutable: true,
        OrganizationTreeType: this.TreeType,
        OrganizationTreeLabeles: this.TreeNodeLabeles,
        ButtonLabel: '',
      },
      output: {
        onSelectAll: (onSelectAllevent) => {
          console.log(onSelectAllevent);
        },
        onSelectnode: (onSelectnodeevent) => {
          this.selectedTreeNode = onSelectnodeevent.item.data.id;
        },
      },
    };
    this.subscribeToAlerts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const mfeConfig = this.rdsOrganizationTreeConfig;
    mfeConfig.input.orgTreeData = [...this.orgTreeData];
    this.rdsOrganizationTreeConfig = mfeConfig;
    this.selectedOrganizationUnit = [];
  }

  onAlertHide(event: any): void {
    this.currentAlerts = event;
  }
  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }

  getLabel(): string {
    if (this.activePage === this.navtabsItems.length - 1) {
      return 'Save';
    }
    return 'Next';
  }

  save(): void {
    this.getSelectedRoles();
    this.checkSelectedOrganizationUnits();
    const user: any = {
      userInfo: this.user.userInfo,
      roles: this.selectedRoles,
      organizationUnits: this.Selecteorganizationdata,
    };
    this.Saveuserinfo.emit({ item: user });
    this.isReset = true;
    this.activePage = 0;
    this.user = {
      userInfo: undefined,
      userSettings: undefined,
      featureList: [],
    };
    this.userinfo = undefined;
    this.onClose.emit();    var offcanvas = document.getElementById('userOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.selectedId = '';
    this.selectedPermissions = []
  }

  getUserData(event: any): void {
    if (event.next) {
      this.activePage = 1;
    }
    this.user.userInfo = event.user;
  }
  getUserSettings(event: any): void {
    if (event.next) {
      this.activePage = 2;
    }
    this.user.userSettings = event.settings;
  }
  getSelectedFeaturesList(event: any): void {
    this.user.featureList = event;
  }

  newUser(event): void {
    this.showLoadingSpinner = true;
    this.selectedId = '';
    this.viewCanvas = true;
    this.navtabsItems = [
      {
        label: this.translate.instant('User Information'),
        tablink: '#User Information',
        ariacontrols: 'basics',
      },
      {
        label: this.translate.instant('Roles'),
        tablink: '#claims',
        ariacontrols: 'claims',
      },
      {
        label: this.translate.instant('Organization Units'),
        tablink: '#organizationUnit',
        ariacontrols: 'organizationUnit',
      },
    ];
    this.CreateOrEditUser.emit({ id: undefined });
    if (event) {
      this.canvasTitle = this.translate.instant('New User');
      this.userinfo = undefined;
      event.stopPropagation();


    }
    this.activePage = 0;
  }

  close(): void {
    this.viewCanvas = false;
    this.user = {
      userInfo: undefined,
      userSettings: undefined,
      featureList: [],
    };
    this.userinfo = undefined;
    this.onClose.emit();
    this.showLoadingSpinner = false;
    this.selectedPermissions = []
    this.selectedFilteredPermissions = []
  }

  editTableRowData(event): void {
    this.canvasTitle = this.translate.instant('Edit User');
    this.selectedId = event.id;

    this.viewCanvas = true;
    if (event) {
      this.canvasTitle = this.translate.instant('Edit User');
      this.navtabsItems = [
        {
          label: this.translate.instant('User Information'),
          tablink: '#User Information',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Roles'),
          tablink: '#claims',
          ariacontrols: 'claims',
        },
        {
          label: this.translate.instant('Organization Units'),
          tablink: '#organizationUnit',
          ariacontrols: 'organizationUnit',
        },
        {
          label: this.translate.instant('Permissions'),
          tablink: '#permissions',
          ariacontrols: 'permissions',
        },
      ];
    } else {
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('userOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
    // this.newUser(undefined);
    this.CreateOrEditUser.emit({ id: this.selectedId });

  }
  getSelectedRoles() {
    this.selectedRoles = [];
    this.roles.forEach((item: any) => {
      if (item.isAssigned) {
        this.selectedRoles.push(item.roleName);
      }
    });
  }
  getSelectedPermissionsList(event: any): void {
    this.treeData = event;
    let permissionlist = [];
    if (this.treeData && this.treeData.length > 0) {
      this.Selectedata = this.iterateSelectedPermissions(
        this.treeData,
        permissionlist
      );
    }

  }

  getSelectedorganizationunits(event: any): void {
    this.organizationtreeData = event;
    let organizationList = [];
    if (this.organizationtreeData && this.organizationtreeData.length > 0) {
      this.Selecteorganizationdata = this.iterateSelectedOrganizationUnits(
        this.organizationtreeData,
        organizationList
      );
    }
    console.log(organizationList);
  }
  iterateSelectedPermissions(arr: any, permissionList): any {
    arr.forEach((item: any) => {
      if (item.selectedChildren && item.selectedChildren.length > 0) {
        this.iterateSelectedPermissions(item.selectedChildren, permissionList);
      }
      permissionList.push(item.data.name);
    });
    return permissionList;
  }
  iterateSelectedOrganizationUnits(arr: any, organizationList): any {
    arr.forEach((item: any) => {
      if (item.selected) {
        organizationList.push(item.data.id);
      }
      if (item.children && item.children.length > 0) {
        this.iterateSelectedOrganizationUnits(item.children, organizationList);
      }
    });
    return organizationList;
  }


  getSelectedUserPermissionFilterList(event: any): void {
    // if (event && event.length > 0) {
      this.PermissionFiltertreeData = event;
    // }
  }
  savePermission() {
    this.UpdateUserPermission.emit({
      Permission: this.Selectedata,
      id: this.selectedId,
    });
  }
  search(event: any) {
    this.searchItem.emit(event.detail);
  }
  FilterUserPermission() {
    this.FilterPermission.emit(this.PermissionFiltertreeData);
    this.viewCanvasFilter = false;
    this.selectedFilteredPermissions = []
  }

  checkSelectedOrganizationUnits() {
    this.selectedOrganizationUnit = [];
    this.OrganizationUnit.forEach((item: any) => {
      if (item.isAssignedUnit) {
        this.selectedOrganizationUnit.push(item.code);
      }
    });
  }
  onActionSelect(event: any): void {
    if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    } else if (event.actionId === 'delete') {
      this.deleteUser.emit(event.selectedData);
    }
  }
  exportToExcel(): void {

    this.downloadCSV(this.userList, this.userHeaders, 'UserExcel');
  }
  downloadCSV(tableData: any, tableHeaders: TableHeader[], filename: string): void {
    const csvData: any = this.ConvertToCSV(tableData, tableHeaders);
    const blob: any = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink: any = document.createElement('a');
    const url: any = URL.createObjectURL(blob);
    const isSafariBrowser: boolean = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  public ConvertToCSV(objArray: Array<object>, headerList: TableHeader[]): string {
    const array: any = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str: string = '';
    let row: string = 'S.No,';
    // const displayedHeaders: Array<string> = ['Name', 'Time', 'Value'];
    for (const index in headerList) {
      row += headerList[index].displayName + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i: number = 0; i < array.length; i++) {
      let line: any = (i + 1) + '';
      for (const index in headerList) {
        if (index) {
          const head: any = headerList[index].key;
          line += ',' + array[i][head];
        }
      }
      str += line + '\r\n';
    }
    return str;
  }

  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('User Information');
    this.navtabsItems[1].label = this.translate.instant('Roles');
    this.navtabsItems[2].label = this.translate.instant('Organization Units');
    return this.navtabsItems;
  }

  // fabmenu mobile ts


  onSelectMenu(event: any) {
    if (event.key === 'new') {
      event = new PointerEvent("click")
      this.newUser(event);
    }
    else if (event.key === 'download') {
      this.exportToExcel();
    }
    else if (event.key === 'filterByPermission') {
      let el: HTMLElement = this.openFilterByPermission.nativeElement as HTMLElement;
      el.click();
    }
  }
  openCanvas(canvasId , viewCanvas : boolean): void {
    this.viewCanvas = viewCanvas;
    setTimeout(() => {
      var offcanvas = document.getElementById(canvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1);
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
    });
  }

  openCanvasFilter(canvasId , viewCanvasFilter : boolean): void{
    this.viewCanvasFilter = viewCanvasFilter;
    this.selectedPermissions = []
    setTimeout(() => {
      var offcanvas = document.getElementById(canvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1);
  }
}
