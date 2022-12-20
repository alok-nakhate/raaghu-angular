import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export interface SeccuritySetting {
  useDefaultPasswordComplexitySettings: boolean;
  requireDigit: boolean;
  requireLowercase: boolean;
  requireAlphaNumeric: boolean;
  requireUppercase: boolean;
  requiredLength: number;
  userLockout: boolean;
  maxFailedAccessAttemptsBeforeLockout: number;
  defaultAccountLockoutSeconds: string;
  twoFactorLogin: boolean;
  loginPerUser: boolean;

}



@Component({
  selector: 'rds-security',
  templateUrl: './rds-comp-security.component.html',
  styleUrls: ['./rds-comp-security.component.scss']
})
export class RdsSecurityComponent implements OnInit {
  @Output() securityData = new EventEmitter<any>();
  @ViewChild('Scurityform') securityformdata: NgForm;
  disable: boolean;
  isdisabled: boolean;
  checked: boolean;
@Input() editShimmer : boolean = false;
  dataset?: any = {};

  //@Input() lockDurationData: any;
  //@Input() lockDuration: any;

  @Output() onClick = new EventEmitter<{ evnt: any, settings: any }>();

  @Input()
  Seccuritysetting: any = {
    useDefaultPasswordComplexitySettings: false,
    requireDigit: false,
    requireLowercase: false,
    requireAlphaNumeric: false,
    requireUppercase: false,
    requiredLength: 0,
    userLockout: false,
    maxFailedAccessAttemptsBeforeLockout: 0,
    defaultAccountLockoutSeconds: 0,
    twoFactorLogin: false,
    loginPerUser: false,
  };

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

    // if (!this.dataset) {
    //   this.dataset = {};
    //   this.dataset['useDefaultPasswordComplexitySettings'] = false;
    //   this.dataset['requireDigit'] = false;
    //   this.dataset['requireLowercase'] = false;
    //   this.dataset['requireAlphaNumeric'] = false;
    //   this.dataset['requireUppercase'] = false;
    //   this.dataset['requiredLength'] = 0;
    //   this.dataset['userLockout'] = false;
    //   this.dataset['maxFailedAccessAttemptsBeforeLockout'] = 0;
    //   this.dataset['defaultAccountLockoutSeconds'] = 0;
    //   this.dataset['twoFactorLogin'] = false;
    //   this.dataset['loginPerUser'] = false;

    // }
    // if (this.Seccuritysetting) {
    //   this.dataset = this.Seccuritysetting;
    // }
    // setTimeout(() => {
    //   if (this.dataset && this.securityformdata) {
    //     this.securityformdata.statusChanges.subscribe(res => {
    //       if (res === 'VALID') {
    //         this.securityData.emit(this.Seccuritysetting);
    //       }
    //     });
    //   }

    // }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (!this.dataset) {
    //   this.dataset = {};
    //   this.dataset['useDefaultPasswordComplexitySettings'] = false;
    //   this.dataset['requireDigit'] = false;
    //   this.dataset['requireLowercase'] = false;
    //   this.dataset['requireAlphaNumeric'] = false;
    //   this.dataset['requireUppercase'] = false;
    //   this.dataset['requiredLength'] = 0;
    //   this.dataset['userLockout'] = false;
    //   this.dataset['maxFailedAccessAttemptsBeforeLockout'] = 0;
    //   this.dataset['defaultAccountLockoutSeconds'] = 0;
    //   this.dataset['twoFactorLogin'] = false;
    //   this.dataset['allowOneConcurrentLoginPerUser'] = false;

    // }
    // setTimeout(() => {
    //   if (this.dataset && this.securityformdata) {
    //     this.securityformdata.statusChanges.subscribe(res => {
    //       if (res === 'VALID') {
    //         this.securityData.emit(this.Seccuritysetting);
    //       }
    //     });
    //   }

    // }, 100);

  }

 
  onChange():void{
    this.securityData.emit(this.Seccuritysetting);
  }

  checkUncheckAll() {
    this.checked = !this.checked;
    if (this.checked) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  checkUserLockout() {
    // this.checked = !this.checked;
    // if (this.checked) {
    //   this.isdisabled = true;
    // } else {
    //   this.isdisabled = false;
    // }
  }

  submit(event: any, settings: any) {
    this.onClick.emit({ evnt: event, settings: settings });
  }
  selectAllFeature(e: any, type: string) {
    switch (type) {
      case 'userLockout':
        this.Seccuritysetting.userLockout = e;
        break;
      case 'twoFactorLogin':
        this.Seccuritysetting.twoFactorLogin = e;
        break;
      case 'allowOneConcurrentLoginPerUser':
        this.Seccuritysetting.allowOneConcurrentLoginPerUser = e;
        break;
      case 'useDefaultPasswordComplexitySettings':
        this.Seccuritysetting.useDefaultPasswordComplexitySettings = e;
        break;
      case 'requireDigit':
        this.Seccuritysetting.requireDigit = e;
        break;
      case 'requireLowercase':
        this.Seccuritysetting.requireLowercase = e;
        break;
      case 'requireAlphaNumeric':
        this.Seccuritysetting.requireAlphaNumeric = e;
        break;
      case 'requireUppercase':
        this.Seccuritysetting.requireUppercase = e;
        break;
      case 'defaultAccountLockoutSeconds':
        this.Seccuritysetting.defaultAccountLockoutSeconds = e;
        break;

    }
    this.securityData.emit(this.Seccuritysetting);
  }
  getCounterData(count: number, type: string) {
    switch (type) {
      case 'requiredLength':
        this.Seccuritysetting.requiredLength = count;
        break;
      case 'maxFailedAccessAttemptsBeforeLockout':
        this.Seccuritysetting.maxFailedAccessAttemptsBeforeLockout = count;
        break;
    }
    this.securityData.emit(this.Seccuritysetting);
  }

  cancel() { }
}
