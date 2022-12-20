import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface SubscriptionItem {
  name: string;
  price: string;
  duration: string;
  iconurl:string;
  recommended:boolean;
  features:any[];
}
@Component({
  selector: 'rds-comp-subscription',
  templateUrl: './rds-comp-subscription.component.html',
  styleUrls: ['./rds-comp-subscription.component.scss']
})
export class RdsCompSubscriptionComponent implements OnInit {
 ngOnInit(): void {
    this.Dataset=this.subscriptionData;
  }
  elementUrls: string[];
  constructor(public translate:TranslateService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.Dataset=this.subscriptionData;
   
  }

  subscriptionitems: SubscriptionItem[] = [];
  @Input()
  bodybackGroundColor?: string;
  @Input()
  HeaderbackGroundColor?: string;
  @Input()
  footerbackGroundColor?: string;
  @Input()
  borderRadious?: number;
  @Input()
  Paddig?: number;
  @Input()
  borderwidth?:number;
  @Output()
  onSubcribe = new EventEmitter<{evnt:any,subscriptionData:SubscriptionItem}>()
  @Input() 
  subscriptionData: SubscriptionItem[]=[{
    name: "test",
    price: "23",
    duration: "2 Days",
    iconurl:"standard_subscription",
    recommended:false,
    features:["Maximum User Count","Test Check feature","Unlimited Subscription"]
  }];
  Dataset:any[]=[];
 // Dataset:any={};
  @Input()
  subscriptionBorder?:number=0;
  SubscriptionClick(event: any,subscriptionData:SubscriptionItem){
    this.onSubcribe.emit({ evnt: event, subscriptionData: subscriptionData});
 

   }

}
