import { NgModule } from "@angular/core";
import { RdsButtonModule } from "@libs/rds-button";
import { RdsIconModule, RdsModalModule } from "@libs/rds-elements";
import { RdsLabelModule } from "@libs/rds-label";
import { RdsCompAlertPopupComponent } from "./rds-comp-alert-popup.component";


@NgModule({
    declarations: [RdsCompAlertPopupComponent],
    imports: [
        RdsModalModule,
        RdsIconModule,
        RdsLabelModule,
        RdsButtonModule
    ],
    exports: [
        RdsCompAlertPopupComponent
    ]
})

export class RdsAlertPopupModule { }