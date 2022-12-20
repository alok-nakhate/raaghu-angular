import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-password-settings',
  templateUrl: './rds-comp-password-settings.component.html',
  styleUrls: ['./rds-comp-password-settings.component.scss']
})
export class RdsCompPasswordSettingsComponent implements OnInit {
  @Input() public passwordSettings: any = { currentPassword: '', newPassword: '', confirmPassword: '' };
  mismatch: boolean = false;
  @Input() loggedinInfo: any = [{
    display_type: "With_Label",
    colSize: 12,
    items: [
      {
        id: 1,
        display_type: "With_Label",
        status:'Active',
        icon: 'computer',
        iconHeight: "18px",
        iconWidth: "18px",
        title: '2022 MacBook Pro 14-inch',
        description: "London, United Kingdom 24 Feb at 2:30am"
      },
      {
        id: 2,
        display_type: "With_Label",
        icon: 'computer',
        iconHeight: "18px",
        iconWidth: "18px",
        title: '2022 MacBook Pro 14-inch',
        description: "London, United Kingdom 24 Feb at 2:30am"
      }
    ]
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  comparePassword(): void {
    if (this.passwordSettings.confirmPassword !== null && this.passwordSettings.confirmPassword !== '' && this.passwordSettings.confirmPassword
      && this.passwordSettings.newPassword !== null && this.passwordSettings.newPassword !== '' && this.passwordSettings.newPassword)
      if (this.passwordSettings.confirmPassword !== this.passwordSettings.newPassword) {
        this.mismatch = true;
      } else {
        this.mismatch = false;
      }
  }

}
