import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
import { AlertPopupData } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';
declare var bootstrap: any;
@Component({
  selector: 'rds-data-table',
  templateUrl: './rds-comp-data-table.component.html',
  styleUrls: ['./rds-comp-data-table.component.scss']
})
export class RdsDataTableComponent implements OnInit, DoCheck, OnChanges {
  @Input() tableData: any = [];
  @Input() inlineEdit: boolean = true;
  @Input() enableCheckboxSelection: boolean = false;
  @Output() getAllCheckedItems = new EventEmitter<any>();
  @Output() onActionSelection = new EventEmitter<{ selectedData: any, actionId: string }>();
  showConfirmationPopup: boolean = false;
  filteredArray: any = [];
  tempData: any = [];
  dataSource: any = [];
  rowData: any;
  @Input() tableHeaders: TableHeader[] = [];
  @Input() width = 400;
  @Input() isShimmer: boolean = false;
  @Input() role: any = 'Advanced';
  @Input() tableStyle?: any = 'light';
  @Input() pagination: boolean = false;
  @Input() alignmentType: any = "end";
  @Input() actions: TableAction[] = [];
  @Input() resetPagination: boolean = false;
  @Input() refresh: boolean = false;
  @Input() isDeleteConfirmationRequired: boolean = true;
  totalRecords: number = 0;
  @Input() recordsPerPage: number = 10;
  @Input() noDataTitle?: string;
  @Input() noDataSubTitle?: string = 'Click on the button above to add';
  isFilterOn: boolean = false;
  @Input() showNodataSubtitle = true;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();
  @Output() onDownload = new EventEmitter<any>();
  @Output() onSelectedData = new EventEmitter<any>();
  pageDetails: any;
  alertData: AlertPopupData = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "The record will be deleted permanently",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
  selectedData: any;
  RecordPerPage: any;

  static count: number = 0;
  public id: any = 'table'

  constructor(public translate: TranslateService) {
    this.id = this.id + RdsDataTableComponent.count++;

  }
  ngDoCheck(): void {
    if (this.tableData) {
      this.tempData = JSON.parse(JSON.stringify(this.tableData));
      this.totalRecords = this.tableData.length;
      this.tableData.forEach((item: any) => {
        if (item.id) {
          const index = this.dataSource.findIndex((x) => x.id === item.id);
          if (index !== -1) {
            this.dataSource[index] = item;
          }
        }
      });
      if (this.refresh) {
        if (this.pageDetails) {
          this.onPagination(this.pageDetails);
          this.refresh = false;
        }
      }

    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tableData) {
      this.tempData = this.tableData;
      this.totalRecords = this.tableData.length;
    }
    if (!this.pagination) {
      this.dataSource = this.tableData;
    }
  }

  ngOnInit(): void {
    if (this.tableData) {
      this.totalRecords = this.tableData.length;
      // this.dataSource = this.tableData;
      this.tempData = this.tableData;
    }
    if (!this.pagination) {
      this.dataSource = this.tableData;
    }

  }

  deleteConfirmation(data: any): void {
    this.selectedData = data;
    this.showConfirmationPopup = true;
    setTimeout(() => {
      var element: any = document.getElementById('deleteModal');
      var modal = new bootstrap.Modal(element);
      modal.show();
    }, 100);
  }

  delete(): void {
    this.clearFilters();
    this.onActionSelection.emit({ actionId: 'delete', selectedData: this.selectedData });
    this.filteredArray = [];
    this.isFilterOn = false;
    this.close();
  }
  onSelectData(data) {
    this.onSelectedData.emit(data);
  }

