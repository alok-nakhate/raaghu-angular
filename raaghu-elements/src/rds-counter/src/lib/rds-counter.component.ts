import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation, DoCheck } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-counter',
  templateUrl: './rds-counter.component.html',
  styleUrls: ['./rds-counter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RdsCounterComponent),
    multi: true
  }]
})
export class RdsCounterComponent implements OnInit {

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  @Input() counterValue: number = 0;
  @Input() label = '';
  @Input() min = 0;
  @Input() max = 40;
  @Input() width = 110;
  @Input() colorVariant?: string;
  @Input() position: 'start' | 'end' | 'top' | 'bottom' = 'start';

  icon: string = 'plus';
  iconStroke: boolean = true;
  iconFill: boolean = false;
  labelOrder!: string; 

  @Output() counterChange = new EventEmitter<number>();
  invalidCount: boolean = false;
  id: string = '';
  iconMinus: string = "minus";
  iconPlus: string = "plus";
  iconWidth: string = "20px";
  iconHeight: string = "20px";

  constructor() { }
  
  ngOnInit(): void {
    this.width < 110 ? this.width = 110 : this.width = this.width;
  }

  writeValue(obj: any): void {
    this.counterValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onKeyup(event: any) {
    this.onChange(event.target.value);
  }

  focus() {
    this.onTouched();
  }

  onMouseup(event: any) {
    this.onChange(event.target.value)
  }



  public get classList(): string[] {
    var clsList: string[] = [];
    const bgColor = 'btn btn-icon btn-' + `${this.colorVariant}`;
    clsList.push(bgColor);
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'primary') {
      clsList.push('primary');
    }
    return clsList;
  }

  decrement() {
    if (this.counterValue > this.min) {
      this.counterValue--;
      this.invalidCount = false;
    } else {
      this.invalidCount = true;
      return;
    }
    this.onChange(this.counterValue);
    this.counterChange.emit(this.counterValue);
  }

  increment() {
    if (this.counterValue < this.max) {
      this.counterValue++;
      this.invalidCount = false;
    } else {
      this.invalidCount = true;
      return;
    }

    this.onChange(this.counterValue);
    this.counterChange.emit(this.counterValue);
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
      classes.push('d-flex align-items-baseline gap-3 ')
      this.labelOrder = ' ';
    }
    else if (this.position == 'end') {
      classes.push(' d-flex align-items-baseline gap-3');
      this.labelOrder = '2';
    }
    return classes;
  }

  public get inputPosition(): string[] {
    var inputClass = ['input-group'];
    if (this.position === 'top') {
      inputClass.push('mt-2');
    }
    else if (this.position === 'bottom') {
      inputClass.push('mb-2');
    }
    return inputClass;
  }

}
