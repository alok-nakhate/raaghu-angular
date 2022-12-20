import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox-groups',
  templateUrl: './rds-checkbox-groups.component.html',
  styleUrls: ['./rds-checkbox-groups.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxGroupsComponent,
    multi: true
  }]
})
export class RdsCheckboxGroupsComponent implements OnInit, ControlValueAccessor {
  title = "rds-checkbox-groups";
  value = ''
  onChange = (event: string) => {};
  onTouched = () => {};
  // @Output() onChange = new EventEmitter<boolean>();


  @Input() switch!: boolean;

  @Input() inline!: boolean;

  @Input() withLabel!: boolean;
  @Output() onCheck: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUncheck: EventEmitter<void> = new EventEmitter<void>();

  @Input() isInputGroup!: boolean;
  @Input() itemList!: any;

  @Input() state: 'checkbox' | 'Indeterminate' | 'errorcheckbox' = 'checkbox';

  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();

  //@Output() selectedItemData: EventEmitter<selectedData> = new EventEmitter();

  //public selectdataItem: selectedData = [];

  constructor() { }
  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  ngOnInit(): void { }

  classes() {
    const isInputGroupMode = `${this.isInputGroup ? ' input-group-text mb-2 px-5 ' : ''}`;
    const switchMode = `${this.switch ? ' form-switch px-5 ' : ''}`;
    const inlineMode = `${this.inline ? ' form-check-inline ' : ''}`;

    return 'form-check ' + isInputGroupMode + switchMode + inlineMode;
  }

  inlineGroup() {
    if (this.inline && this.isInputGroup) {
      return 'd-flex';
    } else {
      return '';
    }
  }

  formState() {
    const checkboxState = `${this.state === 'checkbox' ? 'form-check-input' :
      this.state === 'Indeterminate' ? 'form-check-input-intermediate' :
        this.state === 'errorcheckbox' ? 'form-check-input-error' : ''}`;

    return checkboxState;
  }

  getValue(event: any) {
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onTouched();
    this.onChange(event.target.checked);
  }

}



