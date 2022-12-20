import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsForgotPasswordComponent } from './rds-comp-forgot-password.component';
import { RdsButtonModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Forgot Password',
  component: RdsForgotPasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsInputModule, NgxTranslateModule, RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsForgotPasswordComponent> = (args: RdsForgotPasswordComponent) => ({});

export const Default = Template.bind({});
Default.args={
  mailID:'',
  buttonColorType:'primary'
}
