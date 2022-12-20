import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-customer-reviews',
  templateUrl: './rds-comp-customer-reviews.component.html',
  styleUrls: ['./rds-comp-customer-reviews.component.scss']
})
export class RdsCompCustomerReviewsComponent implements OnInit {

  constructor() { }
  @Input() itemlist: any = {
    1: 1017,
    2: 313,
    3: 704,
    4: 1722,
    5: 4069
  };
  @Input() totalReview: number;

  ngOnInit(): void {
    this.calculateTotal();

  }

  private calculateTotal(): void {
    this.totalReview = 0;
    for (let item in this.itemlist) {
      this.totalReview = this.totalReview + this.itemlist[item];
    }
  }
  getReviewRate(item: any): number {
    return (Math.round((100 * item) / this.totalReview));
  }

  getReviewRateString(item: any): string {
    return (Math.round((100 * item) / this.totalReview)).toString();
  }

  getLabel(i: number): string {
    return (Object.keys(this.itemlist).length - i).toString();
  }
}
