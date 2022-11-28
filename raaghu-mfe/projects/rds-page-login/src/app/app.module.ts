import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsInputModule, RdsModalModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { SharedModule, TokenAuthServiceProxy, NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShimmerComponent } from './login-shimmer/login-shimmer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginShimmerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule,
    RdsLabelModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsModalModule
  ],
  providers: [TokenAuthServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
