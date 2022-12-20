import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TableHeader } from '../../models/table-header.model';
import { TableAction } from '../../models/table-action.model';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '@libs/shared';


declare var bootstrap: any;


@Component({
  selector: 'rds-comp-audit-logs',
  templateUrl: './rds-comp-audit-logs.component.html',
  styleUrls: ['./rds-comp-audit-logs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RdsCompAuditLogsComponent implements OnInit {
  actions: TableAction[] = [{ id: 'view', displayName: this.translate.instant('View') },];
  actionForChangeLogs: TableAction[] = [{ id: 'view', displayName: this.translate.instant('View') },]
  selectedIndex: any = 0;
  auditCanvasTitle: string = '';
  selectedRowData: any;
  public navtabsItems: any = [
    {
      label: this.translate.instant('Operation Logs'),
      tablink: '#operation-logs',
      ariacontrols: 'operation-logs',
    },
    {
      label: 'Change Logs',
      tablink: '#change-logs',
      ariacontrols: 'change-logs',
    }];
  @Input() public operationLogsHeaders: TableHeader[] = [];
  @Input() listItem1 = [
    { value: 'Export To Excel', some: 'value', key: 'operation-log', icon: 'export_data', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() listItem2 = [
    { value: 'Export To Excel', some: 'value', key: 'change-log', icon: 'export_data', iconWidth: '20px', iconHeight: '20px' },
  ];
  public changeLogsHeaders: TableHeader[] = [];
  @Input() public operationLogs: any = [];
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() parameterData = new EventEmitter<any>();
  @Output() ChangeLogparameterData = new EventEmitter<any>();
  @Input() public changeLogs: any = [];
  @Input() isShimmer: boolean = false;
  startDate: any = undefined;
  endDate: any = undefined;
  user: any;
  service: any = '';
  from: any = '';
  to: any = '';
  action: any = '';
  status: any = '';
  browserInfo: any = '';
  statusList: any = [
    { value: '', some: 'All' },
    { value: true, some: 'Sucsses' },
    { value: false, some: 'HasError' }]
  browserList: any = [
    { value: '', some: 'Select Browser' },
    { value: 'Chrome', some: 'Chrome' },
    { value: 'Opera', some: 'Opera' },
    { value: 'Edge', some: 'Edge' },
    { value: 'Safari', some: 'Safari' },
    { value: 'UC Browser', some: 'UC Browser' }]
  showFilters: boolean = false;

  viewAuditLogsCanvas: boolean = false;
  viewChangeLogsCanvas: boolean = false;
  changeLogStartdate: any = undefined
  changeLogEndDate: any = undefined
  changeLogUsername: any = undefined
  auditLogsCanvasTitle: string = this.translate.instant('AUDIT LOG DETAIL');
  changeLogsCanvasTitle: string = this.translate.instant('Change LOG DETAIL');

  constructor(private sanitizer: DomSanitizer,
    private sharedService:SharedService,
    public translate:TranslateService) { }

  ngOnInit(): void { }

  exportToExcel(navTab: string): void {
    if (navTab === 'operation-logs') {

      this.downloadCSV(this.operationLogs, this.operationLogsHeaders, 'operation_logs');
    } else {
      this.downloadCSV(this.changeLogs, this.changeLogsHeaders, 'change_logs');
    }
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
  delete(event: any): void {

    this.deleteEvent.emit(event);
  }

  showAdvancedFilter() {
    this.showFilters = !this.showFilters;
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'view') {
      this.selectedRowData = event.selectedData;
      // this.deleteEdition.emit(event.selectedData);
      this.showAuditLogDetail();
    }
  }

  onChangeActionSelect(event: any): void {
    if (event.actionId === 'view') {
      console.log(event.selectedData);
      this.selectedRowData = event.selectedData;
      // this.deleteEdition.emit(event.selectedData);
      this.showAuditChangeLogDetail();
    }
  }


  showAuditLogDetail(): void {
    this.viewAuditLogsCanvas = true;
    this.auditLogsCanvasTitle = 'AUDIT LOG DETAIL';
    setTimeout(() => {
      var offcanvas = document.getElementById('auditLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }
  getNavTabItems(): any {

    this.navtabsItems[0].label = this.translate.instant('Operation Logs');

    this.navtabsItems[1].label = this.translate.instant('Change Logs');

    return this.navtabsItems;

  }
  onSelectnode(event: any) {
    this.selectedIndex = event;
    if (event > 0) {
      this.sharedService.setTopNavTitle(this.navtabsItems[event].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }

  }

  showAuditChangeLogDetail(): void {
    this.viewChangeLogsCanvas = true;
    this.changeLogsCanvasTitle = 'Change LOG DETAIL';
    setTimeout(() => {
      var offcanvas = document.getElementById('changeLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  startDateModify(event) {

    this.startDate = event;
    this.sendParameterData();

  }
  endDateModify(event) {
    this.endDate = event;
    this.sendParameterData();
  }
  userModify(event) {
    this.sendParameterData();
  }
  serviceModify(event) {
    this.sendParameterData();
  }
  fromModify(event) {
    this.sendParameterData();
  }
  toModify(event) {
    this.sendParameterData();
  }
  actionModify(event) {
    this.sendParameterData();
  }
  exceptionModify(event) {
    this.status = event.item.some
    this.sendParameterData();
  }
  SelectBroser(event) {
     this.browserInfo = event.item.some
    this.sendParameterData();
  }
  sendParameterData() {
    if (this.startDate && this.endDate) {
      this.parameterData.emit({
        startDate: this.startDate, endDate: this.endDate, userName: this.user, serviceName: this.service,
        minExecutionDuration: this.from, maxExecutionDuration: this.to, MethodName: this.action, HasException: this.status, BrowserInfo: this.browserInfo
      })
    }
  }
  onClose(): void {
    this.viewAuditLogsCanvas = false;
    this.selectedRowData = undefined;
  }
  changelogefiltermodify(event) {
    this.sendChangelogParamter();
  }
  sendChangelogParamter() {
    if (this.changeLogStartdate && this.changeLogEndDate) {
      this.ChangeLogparameterData.emit({ StartDate: this.changeLogStartdate, EndDate: this.changeLogEndDate, UserName: this.changeLogUsername })
    }
  }

  // fabmenu mobile 
  onSelectMenu(event: any) {
    if (event.key === 'operation-log') {
      this.exportToExcel('operation-logs');
    }
    else if (event.key === 'change-log') {
      this.exportToExcel('change-logs');
    }
  }
}
