import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsToastsComponent } from './rds-toasts.component';
import { RdsButtonModule } from '@libs/rds-button';

@NgModule({
  declarations: [
    RdsToastsComponent
  ],
  imports: [
    CommonModule,
    RdsButtonModule
  ],
  exports: [
    RdsToastsComponent
  ]
})
export class RdsToastsModule { }
