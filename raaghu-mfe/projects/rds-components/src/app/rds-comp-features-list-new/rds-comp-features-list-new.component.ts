import { Component, Input, OnInit, SimpleChanges , Output ,EventEmitter,DoCheck } from '@angular/core';
import { AlertPopupData } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';

declare var bootstrap: any;
export interface EditionItem {
  EditionName: string;
  EditionTitle: string;
  Price: string;
  Plan: string;
  features: any;
}
@Component({
  selector: 'app-rds-comp-features-list-new',
  templateUrl: './rds-comp-features-list-new.component.html',
  styleUrls: ['./rds-comp-features-list-new.component.scss']
})
export class RdsCompFeaturesListNewComponent implements OnInit {
  public viewCanvas: boolean = false;
  @Input() canvasTitle: string = 'NEW EDITION';
  @Input() public PlanList: any = [];
  @Input() editionData: any;
  @Input() public EditionList: any = [];
  @Input() editionDataInfo:any;
  @Output() onEditionSave = new EventEmitter<any>();
  public editionBasic: any = {
    editionData: undefined,
    featuresData: undefined
  };
  isReset: boolean = false;
  navtabsItems: any = [];
  viewMoveTenantCanvas: boolean = false;
  activePage: number = 0;
  
  Editionitems: EditionItem[] = [];
  Dataset: any[] = [];
  @Input()
  EditionBorder?: number = 0;
  @Input()
  bodybackGroundColor?: string;
  @Input()
  borderRadious?: number;
  @Input()
  Paddig?: number;
  @Input()
  borderwidth?: number;
  // @Input()
  // EditionData: EditionItem[] = [{

  //   EditionName: "Corporate",
  //   EditionTitle: "Strong Application for large team",
  //   Price: "45",
  //   Plan: "Per month",
  //   features: [
  //     {
  //       label:"Chat Support",
  //     },
  //     {
  //         label:"Optimized hashtags",
  //     },
  //     {
  //         label:"Unlimited Users",
  //     },
  // ]
  // }];
  showConfirmationPopup: boolean = false;
  alertData: AlertPopupData = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Thank You!",
    messageAlert: "Your application has been summited successfully.",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
 
  constructor() { }

  ngOnInit(): void {
    // this.Dataset = this.EditionData;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.Dataset = this.EditionData;
  }
  openCanvas() {
    this.viewCanvas = true;
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addNewEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);


  }
  private initialize(): void {
    this.navtabsItems = [
      {
        label: 'Basics',
        tablink: '#basics',
        ariacontrols: 'basics',
      },
      {
        label: 'Features',
        tablink: '#features',
        ariacontrols: 'features',
      }
    ];
  }


  closeCanvas() {
    this.viewCanvas = false;
  }
  onTabClick(index): void {
    this.activePage = index;
  }
  closeMoveTenantCanvas() {
    this.viewMoveTenantCanvas = false;

  }
  onEdit() {
    this.viewCanvas = true;
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addNewEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
    this.canvasTitle = 'Update Edition'
  }
  openConfirmationPopup() {
    this.showConfirmationPopup = true;
    setTimeout(() => {
      var element: any = document.getElementById('confirmationId');
      var modal = new bootstrap.Modal(element);
      modal.show();
    }, 100);
  }

  getTenantData(event: any): void {
    this.editionBasic.editionBasicInfo = event
  }
  getEditionFeatureInfo(event: any): void {
    this.editionBasic.featuresData = event

  }
  onSave():void{
    console.log(this.editionBasic);
    this.onEditionSave.emit(this.editionBasic)
      this.isReset = true;
      this.activePage = 0;
      this.close();
      var offcanvas = document.getElementById('addNewEdition');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
      this.viewCanvas = false;
     
    }
    close(): void {
      this.viewCanvas = false;
     
    }

}
