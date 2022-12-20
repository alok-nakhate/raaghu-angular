import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Tooltip } from 'bootstrap'
declare var bootstrap: any;
export interface selectListItem {
  displayText: string;
  value: any;
}

@Component({
  selector: 'rds-select-list',
  templateUrl: './rds-select-list.component.html',
  styleUrls: ['./rds-select-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsSelectListComponent,
    multi: true
  }]
})
export class RdsSelectListComponent implements AfterViewInit, OnChanges, ControlValueAccessor {

  onChange = (event: string) => {};
  onTouched = () => {};
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() label: string = '';
  @Input() labelPosition: 'top' | 'bottom'  = 'top';
  @Input() rows: string = '';
  @Input() multiple: boolean = false;
  @Input() itemList: selectListItem[] = [];
  @Input() disabled: boolean = false;
  @Input() value: any = '';
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;
  @Output() selectListChange = new EventEmitter<any>();
  static count: number = 0;
  @Input() tooltipTitle: string = '';
  @Input() tooltipPlacement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() id: string = 'selectList';

  constructor() {
    this.id = this.id + RdsSelectListComponent.count++
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.value === undefined) {
      this.value = '';
    }
    if (this.tooltipTitle) {
      const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      if (tooltipTriggerList) {
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
      }
    }
  }
  ngAfterViewInit(): void {
    if (this.tooltipTitle) {
      const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      if (tooltipTriggerList) {
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
      }
    }
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

  public get classesForSelect(): string {
    if (this.multiple === false) {
      this.rows = '';
    }
    var selectClass = ['form-select '];
    var selectSize = ` form-select-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`
    return selectClass + selectSize;
  }

  public get divclasses(): string[] {
    var classes = ['form-label']
    if (this.labelPosition === 'top') {
      classes.push('top-0');
    }
    else if (this.labelPosition === 'bottom') {
      classes.push(' d-flex flex-column-reverse')
    }
    // else if (this.labelPosition === 'left') {
    //   classes.push('d-flex align-items-baseline justify-content-end gap-3')
    // }
    // else if (this.labelPosition === 'right') {
    //   classes.push('d-flex align-items-baseline flex-row-reverse gap-3')
    // }
    return classes;
  }

  onSelect(event: any) {
    if(this.multiple == false){
      this.value = event[0];
    this.selectListChange.emit(event[0]);
    this.onChange(event[0])
    this.onTouched()
    }
    else{
      this.value = event;
    this.selectListChange.emit(event);
    this.onChange(event)
    this.onTouched()
    }
    
  }

}
