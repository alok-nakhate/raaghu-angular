import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsInputGroupComponent } from './rds-input-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsInputGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule],
  exports: [
    RdsInputGroupComponent
  ]
})
export class RdsInputGroupModule { }
