import { forwardRef, ViewEncapsulation } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerViewMode, DatepickerDateTooltipText } from 'ngx-bootstrap/datepicker';

export interface selectedRange {
  startDate?: any,
  endDate?: any
}

@Component({
  selector: 'rds-datepicker',
  templateUrl: './rds-datepicker.component.html',
  styleUrls: ['./rds-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RdsDatepickerComponent),
    multi: true,
  }]
})
export class RdsDatepickerComponent implements OnInit, ControlValueAccessor {
  private onTouched!: Function;
  private onChanged!: Function;
  @Input() disabled: boolean = false;
  @Input() datePickerType: 'advanced' | 'basic' = 'basic';
  //Basic Datepicker options
  @Input() datePickerConfig: Partial<BsDatepickerConfig> = { dateInputFormat: 'MM/DD/YYYY', showWeekNumbers: false, isAnimated: true, adaptivePosition: true };
  @Input() id: string = Math.random().toString();
  @Input() value: any;
  @Input() placeholder: string = 'Date';
  @Input() datesDisabled: Date[] = [];
  @Input() datesEnabled: Date[] = [];
  @Input() dateTooltipTexts: DatepickerDateTooltipText[] = [];
  @Input() daysDisabled: number[] = [];
  @Input() isOpen: boolean = false;
  @Input() maxDate: Date | undefined = undefined;
  @Input() minDate: Date | undefined = undefined;
  @Input() minMode: BsDatepickerViewMode | undefined = undefined;
  @Input() outsideClick: boolean = true;
  @Input() outsideEsc: boolean = false;
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Output() onShow = new EventEmitter<any>();
  @Output() onHide = new EventEmitter<any>();
  @Input() isRequired: boolean = false;


  bsInlineValue!: Date;
  bsInlineRangeValue?: Date[];
  currentDate!: Date;
  yesterdayDate!: Date;
  lastSevendate!: Date;
  lastFourteendate!: Date;
  firstRange: any;
  lastRange: any;
  toggle: boolean = false;
  public selectdate: selectedRange[] = [];
  title = 'Today';
  dateRange?: Date[];
  public dates!: Date;
  newDate?: 'currentDate' | 'yesterdayDate' | 'lastSevendate' | 'lastFourteendate' | 'custom' = 'currentDate';
  @Input() label: string = "";
  @Input() format: string = 'MM-dd-YYYY';
  @Output() change = new EventEmitter<any>();
  @Input() TitleType: 'Top' | 'Floating' | 'Bottom' = 'Top';

  constructor() {
    this.bsInlineValue = new Date();
    this.currentDate = new Date();
    this.yesterdayDate = new Date();
    this.lastSevendate = new Date();
    this.lastFourteendate = new Date();
    this.dates = new Date();
    if (this.datePickerType !== 'basic') {
      this.maxDate = new Date();
      this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
    this.bsInlineRangeValue = [this.bsInlineValue];
  }

  ngOnInit(): void {
  }


  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }


  todayDate(event: Event): void {
    this.currentDate = this.dates;
    this.newDate = 'currentDate';
    this.title = 'Today';
    this.selectdate = [{
      startDate: new Date(),
    }]
    this.change.emit(this.currentDate);
  }
  checked(item: any) {
    this.toggle = !this.toggle;
  }

  public get classes(): string[] {
    var classes = ['date-picker-c']
    if (this.toggle) {
      classes.push('d-block')
      return classes
    } else if (this.toggle) {
      classes.push('collapse')

    } else {
      classes.push('d-none')
    }
    return classes

  }

  yesDate(event: Event) {
    this.yesterdayDate.setDate(this.dates.getDate() - 1);
    this.newDate = 'yesterdayDate';
    this.title = 'Yesterday';
    this.selectdate = [{
      startDate: this.yesterdayDate,
    }]
    this.change.emit(this.yesterdayDate);
  }


  lastSevenDate(event: Event): void {
    this.lastSevendate.setDate(this.dates.getDate() - 7);
    this.newDate = 'lastSevendate';
    this.title = ' Last 7 days';
    this.selectdate = [{
      startDate: this.dates,
      endDate: this.lastSevendate
    }]
    this.change.emit(this.selectdate);
  }


  lastFourteenDate(event: Event): void {
    this.lastFourteendate.setDate(this.dates.getDate() - 14);
    this.title = 'Last 14 days';
    this.newDate = 'lastFourteendate';
    this.selectdate = [{
      startDate: this.dates,
      endDate: this.lastFourteendate
    }]
    this.change.emit(this.selectdate);
  }

  changeDate(value: any) {
    let rangeDate = value;
    this.firstRange = rangeDate[0];
    this.lastRange = rangeDate[1];

    this.newDate = 'custom';
    this.title = 'Custom Date';
    this.selectdate = [{
      startDate: this.firstRange,
      endDate: this.lastRange
    }]
    this.change.emit(this.selectdate);
  }

  onDateChane(event: any) {
    if (event) {
      this.value = event;
      // this.onTouched(); // <-- mark as touched
      // this.onChanged(this.value);
      this.change.emit(this.value);
    }


    // console.log(event.toJSON().split('T')[0]);
  }


  public get labelClass(): string[] {
    var classList = [''];
    if (this.TitleType === 'Floating') {
      classList.push('d-none');
    } else if (this.TitleType === 'Top') {
      classList.push('d-flex flex-column-reverse mb-2');
    } else if (this.TitleType === 'Bottom') {
      classList.push('d-block mt-2');
    }
    else {
      classList.push('d-flex');
    }
    return classList;
  }


}
