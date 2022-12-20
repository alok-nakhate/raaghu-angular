import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-radio-button',
  templateUrl: './rds-radio-button.component.html',
  styleUrls: ['./rds-radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsRadioButtonComponent,
    multi: true
  }]
})
export class RdsRadioButtonComponent implements OnInit, ControlValueAccessor {

  value = '';
  onChange = (event: string) => {};
  onTouched = () => {};
  // @Input() disabled = false
  @Input() switch = false
  @Input() inline = false
  @Input() isInputGroup = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() itemList!:any;
  @Input() display_type?: string = 'Default';
  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
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

  classes1() {
    const isInputGroupMode = `${this.isInputGroup ? ' input-group-text mb-2 px-4 ' : ''}`;
    const switchMode = `${this.switch ? ' form-switch px-4 ' : ''}`;
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
  getValue(event: any) {
    this.itemList.forEach(element => {
     if( element.name!==event.target.value){
      
     }
    });
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onChange(event.target.value)
    this.onTouched()
  }
}
