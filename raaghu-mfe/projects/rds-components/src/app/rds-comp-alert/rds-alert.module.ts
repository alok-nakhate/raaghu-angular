import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RdsAlertModule } from "@libs/rds-elements";
import { NgxTranslateModule } from "@libs/shared";
import { RdsCompAlertComponent } from "./rds-comp-alert.component";

@NgModule({
    declarations: [
        RdsCompAlertComponent
    ],
    imports: [
        RdsAlertModule,
        CommonModule,
        NgxTranslateModule.forRoot(),
    ],
    exports: [
        RdsCompAlertComponent
    ]
})

export class RdsAlertCompModule { }