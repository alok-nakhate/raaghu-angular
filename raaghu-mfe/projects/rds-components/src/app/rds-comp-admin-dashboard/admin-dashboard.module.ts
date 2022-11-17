import { NgModule } from "@angular/core";
import { RdsBigNumberWidgetModule } from "@libs/rds-big-number-widget";
import { RdsChartBarHorizontalModule } from "@libs/rds-chart-bar-horizontal";
import { RdsChartBoolModule } from "@libs/rds-chart-bool";
import { RdsChartDoughnutModule } from "@libs/rds-chart-doughnut";
import { RdsChartLineModule } from "@libs/rds-chart-line";
import { RdsWidgetModule } from "@libs/rds-elements";
import { NgxTranslateModule } from "@libs/shared";
import { DataTableModule } from "../rds-comp-data-table/data-table.module";
import { RdsAdminDashboardComponent } from "./rds-comp-admin-dashboard.component";

@NgModule({
    declarations: [RdsAdminDashboardComponent],
    imports: [
        RdsWidgetModule,
        RdsChartLineModule,
        RdsBigNumberWidgetModule,
        RdsChartDoughnutModule,
        RdsChartBoolModule,
        RdsChartBarHorizontalModule, NgxTranslateModule.forRoot(),
        DataTableModule
    ], exports: [RdsAdminDashboardComponent]
})

export class AdminDashboardModule { }