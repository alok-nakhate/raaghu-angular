import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-email-settings',
  templateUrl: './rds-comp-email-settings.component.html',
  styleUrls: ['./rds-comp-email-settings.component.scss']
})
export class RdsCompEmailSettingsComponent implements OnInit {
  @Input () buttonSpinner : boolean = false;
  @Input() public emailSettings: any = { currentEmail: 'niphy.anto@waiin.com', newEmail: '', confirmEmail: '' };
  mismatch: boolean = false;
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { }

  ngOnInit(): void {
  }

  

  compareEmail(): void {
    if (this.emailSettings.confirmEmail !== null && this.emailSettings.confirmEmail !== '' && this.emailSettings.confirmEmail
      && this.emailSettings.newEmail !== null && this.emailSettings.newEmail !== '' && this.emailSettings.newEmail)
      if (this.emailSettings.confirmEmail !== this.emailSettings.newEmail) {
        this.mismatch = true;
      } else {
        this.mismatch = false;
      }
  }
  back(){
    this.buttonSpinner=false;
  }

}
