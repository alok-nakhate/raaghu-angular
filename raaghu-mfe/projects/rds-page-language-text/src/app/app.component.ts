import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions, ServiceProxy, UserAuthService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getLanguageTexts,updateLanguageText } from 'projects/libs/state-management/src/lib/state/language-text/language-text.actions';
import { selectAllLanguageTexts } from 'projects/libs/state-management/src/lib/state/language-text/language-text.selector';
import { selectAllLanguages } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { LanguageText } from '../modal/language-text';
declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'language-text';
  LanguageText: LanguageText = {
    resourceName: '',
    cultureName: '',
    name: '',
    value: '',
    baseLanguageName: '',
    languageName: '',
    key: '',
    baseValue:'', 
    sourceName:''
  };
  rdsLanguagetextTableMfeConfig: ComponentLoaderOptions;
  baselanguage: string;
  TargetCulturename: string
  source: string
  targetValue: string;
  targetFilter: string;
  filterText: string = '';
  languagetextTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Base Value', key: 'baseValue', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Target Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Resource Name', key: 'resourceName', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  languagetextTableData: any = [] = []
  listbaseLanguage: any[] = [];

  listTargetCulturename: any[] = []
  listsource: any[] = []
  listTargetValue: any[] = [
    { value: 'ALL', displayText: 'All' },
    { value: 'EMPTY', displayText: 'Empty Ones' }
  ]
  constructor(private http: HttpClient,
    private store: Store,
    public translate: TranslateService,
    private userAuthService: UserAuthService,
    private languageService: ServiceProxy,
  ) { }
  ngOnInit(): void {
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // })
    this.getLanguageTextTable();
    this.getAllBaseLanguage();
    this.rdsLanguagetextTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.languagetextTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.languagetextTableData,
        recordsPerPage: 10,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have language text',
        noDataSubTitle: ''
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.languagetextTableData.findIndex((x: any) => x.userId === event.selectedData.userId);
            if (index !== -1) {
              this.languagetextTableData.splice(index, 1);
              const mfeConfig = this.languagetextTableData
              mfeConfig.input.tableData = [... this.languagetextTableData];
              this.rdsLanguagetextTableMfeConfig = mfeConfig;
            }
          } else if (event.actionId === 'edit') {
            this.EditlanguageText(undefined);
            if (event.selectedData) {
              this.LanguageText.name = event.selectedData.baseValue;
              this.LanguageText.value = event.selectedData.value;
              this.LanguageText.key = event.selectedData.key;
              this.LanguageText.baseLanguageName = this.baselanguage;
              this.LanguageText.cultureName = 'fi';
              this.LanguageText.resourceName = event.selectedData.resourceName;
            }
          }

        }
      }
    }
    this.store.select(selectAllLanguageTexts).subscribe((res: any) => {
      this.languagetextTableData = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            key: element.name,
            baseValue: element.baseValue,
            value: element.value,
            resourceName: element.resourceName
          }       
          this.languagetextTableData.push(item);
        });
        const mfeConfig = this.rdsLanguagetextTableMfeConfig
        mfeConfig.input.tableData = [... this.languagetextTableData];
        mfeConfig.input.refresh = true;
        this.rdsLanguagetextTableMfeConfig = mfeConfig;
      }
    })
  
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  EditlanguageText(event): void {
    setTimeout(() => {
      var offcanvas = document.getElementById('EditlanguageText')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
  }

  getLanguageTextTable(isedited?) {
    this.languagetextTableData = [];
    const languageTextDataParams: any = {
      getOnlyEmptyValues: false,
      Sorting: '',
      MaxResultCount: 10,
      skipCount: 0,
      baseLanguageName: this.baselanguage ? this.baselanguage: "ar",
      targetCultureName: this.TargetCulturename? this.TargetCulturename: "fi",
      targetValueFilter: this.targetFilter,
      resource: this.source? this.source :''
    }
    this.store.dispatch(getLanguageTexts(languageTextDataParams));
    if(isedited){
      this.store.dispatch(updateLanguageText(this.LanguageText));
      this.store.dispatch(getLanguageTexts(languageTextDataParams));
    }
  }
  getAllBaseLanguage() {
    this.languageService.all().subscribe((response) => {
      var result = response;
      result.items.forEach(element => {
        const item: any = {
           displayText: element.displayName,
           value: element.cultureName,
        }
        this.listbaseLanguage.push(item);
      });
    })
    this.languageService.resources().subscribe((response) => {
      var result = response;
      result.forEach(element => {
        const item: any = {
          displayText: element.name,
          value: element.name,
        }
        this.listsource.push(item);
      });
    })
  }

  searchLanguageText(event: any) {
    this.filterText = event;
    console.log("filterText",this.filterText);
    const languageTextDataParams: any = {
      getOnlyEmptyValues: false,
      Sorting: '',
      MaxResultCount: 1000,
      skipCount: 0,
      baseLanguageName: "ar",
      targetCultureName: "fi",
      targetValueFilter: this.targetFilter,
      filter:this.filterText
    }
    this.store.dispatch(getLanguageTexts(languageTextDataParams));
  }

  changeTarget() {
    this.languagetextTableData = [];
    this.getLanguageTextTable();
  }
}
