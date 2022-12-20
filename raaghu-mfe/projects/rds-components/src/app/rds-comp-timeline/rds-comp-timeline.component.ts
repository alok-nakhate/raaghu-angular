import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-timeline',
  templateUrl: './rds-comp-timeline.component.html',
  styleUrls: ['./rds-comp-timeline.component.scss'],
})
export class RdsCompTimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() displayType ?: 'Basic' | 'Advance' | 'Timeline' = 'Basic';
  @Input()  itemList1 =  [];

@Input() timelinData = [];

@Input() recentData = [];

@Input() timeLine = [];
}
