import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAddressDetailComponent, RdsBenefitModule, RdsButtonComponent, RdsDropdownlistModule, RdsDropdownModule, RdsIconModule, RdsInputComponent, RdsLabelModule, RdsSearchInputModule } from '@libs/rds-elements';
import { RdsCompPropertiesComponent } from './rds-comp-properties.component';
import { CommonModule } from '@angular/common';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { NgxTranslateModule } from '@libs/shared';
 
export default {
    title: 'Components/Properties',
    component: RdsCompPropertiesComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RdsDataTableComponent,
                RdsInputComponent,
                RdsButtonComponent
            ],
            imports: [
                RdsBenefitModule,
                RdsIconModule,
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsSearchInputModule,
                RdsDropdownlistModule,
                NgxTranslateModule,
                
                
            ],
            
        })
    ]
} as Meta;

const Template: Story<RdsCompPropertiesComponent> = (args: RdsCompPropertiesComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
        PropertyTableData: [
            { "cases": 10, "member": "<div class=\"d-flex align-items-center\"><div> <img class=\"prop-img\" src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
            , { "cases": 18, "member": "<div class=\"d-flex align-items-center\"><div> <img class=\"prop-img\" src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
            , { "cases": 7, "member": "<div class=\"d-flex align-items-center\"><div> <img class=\"prop-img\" src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
            , { "cases": 14, "member": "<div class=\"d-flex align-items-center\"><div> <img class=\"prop-img\" src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
            // , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" },
            // { "cases": 10, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
            // , { "cases": 18, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
            // , { "cases": 7, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
            // , { "cases": 14, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
            // , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" }
          
        ],
        PropertyTableHeader: [
            { displayName: 'Member', key: 'member', dataType: 'html' },
            { displayName: 'Cases', key: 'cases', dataType: 'text' },
            { displayName: 'Active', key: 'active', dataType: 'text' },
            { displayName: 'Closed', key: 'closed', dataType: 'text' },
            { displayName: 'Rate', key: 'rate', dataType: 'html' }
        ]
};
