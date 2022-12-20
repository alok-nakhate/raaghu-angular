import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsButtonModule, RdsCardModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompThemeNewComponent } from './rds-comp-theme-new.component';




export default {
    title: 'Components/Theme New',
    component: RdsCompThemeNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompThemeNewComponent],
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

const Template: Story<RdsCompThemeNewComponent> = (args: RdsCompThemeNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    StyleList: [
        { value: 'Style 1', some: 'Style 1', id: 1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Style 2', some: 'Style 2', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Style 3', some: 'Style 3', id: 3, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },   
      ],
    WebList: [
        { value: 'Public 1', some: 'Public 1', id:1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Public 2', some: 'Public 2', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Public 3', some: 'Public 3', id: 3, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
      ],
    MenuList: [
        { value: 'Placement 1', some: 'Placement 1', id:1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Placement 2', some: 'Placement 2', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Placement 3', some: 'Placement 3', id: 3, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
      ],
    StatusList:[
        { value: 'Placement 1', some: 'Placement 1', id: 1, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Placement 2', some: 'Placement 2', id: 2, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
        { value: 'Placement 3', some: 'Placement 3', id: 3, icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },  
      ],

    }
