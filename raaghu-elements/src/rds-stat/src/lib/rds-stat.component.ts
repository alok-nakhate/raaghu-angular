import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-stat',
  templateUrl: './rds-stat.component.html',
  styleUrls: ['./rds-stat.component.scss']
})
export class RdsStatComponent implements OnInit {

  @Input() statItems: any[] = [];
  @Input() display_type?: 'basic'|'advanced' = 'basic';
  constructor() { }

  ngOnInit(): void {
  }

}
