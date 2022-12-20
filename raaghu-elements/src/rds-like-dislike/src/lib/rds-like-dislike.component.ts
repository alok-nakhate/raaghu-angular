import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class likeArray {
  constructor(
    likeCount: number,
    dislikeCount: number
  ) { }
}

@Component({
  selector: 'rds-like-dislike',
  templateUrl: './rds-like-dislike.component.html',
  styleUrls: ['./rds-like-dislike.component.scss'],
})

export class RdsLikeDislikeComponent implements OnInit {
  @Input() likeCount: number = 0;
  @Input() dislikeCount: number = 0;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  likeFun(event: any) {
    this.likeCount++;
    const likeArray = [
      {
        likeCount: this.likeCount,
        dislikeCount: this.dislikeCount,
      }
    ]
    this.onClick.emit(likeArray);
  }

  dislikeFun(event: any) {
    this.dislikeCount++;
  const likeArray = [
      {
        likeCount: this.likeCount,
        dislikeCount: this.dislikeCount,
      }
    ]

    this.onClick.emit(likeArray);
  }

  count(value: number): any {
    let count = value / 1000000;
    if (count >= 1) {
      return count + ' M';
    }
    count = value / 1000
    if (count >= 1) {
      return count + ' K';
    }
    return value;
  }

}

