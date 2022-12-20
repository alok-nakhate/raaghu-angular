import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAddressDetailComponent, RdsBenefitModule, RdsDropdownlistModule, RdsDropdownModule, RdsIconModule, RdsLabelModule, RdsSearchInputModule } from '@libs/rds-elements';
import { RdsCompMemberActivityComponent } from './rds-comp-member-activity.component';
import { CommonModule } from '@angular/common';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { NgxTranslateModule } from '@libs/shared';
 
export default {
    title: 'Components/Member Activity',
    component: RdsCompMemberActivityComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RdsDataTableComponent,
                
            ],
            imports: [
                RdsBenefitModule,
                RdsIconModule,
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsSearchInputModule,
                RdsDropdownlistModule,
                NgxTranslateModule
            ],
            
        })
    ]
} as Meta;

const Template: Story<RdsCompMemberActivityComponent> = (args: RdsCompMemberActivityComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
      inputTypeList: [
        { value: 'Software Developer', some: 'Software Developer', status: 'Software Developer', isSelected: false },
        { value: 'Sales Executive', some: 'Sales Executive', status: 'Sales Executive', isSelected: false },
        { value: 'Senior Manager', some: 'Senior Manager', status: 'Senior Manager', isSelected: false },
        { value: 'Manager', some: 'Manager', status: 'Manager', isSelected: false },
        { value: 'Associate', some: 'Associate', status: 'Associate', isSelected: false }      
        ],
        memberActivityTableData: [
            { "cases": 10, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
            , { "cases": 18, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
            , { "cases": 7, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
            , { "cases": 14, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
            , { "cases": 23, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" },
            { "cases": 10, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
            , { "cases": 18, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
            , { "cases": 7, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
            , { "cases": 14, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
            , { "cases": 23, "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/profile-picture-circle.svg width=\"40px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" }
          
        ],
        memberActivityTableHeader: [
            { displayName: 'Member', key: 'member', dataType: 'html' },
            { displayName: 'Cases', key: 'cases', dataType: 'text' },
            { displayName: 'Active', key: 'active', dataType: 'text' },
            { displayName: 'Closed', key: 'closed', dataType: 'text' },
            { displayName: 'Rate', key: 'rate', dataType: 'html' }
        ]
};
