import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-banner',
  templateUrl: './rds-banner.component.html',
  styleUrls: ['./rds-banner.component.scss']
})
export class RdsBannerComponent implements OnInit {

  @Input() textAlign: 'start' | 'end' | 'center' = 'start';
  @Input() bannerText: string = 'Sample Banner';
  @Input() sticky: boolean = false;
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() colorVariant:'primary' |'danger'|'success'|'secondary'|'info'|'dark'|'light'|'warning'= 'primary';
  @Input() icon: string = '';
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Input() iconSize:string ='';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    let classes: string[] = [];
    if (this.textAlign) {
      classes.push('justify-content-' + this.textAlign);
    }

    if (this.sticky === true) {
      if (this.position) {
        const position = `${this.position === 'top' ? 'fixed-top' : ' fixed-bottom bottom-0'}`;
        classes.push(position);
      }
      classes.push(' m-auto');
    }
    if (this.colorVariant) {
      const bgColor = 'alert-' + `${this.colorVariant} text-dark`;
      classes.push(bgColor);
      // if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info') {
      //   classes.push('text-white');
      // }
    }
    return classes
  }

}
