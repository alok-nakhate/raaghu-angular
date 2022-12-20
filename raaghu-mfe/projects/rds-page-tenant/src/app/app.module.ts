import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule } from '@libs/rds-elements';
import { TenantReducer } from 'projects/libs/state-management/src/lib/state/tenant/tenant.reducer';
import { TenantEffects } from 'projects/libs/state-management/src/lib/state/tenant/tenant.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
