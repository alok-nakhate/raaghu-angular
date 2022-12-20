import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompUserTableComponent } from './rds-comp-user-table.component';

export default {
  title: 'Components/User Table',
  component: RdsCompUserTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        NgxTranslateModule.forRoot(),
        RdsOffcanvasModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompUserTableComponent> = (args: RdsCompUserTableComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args ={
  userTableHeader: [],
  userTableData: [],
  recordsPerpage: 10,
  tableStyle: '',
  listuser: [],
  listcountrycode: []
}
