import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RdsFeedComponent } from './rds-feed.component';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsRatingModule } from '@libs/rds-rating';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';

@NgModule({
  declarations: [
    RdsFeedComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RdsAvatarModule,
    RdsLabelModule,
    RdsLikeDislikeModule,
    RdsRatingModule,
    RdsIconModule
  ],
  exports: [
    RdsFeedComponent
  ]
})
export class RdsFeedModule { }
