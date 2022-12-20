import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsDropdownlistModule, RdsDropdownModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsOffcanvasModule, RdsPaginationModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { AppComponent as ClaimTypeComponent } from './app.component';
import { RdsCompNewClaimTypeComponent } from 'projects/rds-components/src/app/rds-comp-new-claim-type/rds-comp-new-claim-type.component';
import { CommonModule } from '@angular/common';


export default {
    title: 'Pages/Claim Types',
    component: ClaimTypeComponent,
    decorators: [
        moduleMetadata({
            declarations: [ClaimTypeComponent, RdsCompNewClaimTypeComponent, RdsDataTableComponent, RdsCompAlertComponent],
            imports: [
                FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule, RdsDropdownModule,
                SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, CommonModule, RdsDropdownlistModule
            ],
            providers: [
                FormBuilder
            ],
        })
    ]
} as Meta;
const Template: Story<ClaimTypeComponent> = (args: ClaimTypeComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});

Default.args = {
    ClaimtypeTableHeader: [
        { displayName: 'Name', key: 'name', dataType: 'text', dataLength: 30, sortable: true, required: true },
        { displayName: 'Value Type', key: 'valueType', dataType: 'number', dataLength: 30, required: true, sortable: true },
        { displayName: 'Description', key: 'description', dataType: 'text', dataLength: 30, required: true, sortable: true },
        { displayName: 'Regex', key: 'regex', dataType: 'text', dataLength: 30, required: true, sortable: true },
        { displayName: 'Required', key: 'required', dataType: 'text', dataLength: 30, required: true, sortable: true }
    ],
    isAnimation: true
}
