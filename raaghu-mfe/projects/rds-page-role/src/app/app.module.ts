import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
// import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
// import { GetRoleforEdit, PermissionReducer, RoleEffects, RoleReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RoleEffects } from 'projects/libs/state-management/src/lib/state/role/role.effects';
import { RoleReducer } from 'projects/libs/state-management/src/lib/state/role/role.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// export const RolsReducersMap = {
//   // PermissionI: PermissionReducer,
//   // EditRoleSateI: GetRoleforEdit,
//   roles: RoleReducer,
// };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
    RdsBannerModule,
    CommonModule,
    RdsIconModule,
    FormsModule,
    BrowserAnimationsModule
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
