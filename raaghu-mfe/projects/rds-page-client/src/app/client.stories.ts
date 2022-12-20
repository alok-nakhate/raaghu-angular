import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata,Story } from '@storybook/angular';
import { RdsButtonModule, RdsDatepickerModule, RdsIconModule, RdsNavTabModule, RdsOffcanvasModule,} from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppComponent as Client } from './app.component';
import { RdsCompClientBasicsComponent } from 'projects/rds-components/src/app/rds-comp-client-basics/rds-comp-client-basics.component';
import { RdsCompClientResourcesComponent } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsLabelModule } from '@libs/rds-label';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Pages/Client',
  component: Client,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompClientBasicsComponent, RdsDataTableComponent, RdsCompClientBasicsComponent, RdsCompClientResourcesComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule, RdsIconModule,
        SharedModule, NgxTranslateModule, RdsDatepickerModule, BrowserAnimationsModule
      ],
      providers: [
        FormBuilder,
      ],
    })
  ]
} as Meta;
const Template: Story<Client> = (args: Client) => ({
  props: {
    ...args
  },

  template: `
   <div class="card border-0">
    <h5 class="card-header border-0 bg-transparent d-flex justify-content-between">
      <div class="card-title fs-3">Client</div>
      <div class="card-toolbar">
        <rds-button
          [id]="'yes'"
          [size]="'small'"
          [tooltipPlacement]="'top'"
          [colorVariant]="'primary'"
          [label]="'NEW Client'"
          [attr.data-bs-toggle]="'offcanvas'"
          [attr.data-bs-target]="'#addnewapiresource'"
          [attr.aria-controls]="'addnewapiresource'"
        >
        </rds-button>
      </div>
    </h5>
  <div class="card-body">
    <app-rds-data-table [tableHeaders]="clientTableHeaders" [tableData]="clientList" 
      [actions]="actions"></app-rds-data-table>
   </div>
  </div>

<ng-container *ngIf="viewCanvas">
 <rds-offcanvas [canvasTitle]="canvasTitle" [offcanvaswidth]="500" [offId]="offcanvasId"
   [placement]="'end'" (onClose)="close()">
   <div class="section">
     <rds-nav-tab [navtabsItems]="getNavTabItems()" [activepage]="activePage" [horizontalAlignment]="'start'"
       [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false">
       <div naveContent class="row tab-content m-2" id="nav-tabContent">
         <div class="tab-pane fade" [ngClass]="{'show active': activePage === 0}" id="basics" role="tabpanel"
           aria-labelledby="nav-home-tab">
          <app-rds-comp-client-basics></app-rds-comp-client-basics>
          </div>
         <div class="tab-pane fade" [ngClass]="{'show active': activePage === 1}" id="secrets" role="tabpanel"
           aria-labelledby="nav-home-tab">
            <div class="row">
             <div class="col-md-12">
               <rds-button [label]="'New Secrets'" [colorVariant]="'primary'" (click)="addSecrets()">
                 <rds-icon left name="plus" height="12px" width="12px"></rds-icon>
               </rds-button>
             </div>
           </div>
         </div>
         <div class="tab-pane fade" [ngClass]="{'show active': activePage === 2}" id="resources" role="tabpanel"
           aria-labelledby="nav-home-tab">
            <app-rds-comp-client-resources></app-rds-comp-client-resources>
         </div>
       </div>
     </rds-nav-tab>
   </div>
   <div class="">
     <rds-button [label]="'Cancel'"  [colorVariant]="'outline-primary'"  [size]="'small'" (click)="close()" data-bs-dismiss="offcanvas" aria-label="Close">
     </rds-button>
     <rds-button [label]="getBtnName()" [colorVariant]="'primary'" [size]="'small'" [disabled]="!client.basicInfo" (click)="save()">
     </rds-button>
   </div>
 </rds-offcanvas>
</ng-container>`

});
export const Default = Template.bind({});

Default.args = {
  clientTableHeaders: [
  {
    displayName: 'Client ID', key: 'clientId', dataType: 'text', filterable: false, sortable: true
  },
  {
    displayName: 'Name', key: 'clientName', dataType: 'text', filterable: false, sortable: true
  },
  { displayName: 'Description', key: 'description', dataType: 'text' }
  ],

  clientList: [
    {
      id: 1,
      clientId: '1234',
      clientName: 'Abp_value',
      description: 'description about client here'
    },
    {
      id: 2,
      clientId: '1235',
      clientName: 'Abp_dualtone',
      description: 'Address as described as the documents'
    },
    {
      id: 3,
      clientId: '1246',
      clientName: 'Containervalue',
      description: 'Email id associated'
    },
    {
      id: 4,
      clientId: '2134',
      clientName: 'Make_value',
      description: 'Contact number to this account'
    },
    {
      id: 5,
      clientId: '3241',
      clientName: 'Your_profile',
      description: 'image as per request'
    },

  ],
  actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
}