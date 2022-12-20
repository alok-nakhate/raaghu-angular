import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-tenant-features',
  templateUrl: './rds-comp-tenant-features.component.html',
  styleUrls: ['./rds-comp-tenant-features.component.scss'],
})
export class RdsCompTenantFeaturesComponent implements OnInit, DoCheck {
  //  @Output() tenantFeatureInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantFeatures= [];
  @ViewChild('tenantFeatureForm') tenantInfoForm: NgForm;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean = true;
  @Output() onSaveFeatures = new EventEmitter<any>();
  @Input() public twoFactorList: any = [
    {displayText : 'Optional', value : 'Optional'},
    {displayText : 'Disabled', value : 'Disabled'},
    {displayText : 'Forced', value : 'Forced'}
  ];
  buttonSpinnerForSave: boolean = true;
  buttonSpinnerForNewUser: boolean = true;
  selectedFeatureList: any = [];
  selectedId: any = '';
  activePage: number = 0;
  viewCanvas: boolean = false;
  @Input() offCanvasId: string;
  sampleCounter = 0;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (this.tenantFeatures && this.tenantInfoForm) {
        this.tenantInfoForm.statusChanges.subscribe((res) => {
            this.onSaveFeatures.emit(this.tenantFeatures);
        });
      }
    }, 100);
  }

  ngDoCheck(): void {
    // console.log(this.tenantFeatures);
  }
   ngOnChanges(changes: SimpleChanges): void {
    if (this.tenantFeatures.length == 0) {
      this.tenantFeatures = [
        {
          name : 'Identity',
          value : false
        },
        {
          name : 'Identity 1',
          value : '0'
        },
        {
          name : 'Identity 2',
          value : false
        },
        {
          name : 'Identity 3',
          value : false
        },
        {
          name : 'Identity 4',
          value : false
        },
        {
          name : 'Identity 5',
          value : false
        },
        {
          name : 'Identity 6',
          value : false
        },
        {
          name : 'Identity 7',
          value : false
        },
        {
          name : 'Identity 8',
          value : false
        },
        {
          name : 'Identity 9',
          value : false
        }
      ]
      
    }
   }

  getCheckboxValue(event: boolean, type: string): void {
    switch (type) {
      case 'identity 1':
        this.tenantFeatures[2].value = event;
        break;
        case 'identity 2':
        this.tenantFeatures[3].value = event;
        break;
      case 'settingManagment 1':
        this.tenantFeatures[4].value = event;
        break;
        case 'settingManagment 2':
        this.tenantFeatures[5].value = event;
        break;
      case 'languageManagement':
        this.tenantFeatures[6].value = event;
        break;
      case 'textTemplateManagement': 
        this.tenantFeatures[7].value = event;
        break;
      case 'themeManagement':
        this.tenantFeatures[8].value = event;
        break;
      case 'auditLoggingPage':
        this.tenantFeatures[9].value = event;
        break;
    }
  }

  onCanceled() {
    this.buttonSpinner = false;
    this.onCancel.emit(true);
  }
  save(event: NgForm): void {
    debugger
    console.log('FeatureList', event.form.value);
    this.buttonSpinnerForSave = true;
    this.buttonSpinnerForNewUser = false;
    
    console.log('checkbox Value' ,event.form.value);
    
    this.activePage = 0;
    var offcanvas = document.getElementById(this.offCanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  counterVal(event: number) {
    this.sampleCounter = event;
  }
}
