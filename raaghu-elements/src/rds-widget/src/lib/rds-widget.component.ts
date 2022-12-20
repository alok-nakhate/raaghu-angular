import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-widget',
  templateUrl: './rds-widget.component.html',
  styleUrls: ['./rds-widget.component.scss']
})
export class RdsWidgetComponent implements OnInit {

  @Input() headerTitle: string = 'Widget';
  @Input() isRefreshRequired: boolean = true;
  @Input() colorVariant: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'info' | 'secondary' | 'dark' | 'gradient-primary' | '' = '';
  @Output() onRefresh = new EventEmitter<Event>();
  @Input() isBorder: boolean = true;
  //@Input() cardheight = 'card-stretch';

  constructor() { }

  ngOnInit(): void {
    if (this.colorVariant == '' || !this.colorVariant) {
      this.colorVariant = '';
    }
  }
  public get classes(): string[] {
    let classes: string[] = [];

    const bgColor = 'bg-' + `${this.colorVariant}`;
    classes.push(bgColor);
    if (`${this.colorVariant}` == 'gradient-primary') {
      classes.push('text-white');
    } else if (this.colorVariant == '') {
      classes.push('');
    }
    //var heightclass=`${this.cardheight}`;
    //classes.push(heightclass);
    return classes
  }
  //public get heightclasses(): any[] {
  //  var heightclass = [`${this.cardheight}`];
  //  return heightclass;
  //}
}
