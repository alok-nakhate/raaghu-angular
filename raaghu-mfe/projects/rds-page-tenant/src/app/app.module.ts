import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import {
  TenantReducer,
  TenantEffects,
  EditionComboboxReducer,
  TenantInfoReducer,
  TenantFeatureReducer,
} from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsTenantListModule } from 'projects/rds-components/src/app/rds-comp-tenant-list/rds-cmp-tenant.module';
export const featureReducersMap = {
  tenants: TenantReducer,
  tenantInfo: TenantInfoReducer,
  editionComboboxItem: EditionComboboxReducer,
  tenantFeature: TenantFeatureReducer,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    StoreModule.forFeature('tenants', featureReducersMap),
    EffectsModule.forRoot([TenantEffects]),
    RdsTenantListModule,
  ],
  providers: [TranslateService, TranslateStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
