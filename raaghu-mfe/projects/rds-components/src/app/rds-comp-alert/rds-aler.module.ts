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
        NgxTranslateModule.forRoot(),
    ],
    exports: [
        RdsCompAlertComponent
    ]
})

export class RdsAlertCompModule { }