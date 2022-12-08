import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { RdsCompDemoUiModule } from 'projects/rds-components/src/app/rds-comp-demoui/rds-comp-demo-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [    
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    CommonModule,
    RdsCompDemoUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
