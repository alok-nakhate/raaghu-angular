import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface AlertPopupData {
  iconUrl:string,
  colorVariant: string,
  alertConfirmation:string,
  messageAlert:string,
  CancelButtonLabel:string,
  DeleteButtonLabel:string
 }

@Component({
  selector: 'rds-comp-alert-popup',
  templateUrl: './rds-comp-alert-popup.component.html',
  styleUrls: ['./rds-comp-alert-popup.component.scss']
})
export class RdsCompAlertPopupComponent implements OnInit {

  constructor(public translate:TranslateService) {
   
   }

  ngOnInit(): void {
    this.Dataset=this.alertData;
  }
  elementUrls: string[];
 
  ngOnChanges(changes: SimpleChanges): void {
    this.Dataset=this.alertData;
  
  }
  @Input()
  alertID?:any
  @Input()
  iconUrl!: string
  @Input() colorVariant : string;
  @Input()
  ConformString!: string
  @Input()
  modalid!:string;
  @Input()
  Message?: string="The record will be deleted permanently"
  Dataset?:any={};
  buttonLabel:string="button";
  @Input()
  backgroundColor!:string;
  @Input() 
  alertData: AlertPopupData={
    iconUrl:"delete",
    colorVariant: "danger",
    alertConfirmation:"Are you sure to Delete",
    messageAlert:"The record will be deleted permanently",
    CancelButtonLabel:"Cancel",
    DeleteButtonLabel:"Delete"
  }
  @Output()
  onDelete = new EventEmitter<{evnt:any,item:boolean}>()
  @Output()
  onCancel = new EventEmitter<{evnt:any,item:boolean}>()
  DeleteClick(event: any,item:boolean) {
    this.onDelete.emit({ evnt: event, item: item});
 
}
   CancelClick(event: any,item:boolean){
    this.onCancel.emit({ evnt: event, item: item});
 

   }

}
