import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { StoreModule } from '@ngrx/store';
import { RdsCompTenantManagementComponent } from './rds-comp-tenant-management.component';
import { RdsLabelModule } from '@libs/rds-label';



export default {
  title: 'Components/Tenant-Management',
  component: RdsCompTenantManagementComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        SharedModule,
        NgxTranslateModule,
        RdsLabelModule,
        RdsDropdownlistModule,
       
        
        StoreModule.forRoot({})
        
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompTenantManagementComponent> = (args: RdsCompTenantManagementComponent) => ({
    props:{
      ...args
  }
  });
  export const Default = Template.bind({});
  Default.args ={
    settingsTenantEditionList:[{isFree: null, value: '', some: 'Not assigned', isSelected: true},
    {isFree: true, value: '1', some: 'Standard', isSelected: false}
    ],
  }
