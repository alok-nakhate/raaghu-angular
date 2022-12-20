import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'rds-mysettings',
  templateUrl: './rds-comp-mysettings.component.html',
  styleUrls: ['./rds-comp-mysettings.component.scss']
})
export class RdsMysettingsComponent implements OnInit, OnChanges {

  @Input() ProfileData: any = {
    ProfileName: 'Wai Technologies',
    emailAddress: 'contact@waiin.com',
    userName: 'admin',
    CurrentPassword: '',
    NewPassword: '',
    ConFNewPassword: '',
    name: ''
  }
  @Input() buttonSpinner: boolean = false;
  @Output() onProfileClose = new EventEmitter<any>();
  @Output() onProfileSave = new EventEmitter<any>();
  firstcontent: boolean = false;
  invalidEmail: boolean = false;
  showEmailRequiredMessage: boolean = false;
  showEmailValidityMessage: boolean = false;
  navtabcontentClass: string = "d-none";
  isPasswordMismatch: boolean = false;
  public Profileform: FormGroup;
  constructor(private formBuilder: FormBuilder, public translate: TranslateService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ProfileData) {
    }
  }

  ngOnInit(): void {
    this.Profileform = this.formBuilder.group({
      ProfileNameData: ['', Validators.required],
      EmailAddressData: ['', Validators.required],
      UserNameData: ['', Validators.required],
      CurrentPasswordData: [],
      NewPasswordData: [],
      ConFNewPasswordData: []
    });

  }

  get f() {
    return this.Profileform.controls;
  }
  public get NavtabcontentClass(): string {
    var classList = '';
    if (this.firstcontent === false) {
      classList = 'd-none';
    }
    return classList;

  }
  confirmPassword() {
    if (this.ProfileData.NewPassword === this.ProfileData.ConFNewPassword) {
      this.isPasswordMismatch = false;

    } else {
      this.isPasswordMismatch = true
    }
  }
  emailValidator(data: string) {
    var EMAIL_REGEXP =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(data)) {
      this.invalidEmail = true;


    }
    else this.invalidEmail = false;
  }


  saveProfile(changePasswordForm: NgForm) {
    changePasswordForm.form.markAllAsTouched();

    if (!changePasswordForm.valid || this.isPasswordMismatch) {
      return;
    }
    this.buttonSpinner = true;
    this.onProfileSave.emit({ currentPassword: this.ProfileData.CurrentPassword, newPassword: this.ProfileData.NewPassword });
    setTimeout(() => {
      this.buttonSpinner = false;
    }, 3000);
  }
  onCancel(): void {
    this.onProfileClose.emit();
    this.buttonSpinner = false;
  }
}
