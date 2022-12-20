import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface itemModel {
  title: string;
  link: string;
  subtitle: string;
  description?: string;
  icon: string;
  iconHeight: string;
  iconWidth: string;
}
@Component({
  selector: 'rds-website-metric',
  templateUrl: './rds-website-metric.component.html',
  styleUrls: ['./rds-website-metric.component.scss']
})
export class RdsWebsiteMetricComponent implements OnInit {
  @Input() item: itemModel;
  @Output() onClickLink = new EventEmitter<any>();
  @Input() display_type: 'metric_type1' | 'metric_type2' | 'metric_type3' | 'metric_type4' | 'metric_type5' | 'metric_type6' = 'metric_type1'
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default'|'review'= 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  onLinkClick(): any {
    this.onClickLink.emit(true);
  }

}
