import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { TenantReducer, TenantEffects, EditionComboboxReducer, TenantInfoReducer, TenantFeatureReducer, TenantUsersReducer, TenantLoginReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list/rds-comp-tenant-list.component';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings/rds-comp-tenant-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RdsDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/data-table.module';
import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxShimmerLoadingComponent } from 'ngx-shimmer-loading/lib/ngx-shimmer-loading.component';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/permission-tree.module';
import { RdsAlertCompModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-alert.module';
export const featureReducersMap = {
  tenants: TenantReducer,
  tenantInfo: TenantInfoReducer,
  editionComboboxItem: EditionComboboxReducer,
  tenantFeature: TenantFeatureReducer,
  tenantUsers:TenantUsersReducer,
  tenantLogin:TenantLoginReducer
};
@NgModule({
  declarations: [
    AppComponent,
    RdsCompTenantListComponent,
    RdsCompTenantInformationComponent,
    RdsCompTenantSettingsComponent,
    RdsCompTenantInformationShimmerComponent,

  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('tenants', featureReducersMap),
    EffectsModule.forRoot([TenantEffects]),
    RdsDatepickerModule,
    RdsCheckboxModule,
    RdsDropdownlistModule,
    RdsInputModule,
    FormsModule,
    ReactiveFormsModule,
    RdsNavTabModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    CommonModule,
    RdsDataTableModule,
    NgxShimmerLoadingModule,
    RdsInputModule,
    RdsPermissionTreeModule,
    RdsAlertCompModule
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
