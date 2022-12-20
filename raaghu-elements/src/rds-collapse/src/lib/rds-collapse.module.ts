import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCollapseComponent } from './rds-collapse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCollapseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsCollapseComponent
  ]
})
export class RdsCollapseModule { }
