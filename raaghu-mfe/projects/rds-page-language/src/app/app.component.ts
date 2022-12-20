import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
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
import { deleteLanguage, getCultureList, getLanguageForEdit, getLanguages, saveLanguage, setDefaultLanguage, updateLanguage } from 'projects/libs/state-management/src/lib/state/language/language.actions';
import {  selectAllLanguages, selectCultureList, selectLanguageInfo } from 'projects/libs/state-management/src/lib/state/language/language.selector';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DatePipe
  ],
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
  title = 'language';                                                                                                      
  currentAlerts: any = [];
  @Input() listItems = [
    { value: 'New Language', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  // isShimmer: boolean = false;
  // EditShimmer: boolean = false;
  languageCanvasTitle = 'New Language';
  buttonSpinnerForNewLanguage: boolean = true;
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
  selectedLanguage: any = {
    countryCode: '',
    displayName : '',
    icon: '',
    isEnabled: false,
    id: undefined,
  };
  cultureList: any = [];
  uiCultureList: any = []
  rdsLanguageTableMfeConfig: ComponentLoaderOptions;
  languageTableHeader: TableHeader[] = [
    { displayName: 'Display Name', key: 'displayName', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Culture Name', key: 'cultureName', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Ui Culture Name ', key: 'uiCultureName', dataType: 'html', dataLength: 30, required: true, sortable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, required: true, sortable: true }
  ]
  loading: boolean = true;
  languageTableData: any = [];
  public rdsNewLanguageMfeConfig: ComponentLoaderOptions;
  public languageNames: Item[] = [];
  public flags: any = [];
  public viewCanvas: boolean = false;
  constructor(public datepipe: DatePipe, public translate: TranslateService, private store: Store, private alertService: AlertService, private router: Router) { }
  ngOnInit(): void {
    this.isAnimation = true;
    this.rdsLanguageTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.languageTableHeader,
        width: '100%',
        tableData: this.languageTableData,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'edit', displayName: 'Edit' },{ id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have language',
        // isShimmer: true,
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            this.store.dispatch(deleteLanguage(event.selectedData.id))
          }else if (event.actionId === 'edit') {
            this.languageCanvasTitle = 'Edit Language';
            this.selectedLanguage = JSON.parse(JSON.stringify(event.selectedData));
              this.store.dispatch(getLanguageForEdit({id:event.selectedData.id}))

            // }
            this.openCanvas(true)
          }
        },
      }
    };
    this.rdsNewLanguageMfeConfig = {
      name: 'RdsCompLanguageNew',
      input: {
        flags: this.flags,
        languageNames: this.languageNames,
        selectedLanguage: this.selectedLanguage, 
        cultureList : this.cultureList,
        uiCultureList : this.uiCultureList,
        editOffCanvas: false
        //  EditShimmer: true,
      },
      output: {
        LanguageInfo: (data: any) => {        
            const body: any = {
              body:{
              cultureName: data.cultureName,
              uiCultureName: data.uiCultureName ,
              displayName: data.displayName,
              isEnabled: data.isEnabled
              }
            }
            this.store.dispatch(saveLanguage(body));
          this.closeCanvas();
        },
        LanguageInfoEdit: (data : any) =>{
            const dataEdit : any = {
                id : data.id,
                body : {
                  displayName: data.displayName,
                  isEnabled: data.isEnabled
                }
              }
              this.store.dispatch(updateLanguage(dataEdit));
              this.closeCanvas();
        },
        onCloseCanvas: (event: any) => {
          this.closeCanvas();
        },
      }
    };
    this.store.dispatch(getLanguages());
    this.store.select(selectAllLanguages).subscribe((res: any) => {
      this.languageTableData = [];
      if (res && res.items && res.items.length > 0) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          const status: any = (element.isEnabled) ? '<span class="badge badge-success p-1 mx-1 rounded">Active</span>' : '<span class="badge badge-danger p-1 mx-1 rounded">Inactive</span>';
         const item: any = {
            id: element.id,
            cultureName: element.cultureName,
            uiCultureName: element.uiCultureName ,
            isEnabled: (element.isEnabled) ? false : true,
            statusTemplate: status,
            creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, h:mm:ss a'),
            displayName: element.displayName
          }
          this.languageTableData.push(item);
        });
        const mfeConfig = this.rdsLanguageTableMfeConfig
        mfeConfig.input.tableData = [... this.languageTableData];
         mfeConfig.input.isShimmer = false;
        this.rdsLanguageTableMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getCultureList())
    this.store.select(selectCultureList).subscribe((res: any) => {
      if (res) {
        this.cultureList = [];
          res.forEach((element: any) => {
          const item: any = {
            value: element.name,
            displayText: element.displayName,
          }
          this.cultureList.push(item);
        });    
        const mfeConfig = this.rdsNewLanguageMfeConfig
        mfeConfig.input.cultureList = [... this.cultureList];
        mfeConfig.input.uiCultureList = [... this.cultureList];
        this.rdsNewLanguageMfeConfig = mfeConfig;
      }
    });

    this.store.select(selectLanguageInfo).subscribe(res=>{
      if(res){
        const data:any={
          displayName:res.displayName,
          isEnabled:res.isEnabled,
          id:res.id
        }
        const mfeConfig = this.rdsNewLanguageMfeConfig;
        mfeConfig.input.selectedLanguageData = [...data]
        this.rdsLanguageTableMfeConfig = mfeConfig
      }
    })
    this.subscribeToAlerts();
  }
  openCanvas(edit: boolean = false): void {
    this.buttonSpinnerForNewLanguage = true;
    this.viewCanvas = true;
    const mfeConfig = this.rdsNewLanguageMfeConfig;
    if (!edit) {
      this.languageCanvasTitle = 'NEW LANGUAGE';
      mfeConfig.input.editOffCanvas = false;
      this.rdsNewLanguageMfeConfig =mfeConfig
    } else {
      this.languageCanvasTitle = 'Edit Language';
      mfeConfig.input.editOffCanvas = true;
      this.rdsNewLanguageMfeConfig =mfeConfig
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
    this.buttonSpinnerForNewLanguage = false;
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
  redirectToLanguageText() {
    this.router.navigateByUrl('pages/LanguageText');
  }
  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.openCanvas();
    }
  }
}

