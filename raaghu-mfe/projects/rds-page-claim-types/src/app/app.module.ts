import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsDropdownlistModule, RdsDropdownModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsOffcanvasModule,
    RdsDropdownlistModule,
    RdsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
