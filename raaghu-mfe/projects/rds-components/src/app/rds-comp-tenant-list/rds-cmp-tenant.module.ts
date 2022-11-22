import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import {
  RdsCounterModule,
  RdsDatepickerModule,
  RdsDropdownlistModule,
  RdsFabMenuModule,
  RdsInputModule,
  RdsOffcanvasModule,
} from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsNavTabModule } from '@libs/rds-nav-tab';
import { NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsAlertCompModule } from '../rds-comp-alert/rds-aler.module';
import { RdsDataTableModule } from '../rds-comp-data-table/data-table.module';
import { RdsCompPermissionTreeComponent } from '../rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompTenantInformationShimmerComponent } from '../rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { RdsCompTenantInformationComponent } from '../rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantSettingsShimmerComponent } from '../rds-comp-tenant-settings/rds-comp-tenant-settings-shimmer/rds-comp-tenant-settings-shimmer.component';
import { RdsCompTenantSettingsComponent } from '../rds-comp-tenant-settings/rds-comp-tenant-settings.component';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list.component';

@NgModule({
  declarations: [
    RdsCompTenantListComponent,
    RdsCompTenantInformationComponent,
    RdsCompTenantInformationShimmerComponent,
    RdsCompTenantSettingsComponent,
    RdsCompTenantSettingsShimmerComponent,
    RdsCompPermissionTreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsButtonModule,
    RdsDataTableModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    NgxShimmerLoadingModule,
    RdsInputModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsDatepickerModule,
    RdsCounterModule,
    RdsAlertCompModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule,
  ],
  exports: [RdsCompTenantListComponent],
})
export class RdsTenantListModule {}
