import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree/rds-comp-organization-tree.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NestGroupDirective } from 'projects/rds-components/src/app/rds-comp-hierarchy/node-label.directive';

@NgModule({
  declarations: [
    AppComponent,
    RdsOrganizationTreeComponent,
    NestGroupDirective,

  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsOffcanvasModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule,    
    RdsIconModule,
    RdsButtonModule,
    NgxShimmerLoadingModule,
    RdsModalModule,


  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
