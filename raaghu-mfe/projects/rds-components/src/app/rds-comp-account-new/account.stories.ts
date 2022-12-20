import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsButtonModule, RdsCardModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompAccountNewComponent } from './rds-comp-account-new.component';





export default {
    title: 'Components/Account New',
    component: RdsCompAccountNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompAccountNewComponent],
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

const Template: Story<RdsCompAccountNewComponent> = (args: RdsCompAccountNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    AuthentiactionList:[

        { value: 'default', some: 'default', id: 'twofactorauthentication', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'isFree', some: 'isFree', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
      ],
      VersionList: [
        { value: 'isFree', some: 'isFree', id: 'VersionList', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
        { value: 'default', some: 'default', id: 1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'isFree', some: 'isFree', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
      ],
}


