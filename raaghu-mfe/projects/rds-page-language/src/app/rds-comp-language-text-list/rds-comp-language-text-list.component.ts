import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
// import { LanguageText } from 'projects/language-text/src/modal/language-text';
import { selectAllLanguageTexts } from 'projects/libs/state-management/src/lib/state/language-text/language-text.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { LanguageText } from 'projects/rds-page-language-text/src/modal/language-text';
declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-language-text-list',
  templateUrl: './rds-comp-language-text-list.component.html',
  styleUrls: ['./rds-comp-language-text-list.component.scss']
})
export class RdsCompLanguageTextListComponent implements OnInit {
  LanguageText: LanguageText
  rdsLanguagetextTableMfeConfig: ComponentLoaderOptions;
  baselanguage: string;
  TargetCulturename: string
  source: string
  viewCanvas:boolean;
  targetValue: string;
  languagetextTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'Key', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Base Value', key: 'BaseValue', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Value', key: 'Value', dataType: 'text', dataLength: 30, required: true, sortable: true },
    //{ displayName: 'Resource Name', key: 'ResourceName', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  languagetextTableData: any = [] = [ { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' }]
  @Input() listbaseLanguage: any[] = [];
  @Input() listTargetCulturename: any[] = [];
  @Input() listsource: any[] = []
  @Input() listTargetValue: any[] = []
  constructor(private http: HttpClient, private store: Store) {}
  ngOnInit(): void {
    const languageTextDataParams: any = {
      maxResultCount:10,
      skipCount:0,
      sorting:undefined,
      sourceName:undefined,
      baseLanguageName:'en',
      targetLanguageName:'en-bg',
      targetValueFilter:'ALL',
      filterText:''
    }
    //this.store.dispatch(getLanguageTexts(languageTextDataParams));

    this.store.select(selectAllLanguageTexts).subscribe((res: any) => {
      this.languagetextTableData = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            Key:element.key,
            BaseValue:element.baseValue,
            Value:element.targetValue,
          }
          this.languagetextTableData.push(item);
        });
        const mfeConfig = this.rdsLanguagetextTableMfeConfig
        mfeConfig.input.tableData = [... this.languagetextTableData];
        this.rdsLanguagetextTableMfeConfig = mfeConfig;
      }
    })
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
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
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
            this.LanguageText = event.selectedData;
          }

        }
      }
    }
    
  }
  
  EditlanguageText(event): void {
    setTimeout(() => {
      var offcanvas = document.getElementById('EditlanguageText')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);

  }
  

}
