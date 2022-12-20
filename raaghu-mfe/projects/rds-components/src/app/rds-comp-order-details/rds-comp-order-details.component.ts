import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface orderDetails {
  profilePic:string
  prodname:string
  price:number
  highlights:string
  update:string
  tno:string
  trackingNumber:number
  emailId:string
  phoneNo:any
  qty:number
  TotalPrice:number
  shipDetails:string
  address:string
  stepparList:any
  orderStage:string
  processPercent: number
}
@Component({
  selector: 'rds-comp-order-details',
  templateUrl: './rds-comp-order-details.component.html',
  styleUrls: ['./rds-comp-order-details.component.scss']
})

export class RdsCompOrderDetailsComponent implements OnInit {
  @Input() displaytype: 'with-progress-bars' | 'With large images and progress bars' | 'With large images and progress bars - 1' = 'with-progress-bars';
  colorVariant?: string;
  constructor() { }

 
  @Output()
  onload = new EventEmitter<any>();

  @Input()  itemList:orderDetails[]=[]
  
  

  isEdit:boolean=false;
  ngOnInit(): void {
    this.itemList.forEach((item:any)=>{
      if(item.orderStage == 'processing'){
        item.processPercent = 36;
      } else if(item.orderStage == 'shipped'){
        item.processPercent = 62;
      } else if(item.orderStage == 'delivered'){
        item.processPercent = 100;
      } else {
        item.processPercent = 0;
      }
    });
     
   
    
  }

  onEdit(){
      this.isEdit=!this.isEdit;
  }

 
}
