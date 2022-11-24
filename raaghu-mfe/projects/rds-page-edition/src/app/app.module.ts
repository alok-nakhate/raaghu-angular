import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsCounterModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsRadioButtonModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { EditionEffects, EditionInfoReducer, EditionPageComboboxReducer, EditionReducer, TenantCountReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/data-table.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/permission-tree.module';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompFeaturesComponent } from './rds-comp-features/rds-comp-features.component';
export const featureReducersMap = {
  editions: EditionReducer,
  editionInfo: EditionInfoReducer,
  editionComboboxItem: EditionPageComboboxReducer,
  tenantCount: TenantCountReducer
};
@NgModule({
  declarations: [
    AppComponent,
    RdsCompFeaturesComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('editions', featureReducersMap
    ),
    EffectsModule.forRoot([EditionEffects]),
    RdsDataTableModule,
    RdsFabMenuModule,
    RdsDropdownlistModule,
    RdsInputModule,
    RdsCounterModule,
    RdsRadioButtonModule,
    RdsOffcanvasModule,
    ReactiveFormsModule,
    FormsModule,
    RdsButtonModule,
    RdsNavTabModule,
    CommonModule, 
    RdsPermissionTreeModule,
    RdsCounterModule   
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
