import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-invoice',
  templateUrl: './rds-comp-invoice.component.html',
  styleUrls: ['./rds-comp-invoice.component.scss']
})
export class RdsCompInvoiceComponent implements OnInit {

  addressMaxlengthError: boolean = false;
  addressMinlengthError: boolean = false;

  legalNamePattern: any = /^[A-Za-z]+$/;

  constructor(public translate: TranslateService) {

  }

  @Output() InvoiceData = new EventEmitter<any>();
  @Input() editShimmer:boolean=false;
  @Input() InvoiceDataForm: any;
  @ViewChild('invoiceForm') InvoiceFormInfo: NgForm;



  ngOnInit(): void {
    if (!this.InvoiceDataForm) {
      this.InvoiceDataForm = {};
      this.InvoiceDataForm['legalName'] = '';
      this.InvoiceDataForm['address'] = '';
    }
    // setTimeout(() => {
    //   if (this.InvoiceDataForm && this.InvoiceFormInfo) {
    //     this.InvoiceFormInfo.statusChanges.subscribe(res => {
    //       if (res === 'VALID') {
    //         this.InvoiceData.emit(this.InvoiceDataForm);
    //       }
    //     });
    //   }
    // }, 100);
  }
  onChange():void{
    this.InvoiceData.emit(this.InvoiceDataForm);
  }

  onAddressChange(event: any, invoiceForm: NgForm): void {
    if (event.target.value.trim().length > 250) {
      this.addressMaxlengthError = true;
      return;
    } else {
      this.addressMaxlengthError = false;
    }
    if (event.target.value.trim().length < 30) {
      this.addressMinlengthError = true;
      return;
    } else {
      this.addressMinlengthError = false;

    }
    this.InvoiceDataForm.address = event.target.value;

    this.sendData(invoiceForm);

  }

  sendData(invoiceForm: NgForm): void {
    if (this.InvoiceDataForm && this.InvoiceDataForm.address && this.InvoiceDataForm.legalName && !this.addressMaxlengthError && !this.addressMinlengthError) {
      this.InvoiceData.emit(this.InvoiceDataForm);
    }
  }

  sendDataE

}

