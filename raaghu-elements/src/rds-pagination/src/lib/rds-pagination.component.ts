import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RdsPaginationService } from './rds-pagination.service';
@Component({
  selector: 'rds-pagination',
  templateUrl: './rds-pagination.component.html',
  styleUrls: ['./rds-pagination.component.scss']
})
export class RdsPaginationComponent implements OnInit {
  constructor(private pagerService: RdsPaginationService) {

  }
  disabled: boolean = false;
  @Input() totalRecords = 10;
  @Input() recordsPerPage = 5;
  endPage = 5;
  pager: any;
  @Input()
  size: 'large' | 'small' | 'medium' = 'medium';
  @Input() alignmentType: 'start' | 'center' | 'end' = 'start';
  @Input() role: 'Basic' | 'Advanced' = 'Basic';
  @Output() onPageChange = new EventEmitter<any>();
  @Output() onRecordsPerPageChange = new EventEmitter<any>();



  ngOnChanges() {
    this.setPage(1);
  }
  public get classes(): string {
    const size = ` pagination-${this.size === 'large' ? 'lg ' : this.size === 'small' ? 'sm ' : 'md'}`;
    const align = `pagination justify-content-${this.alignmentType}`;
    return size + align;
  }
  setPage(page: number) {
    let recordsPerPage: any = this.recordsPerPage;
    if (recordsPerPage === 'All') {
      recordsPerPage = this.totalRecords;
    }
    this.pager = this.pagerService.getPager(this.totalRecords, page, recordsPerPage);
    this.onPageChange.emit({ currentPage: this.pager.currentPage, RecordsPerPage: recordsPerPage });
  }
  setItemsPerPage(page: number, id: any) {
    let recordsPerPage: any = this.recordsPerPage;
    if (id.target.value === 'All') {
      recordsPerPage = this.totalRecords;
    } else {
      recordsPerPage = id.target.value
    }
    this.pager = this.pagerService.getPager(this.totalRecords, page, recordsPerPage);
    this.onPageChange.emit({ currentPage: this.pager.currentPage, RecordsPerPage: recordsPerPage });
  }
  ngOnInit(): void {
    this.setPage(1);

  }
  getSize():string{
      const size = `${this.size === 'large' ? 'lg py-3' : this.size === 'small' ? 'sm ' : 'md py-2'}`;
      return size ;
  }

}
