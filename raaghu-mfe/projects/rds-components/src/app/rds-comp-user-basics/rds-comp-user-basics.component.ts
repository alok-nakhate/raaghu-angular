import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-user-basics',
  templateUrl: './rds-comp-user-basics.component.html',
  styleUrls: ['./rds-comp-user-basics.component.scss']
})
export class RdsCompUserBasicsComponent implements OnInit, OnChanges {
  public editionList: any = [{ name: 'Standard', value: 'Standard' }, { name: 'Basic', value: 'Basic' }, { name: 'Premium', value: 'Premium' }, { name: 'Professional', value: 'Professional' }];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() userInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() userData: any;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean = true;
  public phonePattern = /^((\\+91-?)|0)?[0-9]{10}$/;
  isPasswordMismatch: boolean = false;
  @ViewChild('userCreationForm') userInfoForm: NgForm;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if (!this.userData) {
      this.userData = {};
      this.userData['name'] = '';
      this.userData['userName'] = '';
      this.userData['emailAddress'] = '';
      this.userData['phoneNumber'] = '';
      this.userData['password'] = '';
      this.userData['confirmPass'] = '';

      this.userData['setRandomPassword'] = true;
      this.userData['shouldChangePasswordOnNextLogin'] = true;
      this.userData['isTwoFactorEnabled'] = false;
      this.userData['isActive'] = false;
      this.userData['isLockoutEnabled'] = false;
      this.userData['surname'] = '';
      this.userData['imageUrl'] = '../assets/edit-profile.png';
    }
    // setTimeout(() => {
    if (this.userData && this.userInfoForm) {
      this.userInfoForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.userInfo.emit({ user: this.userData, next: false });
        }
      });
    }

    // }, 100);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.userData || this.userData.id == null || !this.userData.id) {
      if (this.userInfoForm) {
        this.userInfoForm.resetForm();
        this.userData = {};
        this.userData['name'] = '';
        this.userData['userName'] = '';
        this.userData['emailAddress'] = '';
        this.userData['phoneNumber'] = '';
        this.userData['password'] = '';
        this.userData['confirmPass'] = '';
        this.userData['setRandomPassword'] = true;
        this.userData['shouldChangePasswordOnNextLogin'] = true;
        this.userData['isTwoFactorEnabled'] = false;
        this.userData['isActive'] = false;
        this.userData['isLockoutEnabled'] = false;
        this.userData['surname'] = '';
        this.userData['imageUrl'] = '../assets/edit-profile.png'
      }
     
    }
    else {
      this.userData['imageUrl'] = '../assets/edit-profile.png'
    }
  }

  next(userCreationForm: NgForm): void {
    userCreationForm.form.markAllAsTouched();
    this.buttonSpinner = true;
    if (!userCreationForm || userCreationForm.invalid) {
      return;
    }
    this.userInfo.emit({ user: this.userData, next: true });

  }
  getCheckboxValue(event: any): void {
    this.userData.unlimitedSubscription = event;
  }

  onEditionSelect(event: any): void {
    this.userData.edition = event.item.value;
  }
  getImage(ev: any) {
    let FileImage = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.userData.imageUrl = event.target.result;
    }
    reader.readAsDataURL(FileImage);
  }
  confirmPassword() {
    if (this.userData.password && this.userData.confirmPass) {
      if (this.userData.password === this.userData.confirmPass) {
        this.isPasswordMismatch = false;
      } else {
        this.isPasswordMismatch = true;
      }
    } else {
      this.isPasswordMismatch = false;
    }
  }
  onCancelUser() {
    this.buttonSpinner = false;
    this.onCancel.emit(true);

  }
}
