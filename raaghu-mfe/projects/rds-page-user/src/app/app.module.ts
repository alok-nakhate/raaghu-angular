import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import {
  GetUserforEdit,
  GetUserPermissions,
  UserEffects,
  UserPermissionFilterReducer,
  UserReducer,
} from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/data-table.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/permission-tree.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompUserBasicsShimmerComponent } from './rds-comp-user-basics/rds-comp-user-basics-shimmer/rds-comp-user-basics-shimmer.component';
import { RdsCompUserBasicsComponent } from './rds-comp-user-basics/rds-comp-user-basics.component';
import { RdsCompUserPermissionsComponent } from './rds-comp-user-permissions/rds-comp-user-permissions.component';
export const UsersReducersMap = {
  users: UserReducer,
  UserEditI: GetUserforEdit,
  UserPermissionStateI: GetUserPermissions,
  UserPermissionFilterI: UserPermissionFilterReducer,
};

@NgModule({
  declarations: [AppComponent,RdsCompUserPermissionsComponent,RdsCompUserBasicsComponent,RdsCompUserBasicsShimmerComponent],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('users', UsersReducersMap),
    EffectsModule.forRoot([UserEffects]),
    NgxTranslateModule.forRoot(),
    RdsPermissionTreeModule,
    RdsDataTableModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    CommonModule,
    RdsFabMenuModule,
    RdsInputModule,
    NgxShimmerLoadingModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
