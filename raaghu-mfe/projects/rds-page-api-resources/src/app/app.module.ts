import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsButtonModule,RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompBasicResourcesModule } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resources.module';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { RdsCompPropertiesModule } from 'projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RdsCompDataTableModule,
    RdsCompBasicResourcesModule,
    RdsCompClientResourcesModule,
    RdsCompPropertiesModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    NgxTranslateModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
