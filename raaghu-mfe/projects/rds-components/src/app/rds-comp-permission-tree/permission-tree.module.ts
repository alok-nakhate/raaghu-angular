import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RdsCheckboxModule, RdsCounterModule, RdsIconLabelModule, RdsIconModule } from "@libs/rds-elements";
import { NgxTranslateModule } from "@libs/shared";
import { RdsCompPermissionTreeComponent } from "./rds-comp-permission-tree.component";

@NgModule({
    declarations: [
        RdsCompPermissionTreeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,        
        RdsCheckboxModule,
        RdsIconLabelModule,
        RdsIconModule,
        RdsCounterModule,
        NgxTranslateModule.forRoot(),
    ], exports: [
        RdsCompPermissionTreeComponent
    ]
})


export class RdsPermissionTreeModule { }