import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TableHeader } from '@libs/rds-elements';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
import { TreeNode } from 'projects/rds-components/src/models/tree-node.model';

declare var bootstrap: any;

@Component({
  selector: 'rds-comp-features',
  templateUrl: './rds-comp-features.component.html',
  styleUrls: ['./rds-comp-features.component.scss']
})
export class RdsCompFeaturesComponent implements OnInit {

  actions: TableAction[] = [{ id: 'edit', displayName: this.translate.instant('Edit') }, { id: 'delete', displayName: this.translate.instant('Delete') }, { id: 'moveTenant', displayName: this.translate.instant('Move Tenants to Another Edition') }]
  @Input() selectedFeatures = [];
  @Input() selectedEdition: any;
  @Input() EditionsTableHeader: TableHeader[] = [];
  @Input() EditionsTableData: any = [];
  @Input() recordsPerpage: number = 10;
  @Input() tableStyle: string = "light";
  @Input() EditionName: string;
  @Input() AnnualPrice: number = 0;
  @Input() TrailPeriod: number = 0;
  @Input() listItems = [
    { value: 'New Edition', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() ExpiryInterval: number = 0;
  @Input() freeEditon: string;
  @Input() isDefault: boolean = false;
  @Input() isShimmer: boolean = false;
  @Input() editShimmer: boolean = true;
  @Input() featureList: any = [];
  @Input() nodeColors = [];
  @Input() treeData: TreeNode[] = [];
  @Input() showLoadingSpinner: boolean = false;
  @Output() deleteEdition = new EventEmitter<{ item: any }>();
  @Output() onEditionSave = new EventEmitter<any>();
  @Output() updateEdition = new EventEmitter<any>();
  @Output() searchItem = new EventEmitter<any>();
  @Output() onMoveTenantAction = new EventEmitter<any>();
  @Output() onMoveTenant = new EventEmitter<any>();
  tableData: any = [];
  selectedFeatureList: any = [];
  public viewCanvas: boolean = false;
  activePage: number = 0;
  editionnameRequired: boolean = false;
  annualpriceRequired: boolean = false;
  trailperiodRequired: boolean = false;
  expiryintervalRequired: boolean = false;
  public isEdition: boolean = false;
  id: number | undefined = undefined;
  canvasTitle: string = 'NEW EDITION';
  moveTenantCanvasTitle: string = 'MOVE TENANTS TO ANOTHER EDITION  ';

  disable: boolean;
  dataset?: any = {};

  contentOnEdit: boolean;
  selectpermissionList: any = [];
  showAssignEditionDropdown: boolean;
  @Input() public editionStandardList: any = [];
  @Input() public editionList: any = [];
  @Input() public freeEditions: any = [];
  @Input() tenantCount: number = 0;

  isReset: boolean = false;
  freeEditionId = undefined
  targetEdition: string = '';
  targetEditionId = undefined
  sourceEditionId: string = '';


  viewMoveTenantCanvas: boolean = false;

  itemListImmediately = [];

  itemListAfterTrailPeriod = [];


  itemListSubscription = [];

  itemListAssign = [];


  navtabsItems: any = [];

  TreeNodeLabeles: any = {
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder: "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder: "Child label",
    ParentNodeTitle: "Parent Node Title",
    ChildNodeTitle: "Child node Title",
  }
  TreeType: any = {
    IconLabel: false,
    Normal: false,
    checkbox: true,
  }

  rdsEditionTableMfeConfig: ComponentLoaderOptions;
  // rdshierarchyConfig: ComponentLoaderOptions;
  public Editionform: FormGroup;

  constructor(public datepipe: DatePipe, public translate: TranslateService) {

  }
  ngOnChanges(): void {
  }
  ngDoCheck(): void {
    this.tableData = [...this.EditionsTableData];
    if (this.isEdition && (this.id === undefined || this.id === null)) {
      this.EditionName = this.selectedEdition.displayName;
      this.id = this.selectedEdition.id;
    }

  }

  ngOnInit(): void {

    if(this.freeEditionId){
      this.freeEditions.forEach((res: any) => {
        if (res && +res.value===+this.freeEditionId) {
          this.freeEditon = res.some;
        }
      })
    }

    if(this.targetEditionId){
      this.editionList.forEach((res : any) => {
        if(res && +res.value===+this.targetEditionId){
          this.targetEdition= res.some;
        }
      })
    }
  }

  onEdit(event): void {
    this.contentOnEdit = true;
    this.updateEdition.emit(event.id)
    this.isEdition = true;
    this.viewCanvas = true;
    this.canvasTitle = 'UPDATE EDITION'
    this.activePage = 0;
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1);
  }

  addEdition(editionForm: NgForm): void {
    editionForm.form.markAllAsTouched();
    if (editionForm.invalid) {
      return;
    }
    let featureList = [];
    // if (this.selectedFeatureList && this.selectedFeatureList.length > 0) {
    //   featureList = this.iterateSelectedFeatures(this.selectedFeatureList, featureList);
    // }
    if (this.selectpermissionList) {
      featureList = this.selectpermissionList;
    } else {
      featureList = this.selectedFeatures;
    }
    const body: any = {
      edition: {
        displayName: this.EditionName,
        expiringEditionId: undefined,
        id: this.id
      },
      featureValues: featureList
    };
    if (!this.id) {
      body.edition.dailyPrice = 0;
      body.edition.weeklyPrice = 0;
      body.edition.monthlyPrice = 0;
      body.edition.trialDayCount = this.TrailPeriod;
      body.edition.annualPrice = this.AnnualPrice;
      body.edition.waitingDayAfterExpire = this.ExpiryInterval;
      body.edition.expiringEditionId = this.freeEditionId;

    }
    this.onEditionSave.emit(body);
    this.viewCanvas = false;
    this.resetPermission();  
  }

  resetPermission() {
    if (this.selectedFeatures) {
      this.selectedFeatures.forEach((element: any) => {
        if (element.value == 'false' || element.value == 'true') {
          element.value = false;
        }
        else {
          element.value = 0;
        }
      });
    }
  }


  iterateSelectedFeatures(arr: any, featureList): any {
    arr.forEach((item: any) => {
      if (item.selectedChildren && item.selectedChildren.length > 0) {
        this.iterateSelectedFeatures(item.selectedChildren, featureList);
      }
      const element: any = {
        name: item.data.name,
        value: item.selected
      }
      featureList.push(element)
    })

    return featureList;
  }


  getSelectedFeatureList(event): void {
    this.selectedFeatureList = event
  }
  getselectedPermissionList(event): void {
    this.selectpermissionList = event
  }
  openCanvas(): void {
    this.showLoadingSpinner = true;
    this.updateEdition.emit(0);
    this.contentOnEdit = false;
    this.selectedFeatures = [];
    this.selectedEdition = undefined;
    this.viewCanvas = true;
    this.isEdition = false
    this.EditionName = '';
    this.AnnualPrice = undefined;
    this.TrailPeriod = 0;
    this.ExpiryInterval = 0;
    this.id = undefined;
    this.activePage = 0;
    this.canvasTitle = 'NEW EDITION';
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }
  private initialize(): void {
    this.itemListImmediately = [
      {
        id: 1,
        label: this.translate.instant('Immediately'),
        checked: true,
        disabled: false,
        name: "Radio-Button"
      },
    ];

    this.itemListAfterTrailPeriod = [
      {
        id: 2,
        label: this.translate.instant('After Trial Period'),
        checked: false,
        disabled: false,
        name: "Radio-Button"
      },
    ];

    this.itemListSubscription = [
      {
        id: 3,
        label: this.translate.instant("Deactivate Tenant"),
        checked: true,
        disabled: false,
        name: "AfterSubscriptionExpiryBtn"
      },
    ];

    this.itemListAssign = [
      {
        id: 4,
        label: this.translate.instant("Assign To Another Edition"),
        checked: false,
        disabled: false,
        name: "AfterSubscriptionExpiryBtn"
      },
    ];


    this.navtabsItems = [
      {
        label: this.translate.instant('Edition information'),
        tablink: '#newedition',
        ariacontrols: 'newedition',
      },
      {
        label: this.translate.instant('Features'),
        tablink: '#feature',
        ariacontrols: 'feature',
      }];
  }

  closeCanvas(): void {
    this.viewCanvas = false;
    this.showLoadingSpinner = false;
    this.resetPermission();
  }

  onTabClick(index): void {
    this.activePage = index;
  }
  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEdition.emit(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.onEdit(event.selectedData);
    } else if (event.actionId === 'moveTenant') {
      this.sourceEditionId = event.selectedData.id;
      this.moveTenantEdition();
      this.onMoveTenantAction.emit(event.selectedData.id)
    }
  }

  showAssignEditionList() {
    this.showAssignEditionDropdown = true;
  }

  hideAssignEditionList() {
    this.showAssignEditionDropdown = false;
  }

  moveTenantEdition(): void {
    this.viewMoveTenantCanvas = true;
    this.moveTenantCanvasTitle = 'MOVE TENANTS TO ANOTHER EDITION';
    setTimeout(() => {
      var offcanvas = document.getElementById('moveTenantEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  closeMoveTenantCanvas() {
    this.viewMoveTenantCanvas = false;
    this.sourceEditionId = '';
  }

  moveTenant(): void {
    const data: any = {
      sourceEditionId: this.sourceEditionId,
      targetEditionId: this.targetEditionId
    };
    this.onMoveTenant.emit(data);
  }


  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.openCanvas();
    }
  }

  onFreeListSelect(event : any){
    this.freeEditon = event.item.some
    this.freeEditionId = event.item.value;
    }

  onTargetListSelect(event : any ){
    this.targetEdition = event.item.some
    this.targetEditionId = event.item.value
  }

}
