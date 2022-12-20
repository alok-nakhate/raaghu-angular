import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsIconModule } from '@libs/rds-elements';
import { RdsNotificationComponent } from './rds-comp-notification.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Notification',
  component: RdsNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, RdsBadgeModule, NgxTranslateModule, RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsNotificationComponent> = (args: RdsNotificationComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args={
  unreadCount:'12',
  backgroundColor:'',
  borderRadious:'',
  Paddig:'',
  width:'',
  notifications:[
    {status: 'success', title:'Tenant added' , 
      urlTitle: 'hello',
      time: 'a month ago',
      state: 1,
       userNotificationId: 1,
      selected: false},
      {status: 'error', title:'Tenant deleted' , 
      urlTitle: 'hello',
      time: 'a month ago',
      state: 1,
       userNotificationId: 1,
      selected: false},
      {status: 'warn', title:'Tenant added' , 
      urlTitle: 'hello',
      time: 'a month ago',
      state: 1,
       userNotificationId: 1,
      selected: false},
      {status: 'info', title:'Tenant deleted' , 
      urlTitle: 'hello',
      time: 'a month ago',
      state: 1,
       userNotificationId: 1,
      selected: false}

  ]
}