import { Component, Input, OnInit } from '@angular/core';
export interface appDetailsItems {
  icon: string;
  title: string;
  subtitle: string;
  route: string;
  selected: boolean;
  iconHeight: string,
  iconWidth: string;
  iconFill: boolean;
  iconStroke: boolean;
};

@Component({
  selector: 'rds-app-details',
  templateUrl: './rds-app-details.component.html',
  styleUrls: ['./rds-app-details.component.scss']
})
export class RdsAppDetailsComponent implements OnInit {

  @Input() item: appDetailsItems;

  constructor() { }


  ngOnInit(): void {
  }

  onClick(event) {

  }
}
