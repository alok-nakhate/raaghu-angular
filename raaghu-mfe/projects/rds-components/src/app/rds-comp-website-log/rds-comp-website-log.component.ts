import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-website-log',
  templateUrl: './rds-comp-website-log.component.html',
  styleUrls: ['./rds-comp-website-log.component.scss']
})
export class RdsCompWebsiteLogComponent implements OnInit {

  tempData: any = [];
  dataSource: any = [];

  @Input() websiteLogData:any=[]
  @Input() role: any = 'Advanced';
  @Input() alignmentType: any = "end";
  @Input() resetPagination: boolean = false;
  totalRecords: number = 0;
  @Input() recordsPerPage: number = 10;

  constructor(public translate:TranslateService) { }
  ngOnInit(): void {
    if (this.websiteLogData) {
      this.totalRecords = this.websiteLogData.length;
      // this.dataSource = this.websiteLogData;
    //  this.tempData = this.websiteLogData;
    }
  }
    ngDoCheck(): void {
      if (this.websiteLogData) {
        //this.tempData = JSON.parse(JSON.stringify(this.websiteLogData));
        // this.dataSource = this.websiteLogData;
        // this.totalRecords = this.websiteLogData.length;
      }
    }
    ngOnChanges(changes: SimpleChanges): void {
      if (this.websiteLogData) {
        //this.tempData = this.websiteLogData;
        // this.dataSource = this.websiteLogData;
        // this.totalRecords = this.websiteLogData.length;
      }
    }
    getTotalRecords() {
     
      if (this.websiteLogData) {
        return this.websiteLogData.length;
      }
    }
    onPagination(event: any): void {
      let data: any = [];
      data = this.websiteLogData;
      this.dataSource = [];
      const activepage: number = event.currentPage;
      const startingIndex: number = activepage * (+event.RecordsPerPage) - (+event.RecordsPerPage);
      const endingindex: number = startingIndex + (+event.RecordsPerPage);
      for (let i = startingIndex; i < endingindex; i++) {
        if (i < data.length) {
          this.dataSource.push(data[i]);
        }
      }
      // setTimeout(() => {
      //   this.resetPagination = false;
      // }, 1000);
    }

  
}
