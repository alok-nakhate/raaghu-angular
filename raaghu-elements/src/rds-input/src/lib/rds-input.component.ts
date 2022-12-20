import { AfterViewInit, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Tooltip } from 'bootstrap'


@Component({
  selector: 'rds-input',
  templateUrl: './rds-input.component.html',
  styleUrls: ['./rds-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RdsInputComponent),
    multi: true
  }]
})
export class RdsInputComponent implements AfterViewInit {

  title = 'rds-input';
  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() label: string = '';
  @Input() labelPosition: 'top' | 'bottom' | 'floating' = 'top';
  @Input() readonly: boolean = false;
  @Input() value = '';
  @Input() inputType: string = 'text';
  @Input() placeholder: string = 'Enter a value';
  @Input() icon: string = '';
  @Input() InputId:string='';
  @Input() iconCursor = '';
  @Input() id:string='rds_inputId_';
  @Input() iconHeight: string = '16px';
  @Input() iconWidth: string = '16px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() iconOpacity: string = '0.4';
  @Input() isRequired: boolean = false;
  iconTitle = 'Show';



  static count: number = 0;

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement: string = 'bottom';

  /* id: string = 'inputText'; */

  constructor() {
   
  }
  


  ngAfterViewInit(): void {
    if (this.tooltipPlacement && this.tooltipTitle) {
      const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      if (this.tooltipTitle && tooltipTriggerList) {
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
      }
    }
  }

  ngOnInit(){
    if (this.InputId=='')
    {this.id = this.id + RdsInputComponent.count++;
    }
    else {
      this.id=this.id+ this.InputId;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
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

  public get classes(): string[] {
    var classList = ['form-control'];
    if (this.size === 'small') {
      var selectSize = 'form-control-sm';
      classList.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'form-control-lg';
      classList.push(selectSize);
    }

    if (this.inputType === "password") {
      classList.push('hideEye');
    }

    return classList;
  }

  public get floatclasses(): string[] {
    var classList = [''];
    if (this.labelPosition === 'floating') {
      classList.push('form-floating');
    } else if (this.labelPosition === 'bottom'){
      classList.push('d-flex flex-column-reverse mb-2');
    } else {
      classList.push('d-flex flex-column-reverse');
    }
    return classList;
  }

  public get labelClass(): string[] {
    var classList = [''];
    if (this.labelPosition === 'top') {
      classList.push('mb-2');
    } else if (this.labelPosition === 'bottom') {
      classList.push('d-block mt-2');
    }
    else {
      classList.push('');
    }
    return classList;
  }


  public get iconClass(): string[] {
    var classList = ['icon-position'];
    if (this.size === 'small') {
      var selectSize = 'icon-size-sm';
      classList.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'icon-size-lg';
      classList.push(selectSize);
    } else {
      var selectSize = '';
      classList.push(selectSize);
    }

    return classList;
  }

  public get divclasses(): string[] {
    var classList = [''];
    if (this.labelPosition === 'bottom') {
      classList.push('d-block mt-2');
    } else {
      classList.push('d-flex flex-column-reverse');
    }
    return classList;
  }

  showPassword(event: string) {
    if (event == 'password') {
      this.inputType = 'text';
      this.icon = 'eye_slash';
      this.iconTitle = 'Hide';
    } else if (event == 'text') {
      this.inputType = 'password';
      this.icon = 'eye';
      this.iconTitle = 'Show';
    }
  }


}
