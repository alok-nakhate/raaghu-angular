import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-review-category',
  templateUrl: './rds-review-category.component.html',
  styleUrls: ['./rds-review-category.component.scss']
})

export class RdsReviewCategoryComponent implements OnInit {
  @Input() item: any;

  @Input() display_type?: string = 'Basic';
  @Output() likedislikeClick = new EventEmitter<any>();

  ngOnInit(): void {
  }
  
  onClick(event :any){
    this.likedislikeClick.emit(event);
  }
}
