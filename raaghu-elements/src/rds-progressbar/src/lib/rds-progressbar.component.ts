import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-progressbar',
  templateUrl: './rds-progressbar.component.html',
  styleUrls: ['./rds-progressbar.component.scss']
})
export class RdsProgressbarComponent implements OnInit {

  @Input() animation: boolean = false;
  @Input() height: number = 15;;
  @Input() colorVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'default' = 'light';
  @Input() striped: 'default' | 'progress-bar-striped' = 'default';
  @Input() progressWidth: number;
  @Input() progressbar_MaxWidth: number = 100;
  @Input() role: 'single' | 'multiple' = 'single';
  @Input() progressvalues = [{ progressWidth: 50, colorVariant: 'success', stripe: 'progress-bar-striped', animation: 'progress-bar-animated' }, { progressWidth: 20, colorVariant: 'danger' }, { progressWidth: 30, colorVariant: 'info' }];
  @Input() showLabels: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }



  //classes for progress bar
  public get classes(): any[] {

    // var customClasses =  ['progress-bar', `${this.progressIndicatorColor}` , `${this.striped}`,`${this.customIndicatorColor}`];
    var customClasses = ['progress-bar bg-' + `${this.colorVariant}`, `${this.striped}`]
    var animate = this.animation ? 'progress-bar-striped progress-bar-animated' : ''
    customClasses.push(animate)
    return customClasses
  }
}
