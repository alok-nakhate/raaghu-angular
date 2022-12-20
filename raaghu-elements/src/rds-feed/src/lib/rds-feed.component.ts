import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'rds-feed',
  templateUrl: './rds-feed.component.html',
  styleUrls: ['./rds-feed.component.scss'
  ]
})
export class RdsFeedComponent implements OnInit {
  date = moment().format('YYYY-MM-DD');
  @Input() itemList: any[] = [
    {
      'actor': 'Jijo Fleshman',
      'username': '@jijolife123',
      date: this.date,
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      'description': 'This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.',
      feedIcon:'avatar'
    }
  ]

  @Input() withNoOfReviews: boolean = true;
  @Input() colorVariant: 'review' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' = "review";
  @Input() noOfReview: number | undefined = 123;
  @Input() ratingPosition: 'left' | 'right' = 'left';

  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.date = moment(this.date).fromNow()
  }

  public get colorSelection(): string {
    const color = `text-${this.colorVariant}`;
    return color;
  }


  onLikeDislike(e: any) {
    this.onSelect.emit(e)
    console.log(e);
  }
}
