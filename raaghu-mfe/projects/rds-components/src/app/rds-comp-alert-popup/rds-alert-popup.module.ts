import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RdsModalModule, RdsButtonModule } from "@libs/rds-elements";
import { RdsIconModule } from "@libs/rds-icon";
import { RdsLabelModule } from "@libs/rds-label";
import { RdsCompAlertPopupComponent } from "./rds-comp-alert-popup.component";

@NgModule({
    declarations: [RdsCompAlertPopupComponent],
    imports: [
        RdsModalModule,
        RdsIconModule,
        RdsLabelModule,
        RdsButtonModule,
        CommonModule
    ],
    exports: [
        RdsCompAlertPopupComponent
    ]
})

export class RdsAlertPopupModule { }
