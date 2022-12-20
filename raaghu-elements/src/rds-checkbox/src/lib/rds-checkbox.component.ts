import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox',
  templateUrl: 'rds-checkbox.component.html',
  styleUrls: ['rds-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxComponent,
    multi: true
  }]
})
export class RdsCheckboxComponent implements OnInit, ControlValueAccessor {
  onChanged = (event: any) => {};
  onTouched = () => {};
  title = "rds-checkbox";
  // onChange!:(value:string) => void;
  // onTouched!:() => void
 // onChange!: (value: string) => void;
  @Input() label?: string;

  @Input() checked!: boolean;
  @Input() disabled!: boolean;
  @Input() switch?: boolean;
  @Input() inline?: boolean;
  @Input() id?: string;
  @Input() withLabel?: boolean;
  @Input() isInputGroup?: boolean;
  @Input() state: 'checkbox' | 'Indeterminate' | 'errorcheckbox' = 'checkbox';
  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup === true) {
      classes = ['input-group-text'];
    }
    if (this.switch === true) {
      classes.push('form-switch')
      return classes
    }
    if (this.inline === true) {
      classes.push('form-check-inline')
      return classes
    }
    return classes
  }

  // getValue(event: any) {
  //   this.onClick.emit({ evnt: event, item: event.target.value });
  //   this.onChange(event.target.click)
  //   this.onTouched();
  // }

  formState(){
    const checkboxState = `${this.state === 'checkbox' ? 'form-check-input' : 
      this.state === 'Indeterminate' ? 'form-check-input-intermediate' : 
      this.state === 'errorcheckbox' ? 'form-check-input-error' : ''}`;
    
    return checkboxState;
  }

  changeData(event: boolean): void {
    this.onChange.emit(event)
    this.checked = event
   // this.onTouched(); // <-- mark as touched
    this.onChanged(this.checked);
  }

  writeValue(obj: any) {
    this.checked = obj;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
