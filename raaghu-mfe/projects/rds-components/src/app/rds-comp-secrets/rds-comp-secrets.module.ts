import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompSecretsComponent } from './rds-comp-secrets.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { FormsModule } from '@angular/forms';
import { RdsLabelModule } from '@libs/rds-label'
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';;
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    RdsCompSecretsComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsButtonModule,
    RdsIconModule,
    FormsModule,
    RdsDatepickerModule,
    RdsDropdownlistModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule, 
    RdsCompDataTableModule,

  ],
  exports: [
    RdsCompSecretsComponent
  ]
})
export class RdsCompSecretsModule { }
