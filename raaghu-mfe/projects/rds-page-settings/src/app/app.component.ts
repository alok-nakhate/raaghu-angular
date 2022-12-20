
import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertService, ComponentLoaderOptions, SharedService } from '@libs/shared';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { transition, trigger, query, style, animate, } from '@angular/animations';
import { getAccountCaptchaSettings, getAccountGeneralSettings, getAccountTwoFactorSettings, getEmailSettings, getExternalProviderSettings, getIdentityManagementSettings, getThemeSettings, saveAccountCaptchaSettings, saveAccountGeneralSettings, saveAccountTwoFactorSettings, saveEmailSettings, saveExternalProviderSettings, saveIdentityManagementSettings, saveThemeSettings } from 'projects/libs/state-management/src/lib/state/settings/settings.actions';
import { selectCaptchaSettings, selectEmailSettings, selectexternalproviderSettings, selectgeneralSettings, selectIdentityManagementSettings, selectThemeSettings, selectTwoFactorSettings } from 'projects/libs/state-management/src/lib/state/settings/settings.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('1s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  accountApiCall:boolean=false;
  errorShowed:boolean=false;
  currentAlerts: any = [];
  editShimmer: boolean = false;
  public accountData: any = {}
  public themeData: any = {}
  public emailSettingData: any = {}
  public identityData: any = {}
  public settingData: any = {
    emailSettingsData: undefined,
    identityData: undefined,
    themeData: undefined,
    accountData: undefined

  };
  countError:number=0;
  emailSettingsInfo: any = [];
  accountInfo: any = [];
  themeInfo: any = [];
  externalProviders: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }

  @Input() rdsSettingData: any = [];
  AuthentiactionList: any = [
    { value: 0, some: 'Optional', id: 0, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
    { value: 1, some: 'Disable', id: 1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
    { value: 2, some: 'Forced', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },

  ];
  @Input() listItems1 = [
    { value: 'Save All', some: 'value', key: 'saveall', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Output() onDataSave = new EventEmitter<any>();

  activePage: number = 0;
  navtabsItems: any = [
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

  //  public AuthentiactionList=[
  //   { isFree: true, value: '1', displayText: 'Value 1', isSelected: false },
  //  { isFree: false, value: '2', displayText: 'Value 2', isSelected: false },
  //  ];

  public VersionList = [
    { value: 2, some: 2, id: 1 },
    { value: 3, some: 3, id: 2 },
  ];

  StyleList: any = [
    { value: 0, some: 'Style 1', id: 1, icon: '' },
    { value: 1, some: 'Style 2', id: 2, icon: '' },
    { value: 2, some: 'Style 3', id: 3, icon: '' },
    { value: 3, some: 'Style 4', id: 3, icon: '' },
    { value: 4, some: 'Style 5', id: 3, icon: '' },
    { value: 5, some: 'Style 6', id: 3, icon: '' },
  ];
  WebList: any = [
    { value: 0, some: 'Style 1', id: 1, icon: '' },
    { value: 1, some: 'Style 2', id: 2, icon: '' },
    { value: 2, some: 'Style 3', id: 3, icon: '' },
    { value: 3, some: 'Style 4', id: 4, icon: '' },
    { value: 4, some: 'Style 5', id: 5, icon: '' },
    { value: 5, some: 'Style 6', id: 6, icon: '' },
  ];
  MenuList: any = [
    { value: 0, some: 'Left', id: 1, icon: '' },
    { value: 1, some: 'Top', id: 2, icon: '' },

  ];
  StatusList: any = [
    { value: 0, some: 'Always opened', id: 1, icon: '' },
    { value: 1, some: 'Open on hover', id: 2, icon: '' },

  ];



  settingsTenantEditionList: any = [];


  identitymanagementInfo: any = [];


  constructor(private injector: Injector,
    private store: Store,
    private alertService: AlertService,
    private sharedService: SharedService,
    public translate: TranslateService) {

  }

  rdsCompSettingsNewMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompSettingsNew'
  };


  ngOnInit(): void {
    this.rdsCompSettingsNewMfeConfig = {
      name: 'RdsCompSettingsNew',
      input: {
        externalProviders: this.externalProviders,
        AuthentiactionList: this.AuthentiactionList,
        VersionList: this.VersionList,
        StyleList: this.StyleList,
        WebList: this.WebList,
        MenuList: this.MenuList,
        StatusList: this.StatusList

      },
      output: {
        onDataSaveEmail: (emailData: any) => {
          const data: any = {
            defaultFromAddress: emailData.defaultAddress,
            defaultFromDisplayName: emailData.defaultDisplayName,
            smtpEnableSsl: emailData.ssl,
            smtpHost: emailData.host,
            smtpPort: emailData.port,
            smtpUseDefaultCredentials: emailData.defaultcredentials,
            smtpDomain: emailData.smtpdomain,
            smtpUserName: emailData.smtpusername,
            smtpPassword: emailData.smtpPassword

          }
          this.store.dispatch(saveEmailSettings(data));
        },
        onDataSaveIdentity: (identitydata: any) => {
          const data: any = {

            password: {
              requiredLength: identitydata.requiredlength,
              requiredUniqueChars: identitydata.splChar,
              requireNonAlphanumeric: identitydata.nonAlpha,
              requireLowercase: identitydata.lowercaserequired,
              requireUppercase: identitydata.uppercaserequired,
              requireDigit: identitydata.numbers
            },
            lockout: {
              allowedForNewUsers: identitydata.newusers,
              lockoutDuration: identitydata.lockoutDuration,
              maxFailedAccessAttempts: identitydata.MaxAttmpts
            },
            signIn: {
              requireConfirmedEmail: identitydata.confirmEmail,
              enablePhoneNumberConfirmation: identitydata.phoneNumber,
              requireConfirmedPhoneNumber: identitydata.confirmPhoneNumber
            },
            user: {
              isUserNameUpdateEnabled: identitydata.changeUserName,
              isEmailUpdateEnabled: identitydata.changeEmail
            }

          }

          this.store.dispatch(saveIdentityManagementSettings(data))
        },
        onDataSaveTheme: (themeData: any) => {
          const data: any = {
            style: themeData.styleId,
            publicLayoutStyle: themeData.webStyleId,
            menuPlacement: themeData.placementId,
            menuStatus: themeData.statusId
          }
          this.store.dispatch(saveThemeSettings(data))
        },
        onDataSaveAccount: (accountData: any) => {
          const data: any = {
            usersCanChange: accountData.allowUser,
            isRememberBrowserEnabled: accountData.browser,
            twoFactorBehaviour: accountData.twofactorauthenticationId,

          };
          this.store.dispatch(saveAccountTwoFactorSettings(data));
          const _data: any = {
            isSelfRegistrationEnabled: accountData.registration,
            enableLocalLogin: accountData.authentication
          }
          this.store.dispatch(saveAccountGeneralSettings(_data))
          this.accountApiCall=true;
          const captchaData: any = {
            score: accountData.score,
            siteKey: accountData.site,
            siteSecret: accountData.secret,
            useCaptchaOnLogin: accountData.imagacaptcha,
            useCaptchaOnRegistration: accountData.securityauthentication,
            verifyBaseUrl: accountData.baseUrl,
            version: accountData.versionId

          }
          this.store.dispatch(saveAccountCaptchaSettings(captchaData))
          if (accountData.externalProviders) {
            this.store.dispatch(saveExternalProviderSettings(accountData.externalProviders))
          }
        }

      }
    };


    this.store.dispatch(getAccountTwoFactorSettings());
    this.store.select(selectTwoFactorSettings).subscribe((res: any) => {
      if (res && res.twoFactorSettings) {
        const twoFactorSettings: any = res.twoFactorSettings;
        const twoFactor: any = this.AuthentiactionList.find((x: any) => x.value == twoFactorSettings.twoFactorBehaviour);
        if (twoFactor) {
          this.accountData['twofactorauthentication'] = twoFactor.some;
        }
        this.accountData['allowUser'] = twoFactorSettings.usersCanChange;
        this.accountData['browser'] = twoFactorSettings.isRememberBrowserEnabled;
        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.accountData = this.accountData;
        this.rdsCompSettingsNewMfeConfig = rdsCompSettingsNewMfeConfig
      }
    })
    this.store.dispatch(getAccountGeneralSettings());
    this.store.select(selectgeneralSettings).subscribe((res: any) => {
      if (res) {
        const passwordSettings: any = res;
        this.accountData['registration'] = passwordSettings.isSelfRegistrationEnabled;
        this.accountData['authentication'] = passwordSettings.enableLocalLogin
      }
    })
    this.store.dispatch(getAccountCaptchaSettings());
    this.store.select(selectCaptchaSettings).subscribe((res: any) => {
      if (res) {
        const captchaSettings: any = res;
        const captcha: any = this.VersionList.find((x: any) => x.value == captchaSettings.version);
        if (captcha) {
          this.accountData['version'] = captcha.some;
        }
        this.accountData['score'] = captchaSettings.score,
          this.accountData['secret'] = captchaSettings.siteSecret,
          this.accountData['site'] = captchaSettings.siteKey,
          this.accountData['imagacaptcha'] = captchaSettings.useCaptchaOnLogin,
          this.accountData['securityauthentication'] = captchaSettings.useCaptchaOnRegistration,
          this.accountData['baseUrl'] = captchaSettings.verifyBaseUrl

        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.accountData = this.accountData;
        this.rdsCompSettingsNewMfeConfig = rdsCompSettingsNewMfeConfig
      }
    })
    this.store.dispatch(getEmailSettings());
    this.store.select(selectEmailSettings).subscribe((res: any) => {
      if (res) {
        // const emaildata: any = res.emailSettings;
        this.emailSettingData['defaultDisplayName'] = res.defaultFromDisplayName;
        this.emailSettingData['defaultAddress'] = res.defaultFromAddress;
        this.emailSettingData['host'] = res.smtpHost;
        this.emailSettingData['port'] = res.smtpPort
        this.emailSettingData['ssl'] = res.smtpEnableSsl
        this.emailSettingData['defaultcredentials'] = res.smtpUseDefaultCredentials

        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.emailSettingsData = this.emailSettingData;
        this.rdsCompSettingsNewMfeConfig = rdsCompSettingsNewMfeConfig

      }
    })

    this.store.dispatch(getIdentityManagementSettings());
    this.store.select(selectIdentityManagementSettings).subscribe((res: any) => {
      if (res) {
        this.identityData = {};
        this.identityData['numbers'] = res.password.requireDigit;
        this.identityData['lowercaserequired'] = res.password.requireLowercase;
        this.identityData['nonAlpha'] = res.password.requireNonAlphanumeric;
        this.identityData['uppercaserequired'] = res.password.requireUppercase;
        this.identityData['requiredlength'] = res.password.requiredLength;
        this.identityData['splChar'] = res.password.requiredUniqueChars;
        this.identityData['phoneNumber'] = res.signIn.enablePhoneNumberConfirmation;
        this.identityData['confirmEmail'] = res.signIn.requireConfirmedEmail;
        this.identityData['confirmPhoneNumber'] = res.signIn.requireConfirmedPhoneNumber;
        this.identityData['newusers'] = res.lockout.allowedForNewUsers;
        this.identityData['lockoutDuration'] = res.lockout.lockoutDuration;
        this.identityData['MaxAttmpts'] = res.lockout.maxFailedAccessAttempts;
        this.identityData['changeEmail'] = res.user.isEmailUpdateEnabled;
        this.identityData['changeUserName'] = res.user.isUserNameUpdateEnabled;

        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.identiyData = this.identityData;
        this.rdsCompSettingsNewMfeConfig = rdsCompSettingsNewMfeConfig
      }
    })

    this.store.dispatch(getThemeSettings());
    this.store.select(selectThemeSettings).subscribe((res: any) => {
      if (res && res.themeSettings) {
        const themeSettings: any = res.themeSettings;
        const themeStyle: any = this.StyleList.find((x: any) => x.value == themeSettings.style);
        if (themeStyle) {
          this.themeData['style'] = themeStyle.some;
        }

        const themeWebStyle: any = this.WebList.find((x: any) => x.value == themeSettings.publicLayoutStyle);
        if (themeWebStyle) {
          this.themeData['webstyle'] = themeWebStyle.some
        }

        const themePlacementStyle: any = this.MenuList.find((x: any) => x.value == themeSettings.menuPlacement);
        if (themePlacementStyle) {
          this.themeData['placement'] = themePlacementStyle.some
        }

        const themeStatus: any = this.StatusList.find((x: any) => x.value == themeSettings.menuStatus);
        if (themeStatus) {
          this.themeData['status'] = themeStatus.some
        }
        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.themeData = this.themeData;
        this.rdsCompSettingsNewMfeConfig = rdsCompSettingsNewMfeConfig
      }
    })
    this.store.dispatch(getExternalProviderSettings());
    this.store.select(selectexternalproviderSettings).subscribe((res: any) => {
      if (res) {
        this.externalProviders = res.settings;
        const rdsCompSettingsNewMfeConfig = this.rdsCompSettingsNewMfeConfig;
        rdsCompSettingsNewMfeConfig.input.externalProviders = [...this.externalProviders];
        
      }
    })
    
  }


}