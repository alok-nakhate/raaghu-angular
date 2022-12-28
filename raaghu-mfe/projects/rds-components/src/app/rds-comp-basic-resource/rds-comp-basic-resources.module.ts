import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompBasicResourceShimmerComponent } from './rds-comp-basic-resource-shimmer/rds-comp-basic-resource-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    RdsCompBasicResourceComponent,
    RdsCompBasicResourceShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompBasicResourceComponent
  ]
})
export class RdsCompBasicResourcesModule { }
