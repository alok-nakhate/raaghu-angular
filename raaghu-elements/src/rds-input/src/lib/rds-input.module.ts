import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsInputComponent } from './rds-input.component';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';

@NgModule({
  declarations: [
    RdsInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule,
    RdsLabelModule
  ],
  exports: [
    RdsInputComponent
  ]
})
export class RdsInputModule { }
