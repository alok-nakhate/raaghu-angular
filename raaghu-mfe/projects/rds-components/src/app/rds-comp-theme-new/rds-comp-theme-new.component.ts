import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rds-comp-theme-new',
  templateUrl: './rds-comp-theme-new.component.html',
  styleUrls: ['./rds-comp-theme-new.component.scss']
})
export class RdsCompThemeNewComponent implements OnInit {
  @Input() StyleList:any=[];
 
  @Input() WebList: any = [];
  @Input()  MenuList: any = [];
  @Input()  StatusList: any = [];
  @Input() themeData: any;
  @ViewChild('themeManagementForm')themeForm: NgForm;
  @Output() themeInfo = new EventEmitter<any>();
  constructor() { }
 
  ngOnInit(): void {
  if (!this.themeData) {
    this.themeData = {};
    this.themeData['style'] = '';
    this.themeData['webstyle'] = '';
    this.themeData['placement'] = '';
    this.themeData['status'] = '';
    
  }
}

selectIdentity(e: boolean, type: string) {
  this.themeData.emit(this.themeData);
 
  console.log('this.themeData',this.themeData);
  
  
 }
 onSaveTheme(){
  const selectedStyle: any = this.StyleList.find((x: any) => x.some == this.themeData.style);
  if (selectedStyle) {
    this.themeData.styleId= selectedStyle.value;
  }
  const selectedWebStyle: any = this.WebList.find((x: any) => x.some == this.themeData.webstyle);
  if (selectedWebStyle) {
    this.themeData.webStyleId= selectedWebStyle.value;
  }
  const selectedPlacement: any = this.MenuList.find((x: any) => x.some == this.themeData.placement);
  if (selectedPlacement) {
    this.themeData.placementId= selectedPlacement.value;
  }
  const selectedStatus: any = this.StatusList.find((x: any) => x.some == this.themeData.status);
  if (selectedStatus) {
    this.themeData.statusId= selectedStatus.value;
  }

  this.themeInfo.emit(this.themeData);
  console.log(this.themeData)
 }
 onSelectStyle(selectedItem: any){
  this.themeData.style = selectedItem.item.some;
 }

 onSelectWebStyle(selectedItem: any){
  this.themeData.webstyle = selectedItem.item.some;
 }
 onSelectPlacementStyle(selectedItem: any){
  this.themeData.placement = selectedItem.item.some;
 }
 onSelectStatus(selectedItem: any){
  this.themeData.status = selectedItem.item.some;
 }
}