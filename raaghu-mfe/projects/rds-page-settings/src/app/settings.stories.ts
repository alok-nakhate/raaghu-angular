import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDropdownlistComponent, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { AlertService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompTenantManagementComponent } from '../../../rds-components/src/app/rds-comp-tenant-management/rds-comp-tenant-management.component';
import { RdsCompUserManagementComponent } from '../../../rds-components/src/app/rds-comp-user-management/rds-comp-user-management.component';
import { RdsCompEmailComponent } from '../../../rds-components/src/app/rds-comp-email/rds-comp-email.component';
import { RdsSecurityComponent } from '../../../rds-components/src/app/rds-comp-security/rds-comp-security.component';
import { RdsCompInvoiceComponent } from '../../../rds-components/src/app/rds-comp-invoice/rds-comp-invoice.component';
import { RdsCompOtherSettingsComponent } from '../../../rds-components/src/app/rds-comp-other-settings/rds-comp-other-settings.component';
import { EffectsModule } from '@ngrx/effects';



export default {
  title: 'Pages/Settings',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompTenantManagementComponent,
        RdsCompUserManagementComponent,
        RdsCompEmailComponent,
        RdsSecurityComponent,
        RdsCompInvoiceComponent,
        RdsCompOtherSettingsComponent,
        AppComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsInputModule,
        RdsPaginationModule,
        CommonModule,
        StoreModule.forRoot({}),
        NgxTranslateModule.forRoot(),
        RdsLabelModule,
        RdsDropdownlistModule,
        NgxShimmerLoadingModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        SharedModule,
        RdsFabMenuModule,
        RdsDropdownlistComponent,
      
        RdsTextareaModule,
        RdsCounterModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],      
    })
  ]
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {
    ...args
  },
  template:
    `
  <div class="row">
    <div class="col-md-12  pb-3 desktop-btn">
      <div class="d-flex justify-content-end">
        <rds-button [tooltipPlacement]="'bottom'" [tooltipTitle]="'SAVE ALL'"
          [label]="'SAVE ALL'" type="button" [size]="'small'" [colorVariant]="'primary'"
          [outlineButton]="false" (click)="onSave()" icon="save" iconHeight="15px" iconWidth="15px"></rds-button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 py-2 px-4 h-100 rounded-0 card-full-stretch ">

          <!--<ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
          <mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>
        </ng-container>-->
          <div>

          </div>
          <rds-nav-tab [navtabsItems]="navtabsItems" [horizontalAlignment]="'start'" [verticalAlignment]="false"
            [pills]="false" [tabs]="true" [fill]="false" [justified]="false"></rds-nav-tab>

          <div naveContent class="row tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="tenant-management" role="tabpanel"
              aria-labelledby="nav-home-tab">
              <div class="row">
                <app-rds-comp-tenant-management></app-rds-comp-tenant-management>
              </div>
            </div>
            <div class="tab-pane fade" id="user-management" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                  <app-rds-comp-user-management></app-rds-comp-user-management>
              </div>
            </div>
            <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                <app-rds-security></app-rds-security>
              </div>
            </div>
            <div class="tab-pane fade" id="email" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                <app-rds-comp-email></app-rds-comp-email>
              </div>
            </div>
            <div class="tab-pane fade" id="invoice" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                <app-rds-comp-invoice></app-rds-comp-invoice>

              </div>
            </div>
            <div class="tab-pane fade" id="other-settings" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
               <app-rds-comp-other-settings></app-rds-comp-other-settings>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
`
});

export const Default = Template.bind({});
Default.args = {
  navtabsItems:  [
    {
      label: 'Email Settings',
      tablink: '#email',
      ariacontrols: 'email',
    },
    {
      label: 'Identity Management',
      tablink: '#identity',
      ariacontrols: 'identity',
    },
    {
      label: 'Theme',
      tablink: '#theme',
      ariacontrols: 'theme',
    },
    {
      label: 'Account',
      tablink: '#account',
      ariacontrols: 'account',
    }
   ]
   
}
