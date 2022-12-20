import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule,RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompInformationComponent } from './rds-comp-information.component';
import { RdsLabelModule } from '@libs/rds-label';



export default {
  title: 'Components/Information',
  component: RdsCompInformationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RdsButtonModule,
        RdsSelectListModule,
        RdsInputModule,
        SharedModule,
        NgxTranslateModule,
        FormsModule,
        RdsDropdownlistModule,
        RdsLabelModule
        
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompInformationComponent> = (args: RdsCompInformationComponent) => ({
    props:{
      ...args
  }
  });
  // const Template: Story<RdsCompEditionComponent> = (args: RdsCompEditionComponent) => ({});

  // export const basic = Template.bind({});
  export const Default = Template.bind({});
  Default.args ={
    dynamicPropertiesData: {propertyName:'string', displayName: 'string', inputType: 'string'},
    inputTypeList:[
      {value: "Input Type 1", some: "Input Type 1", isSelected: false,}
      ,{value: "Input Type 2", some: "Input Type 2", isSelected: false,}
      ,{value: "Input Type 3", some: "Input Type 3", isSelected: false,}
      ,{value: "Input Type 4", some: "Input Type 4", isSelected: false,}
        ]
  }
