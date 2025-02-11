import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, TokenAuthServiceProxy, NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompLoginModule } from 'projects/rds-components/src/app/rds-comp-login/rds-comp-login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShimmerComponent } from './login-shimmer/login-shimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule,
    RdsCompLoginModule,
    RdsCompAlertModule
  ],
  providers: [TokenAuthServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
