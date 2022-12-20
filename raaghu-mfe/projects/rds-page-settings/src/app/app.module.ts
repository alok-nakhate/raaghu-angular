import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsButtonModule, RdsNavTabModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
//  import {SettingsTenantPageboxReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { SettingEffects } from 'projects/libs/state-management/src/lib/state/settings/settings.effects';
import { settingReducer } from 'projects/libs/state-management/src/lib/state/settings/settings.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// export const featureReducersMap = {
//   settings: settingReducer,
//   // settingsComboboxItem: SettingsTenantPageboxReducer
// };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    CommonModule,
    //StoreModule.forFeature('settings', { settings: settingReducer }),

    // EffectsModule.forRoot([SettingEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
