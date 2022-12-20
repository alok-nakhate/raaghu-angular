import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-big-number-widget',
  templateUrl: './rds-big-number.component.html',
  styleUrls: ['./rds-big-number.component.scss']
})
export class RdsBigNumberWidgetComponent implements OnInit {

  title = 'rds-big-number';
  @Input() bigNumber: string = '$ 55,000';
  @Input() role: 'basic' | 'advanced' = 'basic';
  @Input() subText: string = '';
  @Input() icon: string = '';
  @Input() iconHeight: string = '12px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() iconWidth: string = '12px';
  @Input() iconColor = '';
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined = undefined;;
  @Input() textAlign: 'text-start' | 'text-center' | 'text-end' = 'text-center';
  @Input() subTitleColorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined = 'light';
  @Input() chartOptions: any;
  @Input() chartWidth: number = 100;
  @Input() chartHeight: number = 100;
  @Input() chartLabels: string[] = [];
  @Input() chartDatasets:any;
  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): any[] {
    let customClasses: string[] = [];
    if (this.colorVariant) {
      const bgColor = 'bg-' + `${this.colorVariant}`;
      customClasses.push(bgColor);
    }

    if (this.colorVariant !== undefined && `${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'white' && `${this.colorVariant}` !== '') {
      customClasses.push('text-white bg-gradient-primary');
    }
    return customClasses
  }
  public get alignclasses(): any[] {
    var alignclass = [`${this.textAlign}`];
    return alignclass;
  }
  public get subTitleClasses(): any[] {
    var subTitleClass = ['text-' + `${this.subTitleColorVariant}`];
    return subTitleClass;
  }
}
