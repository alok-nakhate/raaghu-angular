import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TreeNode } from 'projects/rds-components/src/models/tree-node.model';

declare let bootstrap: any;

@Component({
  selector: 'rds-comp-tenant-list',
  templateUrl: './rds-comp-tenant-list.component.html',
  styleUrls: ['./rds-comp-tenant-list.component.scss']
})
export class RdsCompTenantListComponent implements OnInit {

  activePage: number = 0;
  canvasTitle: string = '';
  isReset: boolean = false;
  viewCanvas: boolean = false;
  selectedId: any = '';
  isTenantInfoValid: boolean = false;
  actions: TableAction[] = [
    { id: 'loginAsTenant', displayName: this.translate.instant('Login as Tenant') },
    { id: 'edit', displayName: this.translate.instant('Edit') },
    { id: 'delete', displayName: this.translate.instant('Delete') }]

  userTableActions: TableAction[] = [
    { id: 'loginIn', displayName: this.translate.instant('Login') },
  ];
  @Input() tenantSettingsInfo: any;
  @Input() tenantData: any;
  @Input() isShimmer: boolean = false;
  @Input() listItems = [
    { value: 'New Tenant', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() tenantFeatures: any = [];
  @Input() tenantFeatureValues: any = [];
  @Input() editShimmer: boolean = false
  @Output() onSaveTenant = new EventEmitter<any>();
  @Output() onEditTenant = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() onSaveFeatures = new EventEmitter<any>();
  @Output() onSelectTenant = new EventEmitter<any>();
  @Output() onTenantLogIn = new EventEmitter<any>();
  public tenantId: any;

  public tenant: any = {
    tenantInfo: undefined,
    tenantSettings: undefined,
    featureList: [],
  };
  public navtabsItems: any = [];

  @Input() public tenantList: any = [];
  @Input() public userList: any = [];
  @Input() tenantLoginList: any = [];

  public tableData: any = [];
  public userTableData: any = [];
  @Input() public editionList: any = [];
  showLoadingSpinner: boolean = false;
  // buttonSpinnerForSave : boolean = true;

  viewLoginAsTenantCanvas: boolean = false

  currentAlerts: any = [];

  public featureList: TreeNode[] = [
    {
      ItemCode: 'Test tenant Scope Feature',
      ItemDescription: 'Test tenant Scope Feature',
      level: 1,
      children: [],
      selected: false,
      id: 1,
    },
    {
      ItemCode: 'Chat',
      ItemDescription: 'Chat',
      level: 1,
      id: 2,
      children: [
        {
          id: 6,
          ItemCode: 'Chat With Host',
          ItemDescription: 'Chat With Host',
          level: 2,
          children: [],
          selected: false,
          parentId: 2,
        },
        {
          id: 7,
          ItemCode: 'Chat With Other Tenants',
          ItemDescription: 'Chat With Other Tenants',
          level: 2,
          children: [],
          selected: false,
          parentId: 2,
        },
      ],
      selected: false,
    },
    {
      id: 3,
      ItemCode: 'Maximum User Count',
      ItemDescription: 'Maximum User Count',
      level: 1,
      children: [],
      selected: false,
    },
    {
      id: 4,
      ItemCode: 'Test Check Feature',
      ItemDescription: 'Test Check Feature',
      level: 1,
      children: [],
      selected: false,
    },
    {
      id: 5,
      ItemCode: 'Test Check Feature',
      ItemDescription: 'Test Check Feature',
      level: 1,
      children: [],
      selected: false,
    },
  ];

  @Input() tenantHeaders: TableHeader[] = [];
  @Input() tenantHeadersUser: TableHeader[] = [];

  selectedFeatureList: any = [];
  showEmail: boolean;
  showEmailList: boolean = false;
  showEditData: boolean = false;

  constructor(public translate: TranslateService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.activePage = 0;
    this.subscribeToAlerts();
  }

  ngDoCheck(): void {
    this.tableData = [...this.tenantList];
    this.userTableData = [...this.userList];
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
    if (!this.selectedFeatureList || this.selectedFeatureList.length === 0) {
      return;
    }
    const data = {
      id: this.selectedId,
      featureValues: this.selectedFeatureList,
    };
    this.onSaveFeatures.emit(data);
    this.activePage = 0;
    var offcanvas = document.getElementById('tenantOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  iterateSelectedFeatures(arr: any, featureList): any {
    arr.forEach((item: any) => {
      if (item.selectedChildren && item.selectedChildren.length > 0) {
        this.iterateSelectedFeatures(item.selectedChildren, featureList);
      }
      const element: any = {
        name: item.data.name,
        value: item.selected,
      };
      featureList.push(element);
    });

    return featureList;
  }

  getTenantData(event: any): void {
    if (event.next) {
      this.activePage = 1;
    }
    this.tenant.tenantInfo = event.tenant;
    if (!event || !event.tenant) {
      this.isTenantInfoValid = false;
    } else {
      this.isTenantInfoValid = true;
    }
  }
  getTenantSettings(event: any): void {

    this.tenant.tenantSettings = event.settings;
    if (event.next) {
      this.onSaveTenant.emit(this.tenant);
      this.activePage = 0;
      var offcanvas = document.getElementById('tenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
      this.viewCanvas = false;
    }
  }
  getSelectedFeaturesList(event: any): void {
    this.selectedFeatureList = event;
  }

  newTenant(event, showEmail?: boolean): void {
    this.selectedId = '';
    this.viewCanvas = true;
    this.showEmailList = showEmail ? true : false;
    this.showEditData = showEmail ? true : false;
    if (showEmail) {
      this.tenant = {
        tenantInfo: undefined,
        tenantSettings: undefined,
        featureList: [],
      };
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      const eventdata: any = {
        newtenant: true,
        reset: true
      }
      this.onReset.emit(eventdata);
      this.isTenantInfoValid = false;
    }
    if (event) {
      this.canvasTitle = 'NEW TENANT';
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      this.showLoadingSpinner = true;
      this.navtabsItems = [
        {
          label: this.translate.instant('Tenant Information'),
          tablink: '#tenant-information',
          ariacontrols: 'tenant-information',
        },
        {
          label: this.translate.instant('Settings'),
          tablink: '#settings',
          ariacontrols: 'settings',
        },
      ];
    } else {
      this.navtabsItems = [
        {
          label: this.translate.instant('Tenant Information'),
          tablink: '#tenant-information',
          ariacontrols: 'tenant-information',
        },
        {
          label: this.translate.instant('Settings'),
          tablink: '#settings',
          ariacontrols: 'settings',
        },
        {
          label: this.translate.instant('Features'),
          tablink: '#features',
          ariacontrols: 'features',
        },
      ];
    }

    setTimeout(() => {
      var offcanvas = document.getElementById('tenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }

  close(): void {
    this.viewCanvas = false;
    this.tenant = {
      tenantInfo: undefined,
      tenantSettings: undefined,
      featureList: [],
    };
    this.tenantData = undefined;
    this.tenantSettingsInfo = undefined;
    this.showLoadingSpinner = false;
  }
  editTableRowData(event): void {
    this.canvasTitle = 'EDIT TENANT';
    this.newTenant(undefined);
    this.onEditTenant.emit(event.id);
    this.selectedId = event.id;
  }

  loginAsTenant(event): void {
    this.viewLoginAsTenantCanvas = true;
    this.tenantId = event.selectedData.id;
    const data: any = {
      tenantId: event.selectedData.id,
      excludeCurrentUser: true,
      maxResultCount: 1000,
      skipCount: 0,
      filter: "",
    }
    this.onSelectTenant.emit(data);
    console.log(data)
    // this.onTenantLogIn.emit(data);
    this.canvasTitle = "Select a User";
    setTimeout(() => {
      var offcanvas = document.getElementById('loginAsTenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

  }

  loginTenant(event): void {
    const data: any = {
      tenantId: this.tenantId,
      userId: event.selectedData.id
    }
    this.onTenantLogIn.emit(data);
    this.viewLoginAsTenantCanvas = false;
    console.log(data);
  }

  closeLoginAsTenant(): void {
    this.viewLoginAsTenantCanvas = false;

  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEvent.emit(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    }
    else if (event.actionId === 'loginAsTenant') {
      this.loginAsTenant(event);
    }
  }

  onUserDataActionSelect(event: any): void {
    if (event.actionId === 'loginIn') {
      this.loginTenant(event)
    }
  }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
        sticky: alert.sticky
      };
      this.currentAlerts.push(currentAlert);
      this.showLoadingSpinner = false;
    });


  }

  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.newTenant(event);
    }
  }
  show(): void {
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
  onAlertHide(event: any): void {
    this.currentAlerts = event;
  }

}
