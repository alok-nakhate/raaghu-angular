import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
export class billingData {
  firstName: string;
  lastName: string;
  company: string;
  phone : number;
  address : string;
  city : string;
  country : string;
  state : string;
  postalCode: string;
}
@Component({
  selector: 'rds-comp-billing-address',
  templateUrl: './rds-comp-billing-address.component.html',
  styleUrls: ['./rds-comp-billing-address.component.scss']
})

export class RdsCompBillingAddressComponent implements OnInit {


  constructor(public translate: TranslateService) { }
  @Output() onContinue = new EventEmitter<any>();
   @Input() countryList: any[] = []
   @Input() stateList: any[] = []
  // @Input() postalCode:number;
  @Input() buttonSpinner: boolean = true;

  
  model = new billingData() ;
  
  ngOnInit(): void {
  }
  
  back(){
    this.buttonSpinner=false;
  }
  SelectCountry(event){
    console.log(event);
  }
  SelectState(event){
    console.log(event);
  }
  onSubmit(billingAddressForm: NgForm) : void{
    this.buttonSpinner = true;
    billingAddressForm.form.markAllAsTouched();
    console.log(billingAddressForm.form.value) 

    this.onContinue.emit(billingAddressForm.form.value)
    billingAddressForm.reset()
   }

}
