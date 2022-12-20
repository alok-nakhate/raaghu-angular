import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService, ComponentLoaderOptions } from '@libs/shared';
import { } from '@libs/state-management';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { fadeAnimation } from '../../../libs/shared/src/lib/animation';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { selectAllTenants, selectEditionComboboxItems, selectTenantFeature, selectTenantInfo } from 'projects/libs/state-management/src/lib/state/tenant/tenant.selector';
import { deleteTenant, getEditionComboboxItems, getTenantFeaturesForEdit, getTenantForEdit, getTenants, saveTenant, updateTenant, updateTenantFeatureValues } from 'projects/libs/state-management/src/lib/state/tenant/tenant.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    DatePipe
  ],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = 'tenant';
  tenantData: any = {};
 tenantId = undefined
  rdsTenantNewMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompTenantListNew'
  };
  editionList: any = [];
  tenantFeatureValues: any;
  tenantTableHeader: TableHeader[] = [
    { displayName: 'Name', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Role', key: 'roleTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
  ]
  isAnimation: boolean = true;

  featureData : any = [];
  tenantTableData: any = []
  constructor(public datepipe: DatePipe, private store: Store, private translate: TranslateService, private _arrayToTreeConverterService: ArrayToTreeConverterService) { }
  ngOnInit(): void {
    this.isAnimation = true;

    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // });
    this.rdsTenantNewMfeConfig = {
      name: 'RdsCompTenantListNew',
      input: {
        tenantHeaders: this.tenantTableHeader,
        tenantList: this.tenantTableData,
        editionList: this.editionList,
        noDataTitle: 'Currently you do not have tenant',
        // isShimmer: true,
        // editShimmer: true
      },
      output: {
        onSaveTenant: (tenant: any) => {        
                if (tenant.id) {
                     this.tenantId= tenant.id;
                    const data: any = {
                name: tenant.tenantInfo.name,
                editionId: tenant.tenantInfo.editionId[0],
                activationState : tenant.tenantInfo.activationState
              };      
              let body = {body:data,id:this.tenantId};      
              this.store.dispatch(updateTenant(body))
              let body1 = {
                feature : tenant.featureValues,
                id : tenant.id
              }
              this.store.dispatch(updateTenantFeatureValues(body1))
                }
            else {
              const data: any = {
                name: tenant.tenantInfo.name,
                adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
                adminPassword: tenant.tenantInfo.adminPassword,
                editionId: tenant.tenantInfo.editionId[0],
                activationState: tenant.tenantInfo.activationState,
              };
              this.store.dispatch(saveTenant(data, 30))
            }
          
              
        },
        getHostFeatureEmitter:()=>{
          this.store.dispatch(getTenantFeaturesForEdit(undefined));
        },
        onEditTenant: (selectedTenant: any) => {
          this.store.dispatch(getTenantForEdit(selectedTenant));
          this.store.select(selectTenantInfo).subscribe(res=>{
            console.log(res);
            const mfeConfig = this.rdsTenantNewMfeConfig
            mfeConfig.input.tenantData = { ... this.tenantData };
          })  
          this.store.dispatch(getTenantFeaturesForEdit(selectedTenant))
        },

        deleteEvent: (event: any) => {
          this.store.dispatch(deleteTenant(event.id))
        },
        // onSaveFeatures: (feature: any) => {
            // this.store.dispatch(updateTenantFeatureValues(feature))
        // }
        onSaveTenantHost : (featureHost : any)=>{
          debugger
          this.store.dispatch(updateTenantFeatureValues(featureHost))
          console.log("Feature Host" ,featureHost)
        }
      }
    };

    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res && res.items) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          let statusTemplate;
          statusTemplate =  element.activationState ?'<div><span class="badge badge-secondary">Inactive</span></div>': '<div> <span class="badge badge-success">Active</span></div>'
          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.adminEmailAddress} </span></div></div>`;

          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            roleTemplate: 'Admin',
            editionTemplate:element.editionName,
            id: element.id,
            name: element.name,
            adminEmailAddress : element.adminEmailAddress
          }
          this.tenantTableData.push(item);
        });
        const mfeConfig = this.rdsTenantNewMfeConfig
        mfeConfig.input.tenantList = [... this.tenantTableData];
        mfeConfig.input.isShimmer = false;
        this.rdsTenantNewMfeConfig = mfeConfig;
      }
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      if (res) {
        this.tenantData = {};
        this.tenantData['name'] = res.name;
        this.tenantData['adminEmailAddress'] =  res.adminEmailAddress;
         this.tenantData['editionId'] = (res.editionId && res.editionId !== null) ? [res.editionId.toString()] : res.editionId;
        this.tenantData['adminPassword'] = res.adminPassword;
         this.tenantData['activationState'] = res.activationState;
        this.tenantData['id'] = res.id;

console.log(this.tenantData);

        const mfeConfig = this.rdsTenantNewMfeConfig
        mfeConfig.input.tenantData = { ... this.tenantData };
        mfeConfig.input.editShimmer = false
        this.rdsTenantNewMfeConfig = mfeConfig;
      }
    });

    this.store.dispatch(getEditionComboboxItems())
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = [];
          res.items.forEach((element: any) => {
          const item: any = {
            value: element.id,
            displayText: element.displayName,
          }
          this.editionList.push(item);
        });
        
        const mfeConfig = this.rdsTenantNewMfeConfig
        mfeConfig.input.editionList = [... this.editionList];
        this.rdsTenantNewMfeConfig = mfeConfig;
      }
    })

  
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res) {
        this.featureData = []
       res.groups.forEach(elements =>{
        elements.features.forEach(el =>{
           const data ={
            name:el.name,
            value:el.value
           }
           this.featureData.push(data);
        })
        
       })
       console.log('feature Data ' ,this.featureData);

      //  const data = [
      //   {
      //     name : this.tenantFeatures[0].features[0].name,
      //     value : this.tenantFeatures[0].features[0].value
      //   },
      //   {
      //     name: this.tenantFeatures[0].features[1].name,
      //     value: this.tenantFeatures[0].features[1].value,
      //   },
      //   {
      //     name: this.tenantFeatures[0].features[2].name,
      //     value: this.tenantFeatures[0].features[2].value,
      //   },
      //   {
      //     name: this.tenantFeatures[0].features[3].name,
      //     value: this.tenantFeatures[0].features[3].value,
      //   },
      //   {
      //     name: this.tenantFeatures[1].features[0].name,
      //     value: this.tenantFeatures[1].features[0].value,
      //   },
      //   {
      //     name: this.tenantFeatures[1].features[1].name,
      //     value: this.tenantFeatures[1].features[1].value,
      //   },
      //   {
      //     name: this.tenantFeatures[0].features[3].name,
      //     value: this.tenantFeatures[0].features[3].value,
      //   },
        

      // ]
         //this.editionList = res.editions;
        const mfeConfig = this.rdsTenantNewMfeConfig
        mfeConfig.input.tenantFeatureValues =  [ ...this.featureData];

        this.rdsTenantNewMfeConfig = mfeConfig;
      }
    })

  }
 
}
