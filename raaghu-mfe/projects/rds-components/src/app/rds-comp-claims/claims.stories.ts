import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsCompClaimsComponent } from './rds-comp-claims.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsLabelModule } from '@libs/rds-elements';

export default {
  title: 'Components/Claims',
  component: RdsCompClaimsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,RdsButtonModule,RdsCheckboxModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompClaimsComponent> = (args: RdsCompClaimsComponent) => ({
    props:{
        ...args
    },
});

export const Default = Template.bind({});
 
Default.args= {
  ClaimData:{
    claim_ato_e: [
      {
        label: 'Availability',
        checked: false
      },
      {
        label: 'Apiopolis',
        checked: false
      },
      {
        label: 'Apigenix',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Creative',
        checked: false
      },
      {
        label: 'ALT Genix Api',
        checked: false
      },
      {
        label: 'Dev Support Api',
        checked: false
      },
    
     ],
     claim_f_to_o: [
      {
        label: 'Availability',
        checked: false
      },
      {
        label: 'Apiopolis',
        checked: false
      },
      {
        label: 'Apigenix',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Creative',
        checked: false
      },
      {
        label: 'ALT Genix Api',
        checked: false
      },
      {
        label: 'Dev Support Api',
        checked: false
      },
     ],
     claim_p_to_z: [
      {
        label: 'Availability',
        checked: false
      },
      {
        label: 'Apiopolis',
        checked: false
      },
      {
        label: 'Apigenix',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Best Selector',
        checked: false
      },
      {
        label: 'Creative',
        checked: false
      },
      {
        label: 'ALT Genix Api',
        checked: false
      },
      {
        label: 'Dev Support Api',
        checked: false
      },
     ]
  }
 
}