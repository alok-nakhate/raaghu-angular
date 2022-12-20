import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsDatepickerComponent } from './rds-datepicker.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Elements/Datepicker',
  component: RdsDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [BsDatepickerModule.forRoot(), BrowserAnimationsModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
    TitleType: {
      options: ['Top', 'Bottom', 'Floating'],
      control: { type: 'select' }
    },
    datePickerType: { table: { disable: true, }, },
  },
} as Meta;

const Template1: Story<RdsDatepickerComponent> = (args: RdsDatepickerComponent) => ({
  props: args,
});
export const advanced = Template1.bind({});
advanced.parameters = { controls: { include: ['datePickerType', 'label', 'placeholder'] } };

advanced.args = {
  label: 'Date Range',
  datePickerType: 'advanced',
  placeholder: 'Selected Date',
}

const Template: Story<RdsDatepickerComponent> = (args: RdsDatepickerComponent) => ({
  props: args,
  template: `<div class="d-flex w-100 justify-content-center m-5"><div class="w-50 p-5"><rds-datepicker [datePickerType]="datePickerType"
  [datePickerConfig]="datePickerConfig" [placeholder]="placeholder" [datesDisabled]="datesDisabled"
  [dateTooltipTexts]="dateTooltipTexts" [maxDate]="maxDate" [placement]="placement" [label]="label" [daysDisabled]="daysDisabled"
  [TitleType]="TitleType"></rds-datepicker></div></div>`,
});
export const Default = Template.bind({});
Default.parameters = { controls: { include: ['datePickerType', 'datePickerConfig', 'placeholder', 'datesDisabled', 'dateTooltipTexts', 'maxDate', 'placement', 'label', 'TitleType','daysDisabled'] } };

Default.args = {
  datePickerType: 'basic',
  datePickerConfig: { dateInputFormat: 'MM/DD/YYYY', showWeekNumbers: false, isAnimated: true },
  placeholder: 'Date',
  datesDisabled: [new Date()],
  dateTooltipTexts: [{ date: new Date(), tooltipText: 'todays Date' }],
  daysDisabled: [],
  maxDate: new Date(new Date().setDate(27)),
  placement: 'bottom',
  label: 'Select Date',
  TitleType: 'Top'
}

