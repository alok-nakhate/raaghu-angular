import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';
declare var $: any;
@Component({
  selector: 'rds-comp-cache',
  templateUrl: './rds-comp-cache.component.html',
  styleUrls: ['./rds-comp-cache.component.scss']
})
export class RdsCompCacheComponent implements OnInit,DoCheck,OnChanges {
  tempData: any = [];
  dataSource: any = [];

  @Input() cashedata:any=[]
  @Output()
  onClearCache= new EventEmitter<string>()
  @Input() role: any = 'Advanced';
  @Input() alignmentType: any = "end";
  @Input() resetPagination: boolean = false;
  totalRecords: number = 0;
  @Input() recordsPerPage: number = 10;
  alertData: any = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "The record will be deleted permanently",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
  public rdsAlertMfeConfig: ComponentLoaderOptions;
  counter: number = 0;

  constructor() { }
  deletecaheid:any;
  ngOnInit(): void {
    this.rdsAlertMfeConfig = {
      name: 'RdsCompAlertPopup',
      input: {
        alertID: 'deleteCacheModal',
        alertData: this.alertData
      },
      output: {
        onDelete: (event) => {
          this.deletCashe(event);
        },
        onCancel: (event) => {     
          this.deletecaheid = undefined;
        }
      }
    }
    if (this.cashedata) {
      this.totalRecords = this.cashedata.length;
      // this.dataSource = this.cashedata;
      this.tempData = this.cashedata;
    }

  }
  ngDoCheck(): void {
    // if (this.cashedata) {
    //   this.tempData = JSON.parse(JSON.stringify(this.cashedata));
    //   this.totalRecords = this.cashedata.length;
    // }
    // if(this.counter < 20){
    //   this.dataSource = this.cashedata;
    //   this.counter++;
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.cashedata) {
    //   this.tempData = this.cashedata;
    //   this.totalRecords = this.cashedata.length;
    // }
  }

  getTotalRecords() {
    if (this.cashedata) {
      return this.cashedata.length;
    }
  }

  onPagination(event: any): void {
    let data: any = [];
    data = this.cashedata;
    this.dataSource = [];
    const activepage: number = event.currentPage;
    const startingIndex: number = activepage * (+event.RecordsPerPage) - (+event.RecordsPerPage);
    const endingindex: number = startingIndex + (+event.RecordsPerPage);
    for (let i = startingIndex; i < endingindex; i++) {
      if (i < data.length) {
        this.dataSource.push(data[i]);

      }
    }
    setTimeout(() => {
      this.resetPagination = false;
    }, 1000);
  }
  deletCashe(event:any){
    //this.deletecaheid=event.name;
    this.onClearCache.emit(this.deletecaheid );
    $('#deleteCacheModal').modal('hide');
  }
  deletAllcasheConfirmation(){
    $('#deleteAllModal').modal('show');
   
    
  }
  deleteConfirmation(id:any){
    this.deletecaheid=id
    $('#deleteCacheModal').modal('show');
   
  }
  deletAllcashe(){
    this.cashedata=[];
    $('#deleteAllModal').modal('hide');
  }
  close(): void {
    $('#deleteModal').modal('hide');
    this.deletecaheid = undefined;

  }
}
