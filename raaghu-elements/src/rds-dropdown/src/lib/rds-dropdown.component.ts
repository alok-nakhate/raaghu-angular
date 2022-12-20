import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dropdown } from 'bootstrap'

@Component({
  selector: 'rds-dropdown',
  templateUrl: './rds-dropdown.component.html',
  styleUrls: ['./rds-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RdsDropdownComponent,
      multi: true,
    },
  ]
})
export class RdsDropdownComponent implements OnInit, ControlValueAccessor {

  selectedValue = ''
  value = ''
  onChange!: (value: string) => void;
  onTouched!: () => void
  @Input() id: string = 'dropdownMenuButton1';
  @Input()
  colorVariant?: string;
  @Input() show: boolean = false;
  @Input()
  size?: string;
  @Input()
  DropdownItems!: TemplateRef<any>;
  @Input()
  listItems = [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
  ];


  @Input()
  label: string = "Default";

  @Input()
  direction?: string;




  @Input() role: 'dropdown-button' | 'with_split' = 'dropdown-button';

  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.selectedValue = obj;

  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onChange = fn

  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
    // throw new Error('Method not implemented.');
  }

  public get button1(): string {
    var customClasses = ['btn btn-' + `${this.colorVariant}`];

    if (this.size === 'small') {
      var selectSize = 'btn-sm';
      customClasses.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'btn-lg';
      customClasses.push(selectSize);
    } else {
      var selectSize = '';
      customClasses.push(selectSize);
    }

    //if (this.color !== '') {
    //  var index = customClasses.indexOf(`${this.colorVariant}`);
    //  customClasses.splice(index, 1);
    //}
    return customClasses.join(' ');
  }

  public get splitdown(): any[] {
    var customClasses = [
      'btn btn-' + `${this.colorVariant}`, 'dropdown-toggle' + 'dropdown-toggle-split'];

    if (this.size === 'small') {
      var selectSize = 'btn-sm';
      customClasses.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'btn-lg';
      customClasses.push(selectSize);
    } else {
      var selectSize = '';
      customClasses.push(selectSize);
    }

    //if (this.color !== '') {
    //  var index = customClasses.indexOf(`${this.colorVariant}`);
    //  customClasses.splice(index, 1);
    //}
    return customClasses;
  }

  // Dropdown background theme
  public get menu(): string[] {
    var customMenu = ['dropdown-menu'];

    return customMenu;
  }

  //Drop down direction
  public get dropdownDirection(): string[] {
    var directionClasses = ['btn-group'];
    if (this.direction === 'Drop-down') {
      // var direction = 'dropdown';
      directionClasses.push('');
    } else if (this.direction === 'Drop-up') {
      var direction = 'dropup';
      directionClasses.push(direction);
    } else if (this.direction === 'Drop-end') {
      var direction = 'dropend';
      directionClasses.push(direction);
    } else if (this.direction === 'Drop-start') {
      var direction = 'dropstart';
      directionClasses.push(direction);
    } else {
      return directionClasses;
    }
    return directionClasses;
  }

  //Nomal dropDown button class

  public get classes(): any[] {

    var customClasses = ['btn btn-' + `${this.colorVariant}`];

    if (this.role === "dropdown-button") {
      customClasses.push('dropdown-toggle')
    }
    else if (this.role === "with_split") {
      customClasses.push('dropdown-toggle dropdown-toggle-split')

    }

    if (this.size === 'small') {
      //  var selectSize = 'btn-sm'
      customClasses.push('btn-sm')
    }
    else if (this.size === 'large') {
      //  var selectSize = 'btn-lg'
      customClasses.push('btn-lg')
    }
    else if (this.size === 'default') {
      //  var selectSize = 'btn-lg'
      customClasses.push('')
    }
    // if (this.color !== '') {

    //  var index = customClasses.indexOf(`${this.colorVariant}`)
    //  customClasses.splice(index, 1)
    // }
    return customClasses;
  }

  onclick(event: any, item: any) {
    this.onSelect.emit(item.value);
  }


  open(): void {
    this.show=!this.show
    var element: any = document.getElementById(this.id);
    var dropdown = new Dropdown(element);
    dropdown.show();
  }
}
