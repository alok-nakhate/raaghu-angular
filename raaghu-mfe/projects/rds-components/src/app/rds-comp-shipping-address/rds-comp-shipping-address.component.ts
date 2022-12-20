import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-shipping-address',
  templateUrl: './rds-comp-shipping-address.component.html',
  styleUrls: ['./rds-comp-shipping-address.component.scss']
})
export class RdsCompShippingAddressComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  @Input() EmailID:string;
  @Input() Contact:number;
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() company:string;
  @Input() phone:number;
  @Input() address:string;
  @Input() state:string;
  @Input() country:string;
  @Input() countryList:any[] = [];
  @Input() postalCode:number;
  @Input() buttonSpinner : boolean =true;
  
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
  }

  continue() {
    this.buttonSpinner = true;

  }

  back() {
    this.buttonSpinner = false;
  }
  SelectCountry(event) {
    console.log(event);
  }

}