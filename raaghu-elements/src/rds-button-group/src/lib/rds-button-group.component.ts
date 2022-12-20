import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ButtonGroupItem {
  id?: any;
  label?: string;
  value?: any;
  checked?: boolean;
  colorVariant?: string;
  icon?: string;
  name?: any;
  iconHeight?: any;
  iconWidth?: any;
  iconStroke?: boolean;
  iconFill?: boolean;
}
@Component({
  selector: 'rds-button-group',
  templateUrl: './rds-button-group.component.html',
  styleUrls: ['./rds-button-group.component.scss']
})
export class RdsButtonGroupComponent implements OnInit {

  /**
   * What background color to use
   */


  @Input()
  vertical = false;

  @Input()
  outline = false;

  @Input()
  role: 'button' | 'radio' | 'checkbox' = 'button';

  @Input()
  size: 'small' | 'large' | 'medium' = 'medium';

  @Input() selectedRadio: any = '';
  /**
   * How large should the button be?
   */
  @Input()
  buttonGroupItem: ButtonGroupItem[];

@Input() activeButton!: number;

// tslint:disable-next-line:no-output-on-prefix
@Output() onClick = new EventEmitter<any>();

constructor() { }

ngOnInit(): void {
  // this.activeButton = 0;
}

  public get classes(): string {
  const mode = `${this.vertical ? 'btn-group-vertical' : 'btn-group'}`;
  const mode2 = ` btn-group-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
  return mode + mode2;
}

  public itemClass(item: any): string {
  const mode = `${this.outline ? 'btn btn-outline-' + item.colorVariant : 'btn btn-' + item.colorVariant}`;
  return mode;
}

onButtonClick(i: any): void {
  this.activeButton = i;
  if(this.role === 'radio') {
  this.onClick.emit(this.selectedRadio);
} else {
  this.onClick.emit(i);

}
  }



}
