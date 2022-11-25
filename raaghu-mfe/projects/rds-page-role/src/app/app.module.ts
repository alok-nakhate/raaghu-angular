import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { GetRoleforEdit, PermissionReducer, RoleEffects, RoleReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompRoleListComponent } from './rds-comp-role-list/rds-comp-role-list.component';
import { RdsCompNewRoleComponent } from './rds-comp-new-role/rds-comp-new-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/data-table.module';
import { CommonModule } from '@angular/common';
export const RolsReducersMap = {
  PermissionI: PermissionReducer,
  EditRoleSateI: GetRoleforEdit,
  roles: RoleReducer,
};
@NgModule({
  declarations: [
    AppComponent,
    RdsCompRoleListComponent,
    RdsCompNewRoleComponent,
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('roles', RolsReducersMap
    ),
    EffectsModule.forRoot([RoleEffects]),
    RdsBannerModule,
    ReactiveFormsModule,
    FormsModule,
    RdsLabelModule,
    RdsFabMenuModule,
    RdsDataTableModule,
    RdsNavTabModule,
    CommonModule
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
