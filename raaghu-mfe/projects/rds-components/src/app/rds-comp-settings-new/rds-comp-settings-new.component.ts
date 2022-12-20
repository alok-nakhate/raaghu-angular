import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'rds-comp-settings-new',
  templateUrl: './rds-comp-settings-new.component.html',
  styleUrls: ['./rds-comp-settings-new.component.scss']
})
export class RdsCompSettingsNewComponent implements OnInit {

  navtabsItems: any = [];
  public settingData: any = {
    emailSettingsData: undefined,
    identityData: undefined,
    themeData: undefined,
    accountData: undefined
  };
  @Input() accountData: any;
  @Input() externalProviders: any = [];
  @Input() emailSettingsData: any;
  @Input() identiyData: any;
  @Input() themeData: any;
  @Input() AuthentiactionList: any = [];
  @Input() StyleList: any = [];
  @Input() WebList: any = [];
  @Input() StatusList: any = [];
  @Input() MenuList: any = [];
  @Input() VersionList: any = [];
  @Output() onDataSaveAccount = new EventEmitter<any>();
  @Output() onDataSaveEmail = new EventEmitter<any>();
  @Output() onDataSaveTheme = new EventEmitter<any>();
  @Output() onDataSaveIdentity = new EventEmitter<any>();


  isReset: boolean = false;
  activePage: number = 0;
  constructor() { }


  ngOnInit(): void {
    this.navtabsItems = [
      {
        label: 'Email Settings',
        tablink: '#email',
        ariacontrols: 'email',
      },
      {
        label: 'Identity Management',
        tablink: '#identity',
        ariacontrols: 'identity',
      },
      {
        label: 'Theme',
        tablink: '#theme',
        ariacontrols: 'theme',
      },
      {
        label: 'Account',
        tablink: '#account',
        ariacontrols: 'account',
      }
    ];

  }
  ngOnChange(): void {
    this.navtabsItems = [
      {
        label: 'Email Settings',
        tablink: '#email',
        ariacontrols: 'email',
      },
      {
        label: 'Identity Management',
        tablink: '#identity',
        ariacontrols: 'identity',
      },
      {
        label: 'Theme',
        tablink: '#theme',
        ariacontrols: 'theme',
      },
      {
        label: 'Account',
        tablink: '#account',
        ariacontrols: 'account',
      }
    ];
  }

  initialize(): void {
    this.navtabsItems = [
      {
        label: 'Email Settings',
        tablink: '#email',
        ariacontrols: 'email',
      },
      {
        label: 'Identity Management',
        tablink: '#identity',
        ariacontrols: 'identity',
      },
      {
        label: 'Theme',
        tablink: '#theme',
        ariacontrols: 'theme',
      },
      {
        label: 'Account',
        tablink: '#account',
        ariacontrols: 'account',
      }
    ];
  }
  onTabClick(index): void {
    this.activePage = index;
  }
  getEmailData(event: any): void {
    this.settingData.emailSettingsData = event
  }
  getIdentityData(event: any): void {
    this.settingData.identityData = event
  }
  getThemeData(event: any): void {
    this.settingData.themeData = event
  }
  getAccountData(event: any): void {
    this.settingData.accountData = event
    console.log(event);

  }

  onSaveAccount(): void {
    this.onDataSaveAccount.emit(this.settingData.accountData)
    this.isReset = true;
    this.activePage = 0;
  }

  onSaveEmail(): void {
    this.onDataSaveEmail.emit(this.settingData.emailSettingsData)
    this.isReset = true;
    this.activePage = 0;
  }
  onSaveIdentity(): void {
    console.log(this.settingData.identityData)
    this.onDataSaveIdentity.emit(this.settingData.identityData)
    this.isReset = true;
    this.activePage = 0;
  }
  onSaveTheme(): void {
    this.onDataSaveTheme.emit(this.settingData.themeData)
    this.isReset = true;
    this.activePage = 0;
  }

}
