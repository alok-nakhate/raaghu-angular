import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsIconModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompLoginAttemptsComponent } from './rds-comp-login-attempts.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';

export default {
  title: 'Components/Login Attempts',
  component: RdsCompLoginAttemptsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompLoginAttemptsComponent, RdsDataTableComponent,
        ],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsDropdownlistModule, RdsDatepickerModule, RdsSelectListModule,BrowserAnimationsModule,RdsIconModule,BsDatepickerModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompLoginAttemptsComponent> = (args: RdsCompLoginAttemptsComponent) => ({
  props:{
    ...args
  }
});
export const Default = Template.bind({});

Default.args={
  listItemsResult:[
    { value: '', some: 'All', isSelected:false,iconFill:false, icon:'',iconWidth:0,iconHeight:0,iconStroke:false,isFree:false,},
  { value: 'Success', some: 'Success', isSelected:false,iconFill:false, icon:'',iconWidth:0,iconHeight:0,iconStroke:false,isFree:false,},
  { value: 'InvalidUserNameOrEmailAddress', some: 'Invalid Username or email Address', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'InvalidPassword', some: 'Invalid Password', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserIsNotActive', some: 'User is Not Active', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'InvalidTenancyName', some: 'Invalid Tenancy name', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'TenantIsNotActive', some: 'Tenant Is Not Active', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserEmailIsNotConfirmed', some: 'User Email Is Not Confirmed', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UnknownExternalLogin', some: 'Unknown External Login', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'LockedOut', some: 'Locked Out', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserPhoneNumberIsNotConfirmed', some: 'User PhoneNumber IsNot Confirmed', isSelected:false, icon:'',iconFill:false,conWidth:0,iconStroke:false,isFree:false,} ],
  
 operationLogs : [
  {
      "IP address":`<div>106.214.19.218</div>`,
      "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
      "client": "admin",
      "serviceName": "UserDelegationAppService",
      "executionDuration": `<div class="text-success">Success</div>`,
      "clientIpAddress": "Firefox",
      "clientName": null,
      "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "executionTime": "12/14/2021, 5:15:24 PM",
      "exception": null
  },
  {
      "IP address":`<div>406.274.19.321</div>`,
      "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
      "client": "admin",
      "serviceName": "LanguageAppService",
      "executionDuration": `<div class="text-success">Success</div>`,
      "clientIpAddress": "Firefox",
      "clientName": null,
      "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "executionTime": "12/14/2021, 5:15:24 PM",
      "exception": null
  },
  {
    "IP address":`<div>543.754.32.987</div>`,
      "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
      "client": "admin",
      "serviceName": "CommonLookupAppService",
      "executionDuration":`<div class="text-success">Success</div>`,
      "clientIpAddress": "Firefox",
      "clientName": null,
      "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "executionTime": "12/14/2021, 5:15:24 PM",
      "exception": null
  },
 
],
operationLogsHeaders: [
{ key: 'IP address', displayName:'IP address', dataType: 'html', sortable: true, filterable: true },
{ key: 'client', displayName:'Client', dataType: 'text', sortable: true, filterable: true },
{ key: 'clientIpAddress', displayName: 'Browser', dataType: 'text', sortable: true, filterable: true},
{ key: 'executionTime', displayName: 'Date & time', dataType: 'html', sortable: true, filterable: true},
{ key: 'executionDuration', displayName: 'Result', dataType: 'html', sortable: true, filterable: true},
]
}