  close(): void {
    var element: any = document.getElementById('deleteModal');
    if (element) {
      var modal = new bootstrap.Modal(element);
      modal.hide();
    }
    this.selectedData = undefined;
    this.showConfirmationPopup = false;
  }
  getDescIconClass(header: any): string {
    if (header.isDecending !== undefined) {
      if (header.isDecending === true) {
        return 'sort-icon-enabled'
      }
    }
    return '';
  }
  getAscIconClass(header: any): string {
    if (header.isDecending !== undefined) {
      if (header.isDecending === false) {
        return 'sort-icon-enabled'
      }
    }
    return '';
  }
  sortByColumn(header: any): void {
    if (this.isFilterOn) {
      this.tableData = this.filteredArray;
    }
    if (!header.sortable) {
      return;
    }
    if (header.isDecending === undefined) {
      header.isDecending = true;
    } else {
      header.isDecending = !header.isDecending;
    }
    if (!header.isDecending) {
      this.tableData.sort((a: any, b: any) => (a[header.key].toLowerCase() > b[header.key].toLowerCase()) ? 1 : ((b[header.key].toLowerCase() > a[header.key].toLowerCase()) ? -1 : 0))
    } else {
      this.tableData.sort((a: any, b: any) => (a[header.key].toLowerCase() < b[header.key].toLowerCase()) ? 1 : ((b[header.key].toLowerCase() < a[header.key].toLowerCase()) ? -1 : 0))
    }
    if (!this.pagination) {
      this.dataSource = this.tableData;
    }
    const data: any = {
      currentPage: 1,
      RecordsPerPage: this.RecordPerPage
    }
    this.onPagination(data);
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.tableStyle !== "light") {
      var bgColor = 'table-' + this.tableStyle;
      classes.push(bgColor);
    }
    if (this.tableStyle !== 'light' && this.tableStyle !== 'warning' && this.tableStyle !== 'info' && this.tableStyle !== 'white') {
      classes.push('text-white');
    }
    return classes
  }

  public clearFilters(): void {
    this.tableHeaders.forEach((_header: TableHeader) => {
      if (_header.filterable) {
        if (_header[_header.key + 'Filter'] !== '' && _header[_header.key + 'Filter']) {
          _header[_header.key + 'Filter'] = '';
        }
      }

    });
  }

  onPagination(event: any): void {
    let data: any = [];
    this.RecordPerPage = event.RecordsPerPage;
    if (this.isFilterOn) {
      data = this.filteredArray;
    } else {
      data = this.tableData;
    }
    this.pageDetails = event;
    this.dataSource = [];
    const activepage: number = event.currentPage;
    const startingIndex: number = activepage * (+event.RecordsPerPage) - (+event.RecordsPerPage);
    const endingindex: number = startingIndex + (+event.RecordsPerPage);
    for (let i = startingIndex; i < endingindex; i++) {
      if (i < data.length) {
        this.dataSource.push(data[i]);
      }
    }
    this.refresh = false;
    setTimeout(() => {
      this.resetPagination = false;
    }, 1000);
  }

  editItem(item: any): void {
    this.rowData = JSON.parse(JSON.stringify(this.dataSource));
    if (this.inlineEdit) {
      item['isEdit'] = true;
    } else {
      this.onActionSelection.emit({ selectedData: item, actionId: 'edit' });
    }
    // $('[data-bs-toggle="tooltip"]').tooltip('hide');

  }

  closeEdit(item: any): void {
    if (this.rowData) {
      item.isEdit = false;
      this.dataSource = this.rowData;
    } else {
      const index: number = this.dataSource.findIndex((x: any) => JSON.stringify(item) === JSON.stringify(x));
      if (index !== -1) {
        this.dataSource.splice(index, 1);
      }
    }
    // $('[data-bs-toggle="tooltip"]').tooltip('hide');
  }
  saveChanges(data: any): void {
    let hasError: boolean = false;
    if (data) {
      this.tableHeaders.forEach((item: any) => {
        if (!hasError && item.required && (data[item.key] === undefined || data[item.key] === '')) {
          hasError = true;
        }
      })
      if (hasError) {
        return
      }
      data.isEdit = false;
      this.onActionSelection.emit({ actionId: 'edit', selectedData: data });
      // $('[data-bs-toggle="tooltip"]').tooltip('dispose');
    }

    return;

  }

  download(data): void {
    this.onDownload.emit(data);
  }
  selected = false
  onChangeSelected(event) {
    console.log(event);
  }

  onKeyup(event?: any, header?: any): void {
    if (event) {
      header[header.key + 'Filter'] = event.target.value;
    }
    let tempData = JSON.parse(JSON.stringify(this.tempData))
    this.isFilterOn = false;
    this.tableHeaders.forEach((_header: TableHeader) => {
      if (_header.filterable) {
        if (_header[_header.key + 'Filter'] !== '' && _header[_header.key + 'Filter']) {
          this.isFilterOn = true;
        }
        const filter: string = (_header && _header[_header.key + 'Filter']) ? _header[_header.key + 'Filter'].toString().toLowerCase() : '';
        if (filter !== '') {
          tempData = tempData.filter((x: any) => x[_header.key] && x[_header.key].toString().toLowerCase().includes(filter));
        }
      }
    });
    this.filteredArray = tempData;
    if (!this.isFilterOn) {
      this.filteredArray = [];
    }
    // this.resetPagination = true
    if (this.tableData.length === 0) {
      this.dataSource = [];
    }
  }

  getTotalRecords() {
    if (this.filteredArray && this.filteredArray.length > 0) {
      return this.filteredArray.length;
    }
    if (this.tableData) {
      return this.tableData.length;
    }
  }
  openSearchModal(index: number): void {
    var element: any = document.getElementById('search-dropdown' + index + this.id);
    var bsOffcanvas = new bootstrap.Dropdown(element);
    bsOffcanvas.show();
  }

  openAction(index: number): void {
    var element: any = document.getElementById('action-dropdown' + index + this.id);
    var dropdown = new bootstrap.Dropdown(element);
    dropdown.show();
  }

  onActionSelect(action: TableAction, selectedData: any): void {
    if (action.id === 'delete') {
      if (this.isDeleteConfirmationRequired) {
        this.deleteConfirmation(selectedData);
      } else {
        this.selectedData = selectedData;
        this.delete();
      }
    } else if (action.id === 'edit') {
      this.editItem(selectedData);
    } else {
      this.onActionSelection.emit({ actionId: action.id, selectedData: selectedData });
    }
  }

  checkAllCheckBox(ev: any) {
    let value: boolean = false;
    if (ev.target.value === 'true') {
      value = true;
    }
    this.tableData.forEach((x: any) => x.checked = value);
    const allSelectedItems: any = this.tableData.filter((x: any) => x.checked);
    this.getAllCheckedItems.emit(allSelectedItems);
  }

  isAllCheckBoxChecked() {
    return this.tableData.every((p: any) => p.checked);
  }

  changeCheckbox(data: any, ev: any): void {
    let value: boolean = false;
    if (ev.target.value === 'true') {
      value = true;
    }
    data.checked = value;
    const allSelectedItems: any = this.tableData.filter((x: any) => x.checked);
    this.getAllCheckedItems.emit(allSelectedItems);
  }
}

