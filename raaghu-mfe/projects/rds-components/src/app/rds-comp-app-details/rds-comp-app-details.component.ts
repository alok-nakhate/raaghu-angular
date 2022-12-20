import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-app-details',
  templateUrl: './rds-comp-app-details.component.html',
  styleUrls: ['./rds-comp-app-details.component.scss']
})
export class RdsCompAppDetailsComponent implements OnInit {

  @Input() appDetailList: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
