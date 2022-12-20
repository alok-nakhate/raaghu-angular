import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'rds-comp-benefit',
  templateUrl: './rds-comp-benefit.component.html',
  styleUrls: ['./rds-comp-benefit.component.scss']
})
export class RdsCompBenefitComponent implements OnInit {

  constructor() { }
  @Input() itemList :any= [
    {
      display_type: "Default",
      colSize: 4,
      header: '',
      items: [
        {
          id: 1,
          icon: 'globe',
          iconHeight: "35px",
          iconWidth: "35px",
          title: "International delivery",
          description: "Get your order in 2 years",
          display_type: "Basic",
        },
        {
          id: 1,
          icon: 'currency_dollar_circle',
          iconHeight: "35px",
          iconWidth: "35px",
          title: "International delivery",
          description: "Get your order in 2 years",
          display_type: "Basic",
        },
      ],

    }
  ]

  ngOnInit(): void {
  }
  getColSize(data: any): string {
    return 'col-md-' + data.colSize;
  }
}
