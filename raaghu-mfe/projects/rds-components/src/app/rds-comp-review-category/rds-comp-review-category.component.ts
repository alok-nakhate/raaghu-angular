import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-review-category',
  templateUrl: './rds-comp-review-category.component.html',
  styleUrls: ['./rds-comp-review-category.component.scss']
})
export class RdsCompReviewCategoryComponent implements OnInit {

  constructor() { }
  @Input() itemList :any= [
    {
      display_type: "Basic",
      items: [
        {
          name: 'Jems Rock',
          date: new Date(),
          reviewRate: 4,
          reviewTitle: 'dasfsdfdg',
          reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
          description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
        },
        {
          name: 'Jems Rock',
          date: new Date(),
          reviewRate: 4,
          reviewTitle: 'dasfsdfdg',
          reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
          description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
        },
      ],

    }
  ]

  ngOnInit(): void {
  }

}
