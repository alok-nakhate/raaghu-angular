import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-contact-information',
  templateUrl: './rds-comp-contact-information.component.html',
  styleUrls: ['./rds-comp-contact-information.component.scss']
})
export class RdsCompContactInformationComponent implements OnInit {
  EmailID:string;
  Contact:number;
  @Input() buttonSpinner : boolean =true;
  @Input() contactData: any;
  @ViewChild('contactUsForm')contacrForm: NgForm;
  @Output() contactInfo = new EventEmitter<any>();
  isReset: boolean = false;
  constructor(public translate: TranslateService) { }
  
  ngAfterViewInit(): void {
    if (this.contactData && this.contacrForm) {
      this.contacrForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.contactInfo.emit(this.contactData);
        } else {
          this.contactInfo.emit(undefined);
        }
      });
    }  }
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit(): void {
    if (!this.contactData) {
      this.contactData = {};
      this.contactData['email'] = '';
      this.contactData['contactnumber'] = '';
      this.contactData['agree']= false
    }
  }
  contact() : void {
   this.contactInfo.emit(this.contactData);
   console.log(this.contactData)
   this.contacrForm.reset()
    }
}