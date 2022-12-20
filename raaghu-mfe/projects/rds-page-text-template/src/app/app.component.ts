import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { restoreToDefault, saveTextTemplateContent } from 'projects/libs/state-management/src/lib/state/text-template/text-template.actions';


//import { satt } from 'projects/libs/state-management/src/lib/state/text-template/text-template.selector';
import { getTemplateContent, getTemplateDefinition } from 'projects/libs/state-management/src/lib/state/user/user.actions';
import { selectAllTT, selectTextContent } from 'projects/libs/state-management/src/lib/state/user/user.selector';


import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'text-template';
  currentAlerts: any = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRestore = new EventEmitter<any>();
  viewCanvas: boolean = false;
  canvasTitle: string = '';
  templateList: any = [];
  offcanvasId: string = 'text_template_canvas';
  selectedData: any = {
    templateName: '',
    content: '',
    cultureName:null
  };
  
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
  tableHeadersForTextTemplate: TableHeader[] = [
    { key: 'templateName', displayName: 'Template Name', dataType: 'text', filterable: true, sortable: true, required: false, },
    { key: 'inlineLocalized', displayName: 'Inline Localized', dataType: 'html', filterable: true, sortable: true, required: false, },
    { key: 'layoutStatus', displayName: 'Layout Status', dataType: 'html', filterable: true, sortable: true, required: false, },
    { key: 'layoutDetails', displayName: 'Layout Details', dataType: 'html', filterable: true, sortable: true, required: false, },

  ]
  
  constructor(private store: Store) { }
  tableDataForTextTemplate = [];
  // tableDataForTextTemplate = [
  //   {
  //     id: 1,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 2,
  //     templateName: 'Simple Message Template',
  //     inlineLocalized: true,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 3,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: true,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.PasswordResetTemplate',
  //   },
  //   {
  //     id: 4,
  //     templateName: 'Password Reset Template',
  //     inlineLocalized: true,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 5,
  //     templateName: 'Simple Message Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.PasswordResetTemplate',
  //   },
  //   {
  //     id: 6,
  //     templateName: 'Email Confirmation Template',
  //     inlineLocalized: false,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.SecurityCodeTemplate',
  //   },
  //   {
  //     id: 7,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: false,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailConfirmationTemplate',
  //   },
  //   {
  //     id: 8,
  //     templateName: 'Email Confirmation Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 9,
  //     templateName: 'Password Reset Template',
  //     inlineLocalized: false,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailConfirmationTemplate',
  //   },
  //   {
  //     id: 10,
  //     templateName: 'Simple Message Template',
  //     inlineLocalized: true,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.SecurityCodeTemplate',
  //   },
  //   {
  //     id: 11,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.EmailConfirmationTemplate',
  //   },
  //   {
  //     id: 12,
  //     templateName: 'Password Reset Template',
  //     inlineLocalized: false,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 13,
  //     templateName: 'Simple Message Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.PasswordResetTemplate',
  //   },
  //   {
  //     id: 14,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: false,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 15,
  //     templateName: 'Default Email Layout Template',
  //     inlineLocalized: true,
  //     layoutStatus: true,
  //     layoutDetails: 'abp.EmailLayoutTemplate',
  //   },
  //   {
  //     id: 16,
  //     templateName: 'Simple Message Template',
  //     inlineLocalized: true,
  //     layoutStatus: false,
  //     layoutDetails: 'abp.SecurityCodeTemplate',
  //   },
  // ];

  rdsDataTableForTextTemplateMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForTextTemplate,
      tableHeaders: this.tableHeadersForTextTemplate,
      recordsPerPage: 5,
      width: '100%',
      pagination: true,
      actions: [{ id: 'edit', displayName: 'Edit' }],
      inlineEdit: false,
    },
    output: {
      onActionSelection: (event: any) => {
        if (event.actionId === 'edit') {
          this.openTextTemplate();

          const data: any = {
            templateName: event.selectedData.name,
          }
          this.store.dispatch(getTemplateContent(data));
        }
      },


    },
  };

  ngOnInit(): void {
    this.store.dispatch(getTemplateDefinition());
    this.store.select(selectAllTT).subscribe((res: any) => {

      if (res && res.allTextTemplate) {
        res.allTextTemplate.allTextTemplate.items.forEach((element: any) => {
          let statusTemplate;
          // if (element.isActive) {
          //   statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          // } else {
          //   statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          // }

          const item: any = {
            // id:element.id,
            name: element.name,
            templateName: element.displayName,
            inlineLocalized: element.isInlineLocalized,
            layoutStatus: element.isLayout,
            layoutDetails: element.layout

          }
          this.templateList.push(item);
        });
        const mfeConfig = this.rdsDataTableForTextTemplateMfeConfig
        mfeConfig.input.tableData = [... this.templateList];
        this.rdsDataTableForTextTemplateMfeConfig = mfeConfig;
      }
    });

    this.store.select(selectTextContent).subscribe((res: any) => {
      if (res && res.templateContent) {
        this.selectedData={

        }
        const data=res.templateContent
        this.selectedData.templateName = data.name;
        this.selectedData.content = data.content;
      }
    })
  }

  openTextTemplate(): void {
    this.canvasTitle = 'Contents';
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  close(): void {
    this.viewCanvas = false;
  }

  save(): void {
    if (this.selectedData) {
      this.selectedData.cultureName = null;
      this.store.dispatch(saveTextTemplateContent(this.selectedData))
      this.viewCanvas = false;
    }
  }
  restore(event): void {
    // this.onRestore.emit(event)
    // console.log('restore', event)
    this.store.dispatch(restoreToDefault(this.selectedData))
  }
}