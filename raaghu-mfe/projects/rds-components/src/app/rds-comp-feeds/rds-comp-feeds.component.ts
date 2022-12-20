import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'rds-comp-feeds',
  templateUrl: './rds-comp-feeds.component.html',
  styleUrls: ['./rds-comp-feeds.component.scss']
})
export class RdsCompFeedsComponent implements OnInit {

  @Input() displaytype: 'Basic' | 'Advanced' | 'With_Multiple_Items' = 'Basic';

  icon: string;
  profilePic: string;
  date = moment().format('YYYY-MM-DD');
  fill: boolean;
  colorVariant: string;
  date2: string;


  @Input() listItems = [];

  @Input() itemList: any = [
    {

      'actor': 'Jijo Fleshman',
      'action': 'Deployed Workcation to production',
      date: this.date,
      'username': '@jijolife123',
      'description': 'This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.',
      icon: 'users',
      fill: true,
      colorVariant: 'default',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      rating: 5
    },
    {
      'actor': 'Bethany Blake',
      'action': 'Advanced to phone screening by',
      date: this.date,
      'username': '@bethanyb@99',
      'description': 'Superb quality..!!!!. It is as exactly as the picture..nevy blue color..quality is awesome..I loved it.!',
      icon: 'search',
      fill: true,
      colorVariant: 'default',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      rating: 2
    },
    {
      'actor': 'Martha Gardner',
      'action': 'Completed Phone screening with',
      date: this.date,
      'username': '@gmartha@77',
      'description': 'Product is not at all of good quality..I bought this for travelling abroad. And on very first day i faced problem in foreign country as belt came out of the steel loop',
      icon: 'check',
      fill: true,
      colorVariant: 'default',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      rating: 3
    },

  ]
  pDate: any;


  constructor() { }

  ngOnInit(): void {
    this.date = moment(this.date).fromNow()
    console.log(this.date);
  }

}
