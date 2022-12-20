import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsLabelModule, RdsModalModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompNotificationSettingsComponent } from './rds-comp-notification-settings.component';

export default {
    title: 'Components/Notification Settings',
    component: RdsCompNotificationSettingsComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule, RdsButtonModule, RdsCheckboxModule, RdsLabelModule, RdsModalModule, NgxTranslateModule
            ],
            providers: [
                FormBuilder
            ],
        })
    ]
} as Meta;

const Template: Story<RdsCompNotificationSettingsComponent> = (args: RdsCompNotificationSettingsComponent) => ({
    props:{
      ...args
  }
  });
export const Default = Template.bind({});
Default.args = {
    show: true,
    backdrop:false,
    notificationTypes: [
        {
            "displayName": "On a new user registered to the application.",
            "description": null,
            "name": "App.NewUserRegistered",
            "isSubscribed": false
        },
        {
            "displayName": "On a new tenant registered to the application.",
            "description": null,
            "name": "App.NewTenantRegistered",
            "isSubscribed": true
        }
    ]
}
