import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
export class DownloadData{
  public DateofData: string;
  public NummberofDates: string;
  public downloadUrl: string;
  }

@Component({
  selector: 'rds-comp-download-collection',
  templateUrl: './rds-comp-download-collection.component.html',
  styleUrls: ['./rds-comp-download-collection.component.scss']
})
export class RdsCompDownloadCollectionComponent implements OnInit {
  @Input() pagination: boolean = true;
  
  
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.dataSource=this.DownloadTable;
  }
  @Input()
  DownloadTable:DownloadData[]=[]
  @Input()
  _SERVURL:string='http://localhost:4200/'
  dataSource: any = [];
  recordsPerPage: number = 10;
  resetPagination: boolean = false;
  downloadFiles(fileurl:string) {

    if(fileurl){
      var urlToSend =this._SERVURL+fileurl
      var req = new XMLHttpRequest();
      req.open("GET", urlToSend, true);
      req.responseType = "blob";
      req.onload = function (event) {
              var blob = req.response;
              var link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              var parts = fileurl.split('/');
              link.download = parts[parts.length - 1];
              link.click();
              link.remove();
          }
      req.send();
    }
   
    }
    onPagination(event: any): void {
      this.dataSource = [];
      const activepage: number = event.currentPage;
      const startingIndex: number = activepage * (+event.RecordsPerPage) - (+event.RecordsPerPage);
      const endingindex: number = startingIndex + (+event.RecordsPerPage);
      for (let i = startingIndex; i < endingindex; i++) {
        if (i < this.DownloadTable.length) {
  
          this.dataSource.push(this.DownloadTable[i]);
        }
      }
      setTimeout(() => {
        this.resetPagination = false;
      }, 1000);
  

     
    }

    getTotalRecords() {
   
      if (this.DownloadTable) {
        return this.DownloadTable.length;
      }
    }
}
