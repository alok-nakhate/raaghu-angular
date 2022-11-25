import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  RdsButtonModule,
  RdsCheckboxModule,
  RdsDatepickerModule,
  RdsFabMenuModule,
  RdsIconModule,
  RdsInputModule,
  RdsModalModule,
  RdsNavTabModule,
  RdsOffcanvasModule,
  RdsPaginationModule,
  RdsPopoverModule,
  RdsSelectListModule,
} from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list.component';
import { StoreModule } from '@ngrx/store';
import { RdsCompEditLanguageTextComponent } from '../rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsLabelModule } from '@libs/rds-label';
export default {
  title: 'Components/language-text-list',
  component: RdsCompLanguageTextListComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompEditLanguageTextComponent, RdsDataTableComponent],
      imports: [
        RdsOffcanvasModule,
        RdsButtonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RdsFabMenuModule,
        NgxTranslateModule,
        RdsInputModule,
        StoreModule.forRoot({}),
        RdsSelectListModule,
        RdsLabelModule
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;
const Template: Story<RdsCompLanguageTextListComponent> = (
  args: RdsCompLanguageTextListComponent
) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});

Default.args = {
  languagetextTableHeader: [
    {
      displayName: 'Language Name',
      key: 'languagename',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
    {
      displayName: 'Code',
      key: 'countryCode',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Is enabled',
      key: 'statusTemplate',
      dataType: 'icon',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Creation Time',
      key: 'creationTime',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ],
  languagetextTableData: [
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'true',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'true',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'true',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'false',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'false',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'false',
      creationTime: '12-10-1992',
    },
    {
      languagename: 'India',
      countryCode: 'IND',
      statusTemplate: 'true',
      creationTime: '12-10-1992',
    },
  ],

  listTargetValue: [
    { value: 'TargetValue1', displayText: 'Target Value 1' },
    { value: 'TargetValue2', displayText: 'Target Value 2' },
  ],

  listsource: [
    { value: 'source1', displayText: 'Source 1' },
    { value: 'source2', displayText: 'Source 2' },
  ],
  listbaseLanguage: [
    { value: 'baseLanguage1', displayText: 'Base Language 1' },
    { value: 'baseLanguage2', displayText: 'Base Language 2' },
  ],
  listTargetCulturename: [
    { value: 'TargetCulturename1', displayText: 'Target Culturename 1' },
    { value: 'TargetCulturename2', displayText: 'Target Culturename 2' },
  ],
};
