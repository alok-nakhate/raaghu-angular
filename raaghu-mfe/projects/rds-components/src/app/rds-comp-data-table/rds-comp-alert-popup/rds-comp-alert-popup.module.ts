import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompAlertPopupComponent } from './rds-comp-alert-popup.component';
import { RdsButtonModule, RdsIconModule, RdsLabelModule, RdsModalModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCompAlertPopupComponent
  ],
  imports: [
    CommonModule,
    RdsModalModule,
    RdsIconModule,
    RdsButtonModule,
    RdsLabelModule,
    NgxTranslateModule,
    FormsModule
  ],
  exports:[
    RdsCompAlertPopupComponent
  ]
})
export class RdsCompAlertPopupModule { }
