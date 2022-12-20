import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCardModule,  RdsCheckboxModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompIdentityManagementNewComponent } from './rds-comp-identity-management-new.component';




export default {
    title: 'Components/Identity Management New',
    component: RdsCompIdentityManagementNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompIdentityManagementNewComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                RdsOffcanvasModule,
                RdsButtonModule,
                RdsNavTabModule,
                RdsInputModule,
                RdsSelectListModule,
                RdsCardModule,
                RdsLabelModule,
                SharedModule,
                RdsCheckboxModule

            ],
            providers: [
                FormBuilder
            ],
        })
    ],
    argTypes: {

    }

} as Meta;

const Template: Story<RdsCompIdentityManagementNewComponent> = (args: RdsCompIdentityManagementNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    identityData: {
      requiredLength: '',
     defaultAddress: '',
     nonAlpha: false,
     uppercaserequired: false,
     numbers: false,
     lowercaserequired: false,
    lockoutDuration: '',
    MaxAttmpts: '',
   uppercase: false,
   lowercase: false,
    newusers: ''

    }

}


