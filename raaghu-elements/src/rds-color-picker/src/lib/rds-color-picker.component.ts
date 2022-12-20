import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-color-picker',
  templateUrl: './rds-color-picker.component.html',
  styleUrls: ['./rds-color-picker.component.scss']
})
export class RdsColorPickerComponent implements OnInit {

  title1 = 'rds-color-picker';
  @Input() value = '';
  @Input() label!: string;
  @Input() disabled!: boolean;
  width:any;
  @Input() position: 'start' | 'end' | 'top' | 'bottom' = 'start';
  @Output() onItemClick = new EventEmitter<any>();

  labelOrder!: string; 

  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  changedValue(event: any) {
    this.onItemClick.emit({ evnt: event, item: event.target.value });
    // this.onChange(event.target.value)
    // this.onTouched()
  }

  public get divclasses(): string[] {
    var classes = ['']
    if (this.position == 'top') {
      classes.push('top-0');
      this.labelOrder = ' ';
    }
    else if (this.position == 'bottom') {
      classes.push(' d-flex flex-column-reverse')
      this.labelOrder = ' ';
    }
    else if (this.position === 'start') {
      classes.push('d-flex align-items-center gap-3 ')
      this.labelOrder = ' ';
    }
    else if (this.position == 'end') {
      classes.push(' d-flex align-items-center gap-3');
      this.labelOrder = '2';
    }
    return classes;
  }
}
