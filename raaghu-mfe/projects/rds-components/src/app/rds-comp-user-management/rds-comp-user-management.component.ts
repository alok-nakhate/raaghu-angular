import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface SettingsData {
  emailConfirm: boolean;
  phoneVerify: boolean;
  securityImage: boolean;
  cookieConsent: boolean;
  sessionTimeout: boolean;
  allowUser: boolean;
  }
  export class TenantManagement {
    constructor(
     
    ) { }
  }
@Component({
  selector: 'rds-comp-user-management',
  templateUrl: './rds-comp-user-management.component.html',
  styleUrls: ['./rds-comp-user-management.component.scss']
})
export class RdsCompUserManagementComponent implements OnInit, OnChanges {
  checkboxLabel: any;
  isMasterSel: boolean;
  selectedDate: any = [];
  @Input() editShimmer:boolean=false;
  @Output() UserManagementData=new EventEmitter<any>();
  @Input()
  Usermanagementsettings: any = {
  isEmailConfirmationRequiredForLogin: false,
  useCaptchaOnLogin: false,
  isCookieConsentEnabled: false,
  sessionTimeOutSettings: false,
  allowUsingGravatarProfilePicture: false,
  smsVerificationEnabled: false
};



// dataset?: any = {};
@Output() change = new EventEmitter<any>();



constructor(public translate:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.dataset = this.Usermanagementsettings;
  }



ngOnInit(): void {
  
// this.dataset = this.Usermanagementsettings;

}
 selectAllFeature(e: boolean, type: string) {

  switch (type) {
    case 'emailConfirm':
      this.Usermanagementsettings.isEmailConfirmationRequiredForLogin = e;
      break;
    case 'phoneVerify':
      this.Usermanagementsettings.smsVerificationEnabled = e;
      break;
    case 'securityImage':
      this.Usermanagementsettings.useCaptchaOnLogin = e;
      break;
    case 'cookieConsent':
        this.Usermanagementsettings.isCookieConsentEnabled = e;
        break;
   case 'sessionTimeout':
          this.Usermanagementsettings.sessionTimeOutSettings = e;
          break; 
  case 'allowUser':
            this.Usermanagementsettings.allowUsingGravatarProfilePicture = e;
            break; 

  }
  this.UserManagementData.emit(this.Usermanagementsettings);
  
 }


}
