import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import {
  deleteLanguage,
  getCountryList,
  getLanguages,
  saveLanguage,
  setDefaultLanguage,
} from '@libs/state-management';
import {
  selectAllCountries,
  selectAllLanguages,
  selectDefaultLanguage,
} from '@libs/state-management';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { Item } from 'projects/libs/state-management/src/lib/state/language/language.models';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.4s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.4s', style({ opacity: 1 }))],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  title = 'language';
  currentAlerts: any = [];
  @Input() listItems = [
    {
      value: 'New Language',
      some: 'value',
      key: 'new',
      icon: 'plus',
      iconWidth: '20px',
      iconHeight: '20px',
    },
  ];

  actions = [
    { id: 'edit', displayName: 'Edit' },
    { id: 'changeText', displayName: 'Change Texts' },
    { id: 'setDefaultLanguage', displayName: 'Set as default language' },
    { id: 'delete', displayName: 'Delete' },
  ];

  isShimmer: boolean = false;
  EditShimmer: boolean = false;
  languageCanvasTitle = 'New Language';
  showLoadingSpinner: boolean = false;
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts,
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      },
    },
  };
  selectedLanguage: any = {
    countryCode: '',
    icon: '',
    isEnabled: false,
    id: undefined,
  };
  rdsLanguageTableMfeConfig: ComponentLoaderOptions;
  languageTableHeader: TableHeader[] = [
    {
      displayName: 'Language Name',
      key: 'languageName',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
    {
      displayName: 'Code',
      key: 'countryCode',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Is enabled',
      key: 'statusTemplate',
      dataType: 'icon',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Creation Time',
      key: 'creationTime',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];
  loading: boolean = true;
  languageTableData: any = [];
  public rdsNewLanguageMfeConfig: ComponentLoaderOptions;
  public languageNames: any = [];
  public flags: any = [];
  public viewCanvas: boolean = false;
  constructor(
    public datepipe: DatePipe,
    public translate: TranslateService,
    private store: Store,
    private alertService: AlertService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isAnimation = true;

    this.rdsLanguageTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.languageTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.languageTableData,
        recordsPerPage: this.recordsPerpage,
        pagination: true,
        inlineEdit: false,
       
        noDataTitle: 'Currently you do not have language',
        isShimmer: true,
      },
      output: {
        
      },
    };
    this.rdsNewLanguageMfeConfig = {
      name: 'RdsCompNewLanguage',
      input: {
        flags: this.flags,
        languageNames: this.languageNames,
        selectedLanguage: this.selectedLanguage,
        EditShimmer: true,
      },
      output: {       
      },
    };
    this.store.dispatch(getCountryList());
    this.store.dispatch(getLanguages());
    this.store.select(selectAllCountries).subscribe((res: any) => {
      if (res) {
        this.languageNames = [];
        res.languageNames.forEach(res => {
          const data = {
            value:res.value,
            some:res.displayText,
            isSelected:res.isSelected,
            icon:'',
            iconWidth:0,
            iconHeight:0,
            iconFill:false,
            iconStroke: true,
            isFree: res.isFree
          }
          this.languageNames.push(data);
          // console.log('data' , data);
          
        }); 

        this.flags = [];
        res.flags.forEach((res: any) => {
          const icon = res.displayText.replace('-', '_');
          this.flags.push({
            some: res.displayText,
            value: res.value,
            icon: icon,
            iconWidth: '18px',
            iconHeight: '18px',
          });
        });

        const rdsNewLanguageMfeConfig = this.rdsNewLanguageMfeConfig;
        rdsNewLanguageMfeConfig.input.flags = [...this.flags];
        rdsNewLanguageMfeConfig.input.selectedLanguage = this.selectedLanguage;
        rdsNewLanguageMfeConfig.input.languageNames = [...this.languageNames];
        rdsNewLanguageMfeConfig.input.EditShimmer = false;
        this.rdsNewLanguageMfeConfig = rdsNewLanguageMfeConfig;
      }
    });
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    });
    this.store.select(selectAllLanguages).subscribe((res: any) => {
      this.languageTableData = [];
      if (res && res.items && res.items.length > 0) {
        this.isAnimation = false;
        let defaultLanguage = res.defaultLanguageName;
        res.items.forEach((element: any) => {
          const status: any = element.isDisabled
            ? {
                icon: 'close',
                width: '24px',
                height: '16px',
                colorVariant: 'danger',
              }
            : {
                icon: 'check',
                width: '24px',
                height: '16px',
                colorVariant: 'success',
              };
          // const statusTemplate = `<div class="fs-3"><i class="bi ${status}"></i></div>`;
          const languageName: string = element.displayName;
          const defaultLanguageTemplate = `<div> ${languageName} <span class="badge badge-success p-1 mx-1 rounded">Default</span></div>`;
          const item: any = {
            id: element.id,
            languageName: element.name === defaultLanguage ? defaultLanguageTemplate
                : element.displayName,
            countryCode: element.name,
            isEnabled: element.isDisabled ? false : true,
            statusTemplate: status,
            icon: element.icon,
            creationTime: this.datepipe.transform(
              new Date(element.creationTime),
              'MM/dd/yyyy, h:mm:ss a'
            ),
            name: element.displayName,
          };
          this.languageTableData.push(item);
        });
        const mfeConfig = this.rdsLanguageTableMfeConfig;
        mfeConfig.input.tableData = [...this.languageTableData];
        mfeConfig.input.isShimmer = false;
        this.rdsLanguageTableMfeConfig = mfeConfig;
      }
    });
    this.subscribeToAlerts();
  }

  recordsPerpage: number = 10;
  tableStyle: string = 'light';
  Isenabled: boolean;
  languagename: string;
  countrycode: string;
  onChangeIsenabled(event: any) {
    this.Isenabled = event;
  }
  selectedCountrycode(item: any) {
    var Result = item;
    this.countrycode = Result.item.value;
  }
  selectedLanguagecode(item: any) {
    var Result = item;
    this.languagename = Result.item.value;
  }
  addLanguage(): void {
    this.languageTableData.push({
      languagename: this.languagename,
      code: this.countrycode,
      isenabled: this.Isenabled,
      creationTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
    });
    const mfeConfig = this.rdsLanguageTableMfeConfig;
    mfeConfig.input.tableData = [...this.languageTableData];
    this.rdsLanguageTableMfeConfig = mfeConfig;
  }
  // addLanguages(language: any) {
  //   this.languageTableData.push(language.NewLanguage)
  // }

  openCanvas(edit: boolean = false): void {
    this.viewCanvas = true;
    if (!edit) {
      this.showLoadingSpinner = true;
      this.selectedLanguage = {
        countryCode: '',
        icon: '',
        isEnabled: false,
        id: undefined,
      };
      this.languageCanvasTitle = 'NEW LANGUAGE';
    } else {
      this.languageCanvasTitle = 'Edit Language';
    }
    const rdsNewLanguageMfeConfig = this.rdsNewLanguageMfeConfig;
    rdsNewLanguageMfeConfig.input.selectedLanguage = this.selectedLanguage;
    this.rdsNewLanguageMfeConfig = rdsNewLanguageMfeConfig;
    setTimeout(() => {
      var offcanvas = document.getElementById('AddLanguage');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  closeCanvas(): void {
    var offcanvas = document.getElementById('AddLanguage');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.selectedLanguage = {
      countryCode: '',
      icon: '',
      isEnabled: false,
      id: undefined,
    };
    this.showLoadingSpinner = false;
  }
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.showLoadingSpinner = false;
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
  }
  redirectToLanguageText() {
    this.router.navigateByUrl('pages/LanguageText');
  }

  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.openCanvas();
    }
  }
  // languageTableData: any = [] = [{ languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' }]

  onActionSelection (event: any) {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteLanguage(event.selectedData.id));
    } else if (event.actionId === 'edit') {     
      this.languageCanvasTitle = 'Edit Language';
      this.selectedLanguage = JSON.parse(
        JSON.stringify(event.selectedData)
      );
      if (this.selectedLanguage.icon && this.flags.length > 0) {
        const selectedLanguage = this.flags.find(
          (x: any) => x.value === this.selectedLanguage.icon
        );
        if (selectedLanguage) {
          this.selectedLanguage.icon = selectedLanguage.some;
        }
      }
      const mfeConfig = this.rdsNewLanguageMfeConfig;
      mfeConfig.input.selectedLanguage = this.selectedLanguage
      this.rdsNewLanguageMfeConfig = mfeConfig;
      this.openCanvas(true);
    } else if (event.actionId === 'setDefaultLanguage') {
      const data: any = { name: event.selectedData.countryCode };
      this.store.dispatch(setDefaultLanguage(data));
    } else if (event.actionId === 'changeText') {
      this.redirectToLanguageText();
    }
  }

  onLanguageSave (data: any){
    const body: any = {
      language: data,
    };
    this.store.dispatch(saveLanguage(body));
    var offcanvas = document.getElementById('AddLanguage');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.selectedLanguage = {
      countryCode: '',
      icon: '',
      isEnabled: false,
      id: undefined,
    };
  }
  onCloseCanvas (event: any) {
    this.closeCanvas();
  }
}
