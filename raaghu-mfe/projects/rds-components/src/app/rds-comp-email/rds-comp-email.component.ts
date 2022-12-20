
import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export interface EmailData {
  useSSL: boolean;
  useDefaultCredentials: boolean;

}
@Component({
  selector: 'rds-comp-email',
  templateUrl: './rds-comp-email.component.html',
  styleUrls: ['./rds-comp-email.component.scss']
})
export class RdsCompEmailComponent implements OnInit {
  @Input()
  settings: EmailData = {
    useSSL: false,
    useDefaultCredentials: true,

  };
  @Input()  editShimmer: boolean = false;
  @Output() EmailtData=new EventEmitter<any>();
  @Output() SendTestEmailData=new EventEmitter<any>();
  @ViewChild('emailForm')Emailformdata: NgForm;
 
  @Input() EmailData: any={
    defaultFromAddress:'',
    defaultFromDisplayName:'',
    smtpHost:'',
    smtpPort:'',
    smtpEnableSsl:false,
    smtpUseDefaultCredentials:false,
    userLosmtpDomainckout:false
  };
  
  showEmailValidityMessage = false;
  showEmailRequiredMessage = false;
  showHostValidityMessage = false;
  showHostRequiredMessage = false;
  showPortValidityMessage = false;
  showPortRequiredMessage = false;
  showAEmailValidityMessage = false;
  showAEmailRequiredMessage = false;

  legalNamePattern: any = /^[A-Za-z]+$/;
  hostAddressPattern: any = /^[0-9]{3}(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/;

  Email: any;

  dataset?: any = {};
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(public translate:TranslateService) {

  }
  
  ngOnInit(): void {    
    // setTimeout(() => {
    //   if (this.EmailData && this.Emailformdata) {
    //     this.Emailformdata.statusChanges.subscribe(res => {
    //       if (res === 'VALID') {
    //         this.EmailtData.emit(this.EmailData);
    //       }
    //     });
    //   }
  
    //   }, 100);
  

  }

  onChange():void{
    if(this.EmailData.defaultFromAddress && this.emailValidator(this.EmailData.defaultFromAddress)){
      this.EmailtData.emit(this.EmailData);
    }
  }

  emailValidator(data: string) {
    var EMAIL_REGEXP =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(data)) {
      this.showEmailValidityMessage = true;
      return false;
    } else this.showEmailValidityMessage = false;
    this.showEmailValidityMessage = false;
    return true;
  }
 
  checkEmailValidity() {
    if (this.showEmailValidityMessage === false) {
      if (this.EmailData === '' || this.EmailData === undefined) {
        this.showEmailRequiredMessage = true;
      } else {
        this.showEmailRequiredMessage = false;
      }
    }
  }

  sendTestmail(){
    this.SendTestEmailData.emit(this.EmailData.smtpDomain)
  }

  selectAllFeature(e: any, type: string) {
    switch (type) {
      case 'smtpEnableSsl':
        this.EmailData.smtpEnableSsl = e;
        break;
      case 'smtpUseDefaultCredentials':
        this.EmailData.smtpUseDefaultCredentials = e;
        break;
     

    }
  }
}
