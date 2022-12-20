import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  RdsAvatarModule, RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule,
  RdsDropdownModule, RdsIconModule, RdsLabelModule, RdsModalModule,
  RdsNavTabModule, RdsOffcanvasModule, RdsSelectListModule
} from '@libs/rds-elements';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsNotificationComponent } from '../rds-comp-notification/rds-comp-notification.component';
import { RdsCompProfileComponent } from '../rds-comp-profile/rds-comp-profile.component';
import { RdsCompNotificationSettingsComponent } from '../rds-comp-notification-settings/rds-comp-notification-settings.component';
import { RdsLinkedAccountsComponent } from '../rds-comp-linked-accounts/rds-comp-linked-accounts.component';
import { RdsCompLoginAttemptsComponent } from '../rds-comp-login-attempts/rds-comp-login-attempts.component';
import { RdsMysettingsComponent } from '../rds-comp-mysettings/rds-comp-mysettings.component';
import { RdsUserDelegationsComponent } from '../rds-comp-user-delegations/rds-comp-user-delegations.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
//  import demodata from '../assets/appconfig.json';

//  export function getRemoteServiceBaseUrl(): any {
//    let URL = demodata.remoteServiceBaseUrl
//    return URL;
//  }

export default {
  title: 'Components/Top Navigation',
  component: RdsTopNavigationComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsTopNavigationComponent, RdsNotificationComponent, RdsCompProfileComponent,
        RdsCompNotificationSettingsComponent, RdsLinkedAccountsComponent, RdsCompLoginAttemptsComponent,
        RdsMysettingsComponent, RdsUserDelegationsComponent, RdsDataTableComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule,
        RdsNavTabModule, RdsDropdownModule, RdsAvatarModule, RouterModule.forRoot([]),
        NgxTranslateModule, RdsDropdownlistModule, RdsIconModule, RdsBadgeModule, RdsCardModule, RdsOffcanvasModule,
        RdsModalModule, RdsLabelModule, RdsSelectListModule, SharedModule, CommonModule,
        RdsDatepickerModule,RdsIconModule,
        RdsCheckboxModule
      ],
      providers: [
        FormBuilder,
        DatePipe,
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        }
      ],
    })
  ]
} as Meta;

const Template: Story<RdsTopNavigationComponent> = (args: RdsTopNavigationComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args={
  selectedMenu:'Dashboard',
  backgroundColor:'rgb(245, 245, 250)',
  navtabItems: [
    { label: 'Manage Linked Accounts', translationKey: 'Manage Linked Accounts', tablink: '#nav-LinkAccount', ariacontrols: 'nav-LinkAccount', Image: 'bi bi-pencil-fill', icon: 'manage_linked', subText: 'Manage accounts linked to your account', subtextTranslationKey: 'Manage accounts linked to your account', showoffcanvas: true },
    { label: 'Manage Authority Delegation', translationKey: 'Manage Authority Delegation', tablink: '#nav-Deligation', ariacontrols: 'nav-Deligation', icon: 'manage_authority', subText: 'Manage authority accounts', subtextTranslationKey: 'Manage authority accounts', showoffcanvas: true },
    { label: 'Login Attempts', translationKey: 'Login Attempts', tablink: '#nav-Attempts', ariacontrols: 'nav-Attempts', icon: 'login_attempts', subText: 'See recent login attempts for your account', subtextTranslationKey: 'See recent login attempts for your account', showoffcanvas: true },
    { label: 'My Settings', translationKey: 'My Settings', tablink: '#nav-Settings', ariacontrols: 'nav-Settings', icon: 'my_settings', subText: 'Change your account settings', subtextTranslationKey: 'Change your account settings', showoffcanvas: true },
    { label: 'Download Collected Data', translationKey: 'Download Collected Data', tablink: '#nav-DownLoad', ariacontrols: 'nav-DownLoad', icon: 'download_data', subText: 'Download data belongs to your account', subtextTranslationKey: 'Download data belongs to your account', showoffcanvas: false },
  ],
  UserName:'Wai Technologies',
  languageItems:[
      {value: "English", some: "English", id: 1}
      ,{value: "French", some: "French", id: 2}
      ,{value: "Mexican", some: "Mexican", id: 3}
      ,{value: "Dutch", some: "Dutch", id: 4}
      ,{value: "Philippines", some: "Philippines", id: 5}
    ]
}