import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsPriceComponent } from './rds-price.component';



@NgModule({
  declarations: [
    RdsPriceComponent
  ],
  imports: [
    RdsLabelModule,
    CommonModule,
    RdsIconModule,
    FormsModule
  ],
  exports: [
    RdsPriceComponent
  ]
})
export class RdsPriceModule { }
