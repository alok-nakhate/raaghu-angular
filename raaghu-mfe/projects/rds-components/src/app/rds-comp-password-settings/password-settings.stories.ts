import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsBenefitModule, RdsButtonModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompPasswordSettingsComponent } from './rds-comp-password-settings.component';
import { RdsCompBenefitComponent } from '../rds-comp-benefit/rds-comp-benefit.component';

export default {
  title: 'Components/Password-Setting',
  component: RdsCompPasswordSettingsComponent,
  decorators: [
    moduleMetadata({
       declarations:[RdsCompBenefitComponent],
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,SharedModule,
        RdsLabelModule,RdsInputModule,RdsBenefitModule,RdsButtonModule
      ],
      providers: [
        FormBuilder
      ],
      
    })
  ]
} as Meta;

const Template: Story<RdsCompPasswordSettingsComponent> = (args: RdsCompPasswordSettingsComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
    display_type: 'With_Label',
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
