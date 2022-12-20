import { Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


export class TenantManagement {
  constructor(
    useDefault: boolean,
    allowTenants: boolean,
    securityImage: boolean,
    edition: string
  ) { }
}
@Component({
  selector: 'rds-comp-tenant-management',
  templateUrl: './rds-comp-tenant-management.component.html',
  styleUrls: ['./rds-comp-tenant-management.component.scss']
})
export class RdsCompTenantManagementComponent implements OnInit, OnChanges {
  @Input()
  //inputTypeList: any[] = [
  //{ value: 'Standard', some: 'Standard', status: 'Standard', isSelected: false },
  //{ value: 'Basic', some: 'Basic', status: 'Basic', isSelected: false },
  //{ value: 'Premium', some: 'Premium', status: 'Premium', isSelected: false },
  //{ value: 'Professional', some: 'Professional', status: 'Professional', isSelected: false }
  //]
  listDropdown: any[] = [];
  checkboxLabel: any;
  isMasterSel: boolean;
  selectedDate: any = [];
  @Input() editShimmer:boolean=false;
  @Output() tenantManagementData = new EventEmitter<any>();
  @Input()
  settings :any = {
      allowSelfRegistration: true,
      defaultEditionId: '',
      useCaptchaOnRegistration: true,
      isNewRegisteredTenantActiveByDefault:false

  };
  @Input()
  edition: string
  public selecteddata: TenantManagement = [];
  checkedCategoryList: any;
  @Input() invoiceData: any = { selected: '' };


  dataset?: any = {};


  // @Output() onSelect = new EventEmitter<{ item: any }>()
  @Output() change = new EventEmitter<any>();

  @Input() public settingsTenantEditionList: any = [];


  constructor(public translate:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.dataset = this.settings;
    
  }


  ngOnInit(): void {
    // this.dataset = this.settings;   
  }





  selectAllFeature(e: boolean, type: string) {
    switch (type) {
      case 'useDefault':
        this.settings.allowSelfRegistration = e;
        break;
      case 'allowTenants':
        this.settings.isNewRegisteredTenantActiveByDefault = e;
        break;
      case 'securityImage':
        this.settings.useCaptchaOnRegistration = e;
        break;
    }
    this.tenantManagementData.emit(this.settings);
  }

  selectedEdition(item: any) {
    var Result = item
    this.edition = Result.item.value;
  }

  getAllowTenants(event) {
    this.settings.defaultEditionId= this.dataset.defaultEditionId
    this.tenantManagementData.emit(this.settings);
  }

}
