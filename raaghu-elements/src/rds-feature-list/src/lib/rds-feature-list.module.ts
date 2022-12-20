import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsFeatureListComponent } from './rds-feature-list.component';



@NgModule({
  declarations: [
    RdsFeatureListComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsFeatureListComponent
  ]
})
export class RdsFeatureListModule { }
