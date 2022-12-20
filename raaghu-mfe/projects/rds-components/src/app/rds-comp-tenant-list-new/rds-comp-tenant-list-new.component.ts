import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-tenant-list-new',
  templateUrl: './rds-comp-tenant-list-new.component.html',
  styleUrls: ['./rds-comp-tenant-list-new.component.scss']
})
export class RdsCompTenantListNewComponent implements OnInit {
  
  manageHost='Manage Host Admin features';
  activePage: number = 0;
  canvasTitle: string = '';
  isReset: boolean = false;
  viewCanvas: boolean = false;
  selectedId: any = '';
  isTenantInfoValid: boolean = false;
  actions: TableAction[] = [ 
    { id: 'edit', displayName: this.translate.instant('Edit') }, 
    { id: 'delete', displayName: this.translate.instant('Delete') }]
  @Input() tenantData: any;
  @Input() isShimmer: boolean = false;
  @Input() listItems = [
    { value: 'New Tenant', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  // @Input() tenantFeatures: any = [];
  @Input() tenantFeatureValues: any = [];
  @Input() editShimmer: boolean = false
  @Output() onSaveTenant = new EventEmitter<any>();
  @Output() onEditTenant = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() onSaveFeatures = new EventEmitter<any>();
  @Output() getHostFeatureEmitter = new EventEmitter<any>();
  @Output() onSaveTenantHost = new EventEmitter<any>();
    tenantInfo: undefined;
   tenantFeaturesList : undefined;
   tenantFeaturesHostList : undefined;
  //   // featureList: [],
  // };
  public navtabsItems: any = [];

  @Input() public tenantList: any = [];
  public tableData: any = [];
  @Input() public editionList: any = [];
  @Input() public twoFactorList: any = [
    {displayText : 'Optional', value : 'Optional'},
    {displayText : 'Disabled', value : 'Disabled'},
    {displayText : 'Forced', value : 'Forced'}
  ];
  buttonSpinnerForNewUser : boolean = true;
  buttonSpinnerForSave : boolean = true;

  currentAlerts: any = [];
  offCanvasId = 'tenantOffcanvashost';
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

  @Input() tenantHeaders: TableHeader[] = [];
  constructor(public translate: TranslateService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.activePage = 0;
    this.subscribeToAlerts();
  }

  ngDoCheck(): void {
    this.tableData = [...this.tenantList];
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

  saveTenantData(): void {
    this.buttonSpinnerForSave = true;
    this.buttonSpinnerForNewUser = false;
    // if (!this.selectedFeatureList || this.selectedFeatureList.length === 0) {
    //   return;
    // }
    const data = {
      id: this.selectedId,
      featureValues: this.tenantFeaturesList,
      tenantInfo : this.tenantInfo
    };
     this.activePage = 0;
    var offcanvas = document.getElementById('tenantOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
     this.viewCanvas = false;
      // this.onSaveFeatures.emit(data)
      this.onSaveTenant.emit(data);
      this.activePage = 0;
      var offcanvas = document.getElementById('tenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
      this.viewCanvas = false;
    
  }

  saveTenantHostFeature(): void {
  
      this.onSaveTenantHost.emit(this.tenantFeaturesHostList);
     this.activePage = 0;
    var offcanvas = document.getElementById('tenantOffcanvashost');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
     this.viewCanvas = false;
      this.activePage = 0;
      var offcanvas = document.getElementById('tenantOffcanvashost');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
      this.viewCanvas = false;
    
  }

  getTenantData(event: any): void {
    if (event.next) {
      this.activePage = 1;
      // this.onSaveTenant.emit(this.tenant);
    }
    this.tenantInfo = event.tenant;
    if (!event || !event.tenant) {
      this.isTenantInfoValid = false;
    } else {
      this.isTenantInfoValid = true;
    }
  }
  getTenantFeature(event : any) : void{
    this.tenantFeaturesList = event
  }
  getTenantFeatureHost(event : any) : void{
    this.tenantFeaturesHostList = event
  }

  newTenantHost(event: any): void {
    this.selectedId = '';
    this.viewCanvas = true;
    this.getHostFeatureEmitter.emit(true);
    if (event) {
      this.canvasTitle = 'Manage Host Admin Features';
      this.tenantFeaturesHostList = undefined
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('tenantOffcanvashost');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }

  newTenant(event): void {
    this.buttonSpinnerForNewUser = true;
    this.buttonSpinnerForSave = false;
    this.selectedId = '';
    this.viewCanvas = true;
    if (event) {
      this.canvasTitle = 'NEW TENANT';
      this.tenantData = undefined;
      this.tenantFeaturesList = undefined

      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#tenant-information',
          ariacontrols: 'Basics',
        },
        {
          label: this.translate.instant('Features'),
          tablink: '#features',
          ariacontrols: 'features',
        },
      ];
    } else {
      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#tenant-information',
          ariacontrols: 'Basics',
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
       this.tenantInfo= undefined,
    this.tenantData = undefined;
    this.tenantFeaturesList = undefined
    this.buttonSpinnerForSave = false;
    this.buttonSpinnerForNewUser = false;
  }
  editTableRowData(event): void {
    this.canvasTitle = 'EDIT TENANT';
    this.newTenant(undefined);
    this.onEditTenant.emit(event.id);
    this.selectedId = event.id;
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEvent.emit(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    }
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

  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.newTenant(event);
    }
  }
  show():void{
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}



