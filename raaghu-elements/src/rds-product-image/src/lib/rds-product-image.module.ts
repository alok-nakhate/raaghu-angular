import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsProductImageComponent } from './rds-product-image.component';



@NgModule({
  declarations: [
    RdsProductImageComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsProductImageComponent
  ]
})
export class RdsProductImageModule { }
