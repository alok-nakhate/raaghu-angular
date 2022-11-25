import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-tenant-settings',
  templateUrl: './rds-comp-tenant-settings.component.html',
  styleUrls: ['./rds-comp-tenant-settings.component.scss']
})
export class RdsCompTenantSettingsComponent implements OnInit {

  @Output() tenantSettings = new EventEmitter<any>();
  public connectionString: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public useHostDatabase: boolean = false;
  public setRandomPassword: boolean = false;
  public changePasswordOnNextLogin: boolean = false;
  public sendActivationEmail: boolean = false;
  public activate: boolean = false;
  isPasswordMismatch: boolean = false;
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantSettingsInfo: any;
  @Input() isTenantInfoValid: boolean = false
  @Input() showEditData : boolean = false;
  @Input () buttonSpinner : boolean =true;
  @ViewChild('tenantSettingsForm') settingsForm: NgForm;
  @Input() passwordValidation:boolean = true;
  constructor(public translate:TranslateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tenantSettingsInfo) {
      this.tenantSettingsInfo = {};
      this.tenantSettingsInfo['connectionString'] = '';
      this.tenantSettingsInfo['password'] = '';
      this.tenantSettingsInfo['confirmPassword'] = '';
      this.tenantSettingsInfo['useHostDatabase'] = false;
      this.tenantSettingsInfo['setRandomPassword'] = false;
      this.tenantSettingsInfo['changePasswordOnNextLogin'] = false;
      this.tenantSettingsInfo['sendActivationEmail'] = false;
      this.tenantSettingsInfo['isActive'] = false;
      this.tenantSettingsInfo['isInTrialPeriod'] = false;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.settingsForm.statusChanges.subscribe(res => {
        if (res === 'VALID' && !this.isPasswordMismatch) {
          this.tenantSettings.emit({ settings: this.tenantSettingsInfo, next: false });
        }
      });
    }, 100);
  }

  getCheckboxValue(event: boolean, type: string): void {
    switch (type) {
      case 'host':
        this.tenantSettingsInfo.useHostDatabase = event;
        break;
      case 'ramdomPassword':
        this.tenantSettingsInfo.setRandomPassword = event;
        break;
      case 'changePassword':
        this.tenantSettingsInfo.changePasswordOnNextLogin = event;
        break;
      case 'sendEmail':
        this.tenantSettingsInfo.sendActivationEmail = event;
        break;
      case 'isActive':
        this.tenantSettingsInfo.isActive = event;
        break;
      case 'isInTrialPeriod':
        this.tenantSettingsInfo.isInTrialPeriod = event;
        break;
    }

  }
  next(tenantSettingsForm: NgForm): void {
     tenantSettingsForm.form.markAllAsTouched();
this.buttonSpinner=true;

    if (tenantSettingsForm.invalid || this.isPasswordMismatch) {
      return;
    }
    this.tenantSettings.emit({ settings: this.tenantSettingsInfo, next: true });
  }

  confirmPasswordValidation(): void {
    if ((this.tenantSettingsInfo.password === '' || this.tenantSettingsInfo.password === undefined) && (this.tenantSettingsInfo.confirmPassword === '' || this.tenantSettingsInfo.confirmPassword === undefined)) {
      this.isPasswordMismatch = false;
      return;
    }
    if (this.tenantSettingsInfo.password !== this.tenantSettingsInfo.confirmPassword) {
      this.isPasswordMismatch = true;
      return;
    }
    this.isPasswordMismatch = false;
  }
  onCancelSetting(){
    this.buttonSpinner=false;
    this.onCancel.emit(true);

  }

}
