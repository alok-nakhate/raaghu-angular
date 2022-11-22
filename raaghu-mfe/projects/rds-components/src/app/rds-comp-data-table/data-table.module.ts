import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RdsButtonModule } from "@libs/rds-button";
import { RdsCheckboxModule } from "@libs/rds-checkbox";
import { RdsInputModule, RdsPaginationModule } from "@libs/rds-elements";
import { RdsIconModule } from "@libs/rds-icon";
import { RdsIconLabelModule } from "@libs/rds-icon-label";
import { RdsLabelModule } from "@libs/rds-label";
import { NgxTranslateModule } from "@libs/shared";
import { NgxShimmerLoadingModule } from "ngx-shimmer-loading";
import { RdsAlertPopupModule } from "../rds-comp-alert-popup/rds-alert-popup.module";
import { RdsDataTableComponent } from "./rds-comp-data-table.component";
import { RdsCompTableShimmerComponent } from "./rds-comp-table-shimmer/rds-comp-table-shimmer.component";

@NgModule({
    declarations: [
        RdsDataTableComponent,
        RdsCompTableShimmerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RdsLabelModule,
        RdsCheckboxModule,
        RdsIconLabelModule,
        RdsIconModule,
        RdsInputModule,
        RdsButtonModule,
        RdsPaginationModule,
        NgxShimmerLoadingModule,
        RdsAlertPopupModule,
        NgxTranslateModule.forRoot(),
    ], exports: [
        RdsDataTableComponent
    ]
})

export class RdsDataTableModule { }