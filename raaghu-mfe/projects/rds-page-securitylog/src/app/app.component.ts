import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getSecuritylogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.actions';
import { selectSecurityLogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.selector';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
export class AppComponent implements OnInit  {
  public rdssecurityLogTableMfeConfig: ComponentLoaderOptions;
 securityLogs: any = [];
  securityLogsTableData: any = [];
  isAnimation: boolean = true;


  // @Output() deleteEvent = new EventEmitter<any>();
   constructor( private store: Store) { }

  public securityLogsHeaders: TableHeader[] = [
    { key: 'time', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
    { key: 'action', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
    { key: 'ipAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true },
    { key: 'browser', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true },
    { key: 'application', displayName: 'Application', dataType: 'html', sortable: true, filterable: true },
    { key: 'identity', displayName: 'Identity', dataType: 'text', sortable: true, filterable: true },
    { key: 'username', displayName: 'Users', dataType: 'text', sortable: true, filterable: true },
  ];

  ngOnInit(): void {
    this.rdssecurityLogTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.securityLogsHeaders,
        tableStyle: 'light',
        width: '100%',
        tableData: this.securityLogs,
        recordsPerPage: 10,
        pagination: true,
        noDataTitle: 'Currently you do not have security log'
      },
      output: {
        onActionSelection: (event: any) => {
          // if (event.actionId === 'delete') {
          //   const index = this.securityLogs.findIndex((x: any) => x.id === event.selectedData.id);
          //   if (index !== -1) {
          //     this.securityLogs.splice(index, 1);
          //     const mfeConfig = this.securityLogs
          //     mfeConfig.input.tableData = [... this.securityLogs];
          //     this.securityLogs = mfeConfig;
          //   }
          // }
        }
      }
    };
     this.store.dispatch(getSecuritylogs());
     this.store.select(selectSecurityLogs).subscribe((res: any) => {
      if (res && res.items) {
         this.isAnimation = false;
        res.items.forEach((element: any) => {
         const item: any = {
            id: element.id,
            time: element.creationTime,
            action: element.action,
            ipAddress: element.clientIpAddress ,
            browser: element.browserInfo,
            application: element.applicationName,
            identity: element.identity,
            username: element.userName
          }
          this.securityLogs.push(item);
        });
        const mfeConfig = this.rdssecurityLogTableMfeConfig
        mfeConfig.input.tableData = [... this.securityLogs];
         mfeConfig.input.isShimmer = false;
        this.rdssecurityLogTableMfeConfig = mfeConfig;


      }
    });

  }
  exportToExcel(navTab: string): void {
    this.downloadCSV(this.securityLogs, this.securityLogsHeaders, 'security_logs');
  }

  downloadCSV(tableData: any, tableHeaders: TableHeader[], filename: string): void {
    const csvData: any = this.ConvertToCSV(tableData, tableHeaders);
    const blob: any = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink: any = document.createElement('a');
    const url: any = URL.createObjectURL(blob);
    const isSafariBrowser: boolean = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  public ConvertToCSV(objArray: Array<object>, headerList: TableHeader[]): string {
    const array: any = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str: string = '';
    let row: string = 'S.No,';
    // const displayedHeaders: Array<string> = ['Name', 'Time', 'Value'];
    for (const index in headerList) {
      row += headerList[index].displayName + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i: number = 0; i < array.length; i++) {
      let line: any = (i + 1) + '';
      for (const index in headerList) {
        if (index) {
          const head: any = headerList[index].key;
          line += ',' + array[i][head];
        }
      }
      str += line + '\r\n';
    }
    return str;
  }

}
