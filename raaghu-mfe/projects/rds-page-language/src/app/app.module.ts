import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsDropdownModule, RdsIconModule, RdsLabelModule, RdsOffcanvasModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/data-table.module';
import { RdsCompNewRoleShimmerComponent } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list/rds-comp-language-text-list.component';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language/rds-comp-new-language.component';

@NgModule({
  declarations: [
    AppComponent,
    RdsCompLanguageTextListComponent,
    RdsCompEditLanguageTextComponent,
    RdsCompNewLanguageComponent,
    RdsCompNewRoleShimmerComponent

  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsButtonModule,
    RdsDropdownModule,
    RdsCheckboxModule,
    SharedModule,
    RdsDropdownlistModule,
    RdsSelectListModule,
    FormsModule,
    RdsFabMenuModule,
    RdsIconModule,
    NgxTranslateModule.forRoot(),
    RdsDataTableModule,
    RdsTextareaModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsOffcanvasModule,
    RdsDropdownlistModule,
    FormsModule,
    ReactiveFormsModule,
    RdsCheckboxModule,
    NgxShimmerLoadingModule,
    CommonModule
  ],
  // providers: [[HttpClient,

  //   { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestResponseInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
