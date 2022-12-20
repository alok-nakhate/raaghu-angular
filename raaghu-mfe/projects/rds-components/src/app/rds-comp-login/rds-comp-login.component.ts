import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var bootstrap: any;
@Component({
  selector: 'rds-login-comp',
  templateUrl: './rds-comp-login.component.html',
  styleUrls: ['./rds-comp-login.component.scss'],
})
export class RdsLoginComponent implements OnInit, OnChanges {
  @Input() userNameData: any;
  @Input() userPasswordData: any;
  @Input() rememeberMe: boolean;
  @Input() TenantNameData: any;
  @Input() TenancyName: string;
  @Input() TenantName: string;
  @Input() UserName: string = 'Email/Username';
  @Input() Password: string = 'Password';
  buttonLabel: string = 'Login';
  buttonLabelUp: string = 'Signup'
  @Input() buttonColorType: string = 'secondary';
  @Input() buttonColorTypeUp: string = 'light';
  checkboxTitle: string = 'Remember me';
  Modallabel : string = 'Switch to the host';
  // @Output() onRememberMeToggle = new EventEmitter<Event>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSwitchTenant: EventEmitter<any> = new EventEmitter<any>();
  @Output() onShimmerLoad: EventEmitter<any> = new EventEmitter<any>();
  @Input() tenantdisabled: boolean;
  @Input() disabledSwitchTenant: boolean = true;

  @Input() switchTenant: boolean = false;
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Input() buttonSpinner: boolean = false;
  @Input() buttonSpinnerForChangeTenant: boolean = false;
  constructor(private formBuilder: FormBuilder, public translate: TranslateService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onShimmerLoad.emit(false);
  }

  ngOnInit(): void {
    this.onShimmerLoad.emit(false);

  }

  //for getting remebrme value
  onChangeRememberme(event: any) {
    this.rememeberMe = event.detail;
  }

  submit(loginForm: NgForm) {
    this.buttonSpinner = true;
    this.onLogin.emit({
      userEmail: this.userNameData,
      userPassword: this.userPasswordData,
      rememberme: this.rememeberMe,
    })
  }

  ChangeTenant(tenantForm: NgForm) {
    this.onSwitchTenant.emit(this.TenantNameData);
    this.buttonSpinnerForChangeTenant = true;
  }

  onModalClose(tenantForm: NgForm): void {
    this.TenantNameData = '';
    this.switchTenant = false;
    tenantForm.reset();
  }

  switchTenanat(event: any) {
    this.switchTenant = event;
    this.Modallabel = this.translate.instant('Switch to the tenant');
    if (!event) {
      this.TenantNameData = '';
      this.Modallabel = this.translate.instant('Switch to the host');
    }
  }
  back() {
    this.buttonSpinner = false;
  }

  openTenantModal(): void {
    var myModalEl = document.getElementById('ChangeTenant');
    var modal = new bootstrap.Modal(myModalEl)
    modal.show();
    const tenancy: any = JSON.parse(localStorage.getItem('tenantInfo'));
    if (tenancy) {
      this.TenantNameData = tenancy.name;
      if (this.TenantNameData) {
        this.switchTenant = true;
      }
    }

  }
}
