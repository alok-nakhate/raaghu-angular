import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const UsersReducersMap = {
  users: UserReducer,
  UserEditI: GetUserforEdit,
  UserPermissionStateI: GetUserPermissions,
  UserPermissionFilterI: UserPermissionFilterReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('users', UsersReducersMap),
    EffectsModule.forFeature([UserEffects]),
    NgxTranslateModule.forRoot()
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
