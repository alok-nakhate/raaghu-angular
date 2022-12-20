import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsCompCalendarComponent } from './rds-comp-calendar.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import {
  adapterFactory,
  CalendarDayModule,
  CalendarModule,
  CalendarMonthModule,
  CalendarWeekModule,
  DateAdapter,
  RdsButtonModule,
  RdsColorPickerModule,
  RdsDatepickerModule,
  RdsIconModule,
  RdsInputModule,
  RdsOffcanvasModule,
  RdsSelectListModule,
} from '@libs/rds-elements';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Calender',
  component: RdsCompCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        NgxTranslateModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory,
        }),
        SharedModule,
        CalendarWeekModule,
        CalendarDayModule,
        CalendarMonthModule,
        RdsButtonModule,
        RdsIconModule,
        RdsSelectListModule,
        RdsOffcanvasModule,
        RdsInputModule,
        RdsDatepickerModule,
        RdsColorPickerModule,
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<RdsCompCalendarComponent> = (
  args: RdsCompCalendarComponent
) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  colors: {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  },
};
