import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService, ComponentLoaderOptions, ImpersonateTenantInput, UserAuthService } from '@libs/shared';
import { deleteTenant, getEditionComboboxItems, getTenantFeaturesForEdit, getTenantForEdit, getTenantLogin, getTenants, getTenantUsers, impersonatedAuthenticate, saveTenant, selectAllTenants, selectDefaultLanguage, selectEditionComboboxItems,selecteTeantLoginList,selecteTeantUserList, selectTenantFeature, selectTenantInfo, updateTenant, updateTenantFeatureValues } from '@libs/state-management';
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
import { profileSelector } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.selectors';
import { getProfilepic } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.actions';
import { el } from 'date-fns/locale';
import { data } from 'autoprefixer';
// import login from 'playwright/model/login';

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
  tenantSettingsInfo: any = {};
  tenantData: any = {};

  rdsTenantMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompTenantList'
  };
  editionList: any = [];
  tenantFeatures: any = [];
  tenantFeatureValues: any = [];
  tenantLoginLists: any = [];
  tenantTableHeader: TableHeader[] = [
    { displayName: 'Tenant', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true , colWidth: '20%'},
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true , colWidth: '20%'},
    { displayName: 'Subscription End Date', key: 'subscriptionEndDateUtc', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },

  ]

  userTableHeader:TableHeader[]=[
    { displayName: 'Name', key: 'name', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
  ]
  isAnimation: boolean = true;

  tenantTableData: any = [];
  userTableData: any = []   
  loginList:any;

  constructor(public datepipe: DatePipe,   private userAuthService: UserAuthService,
    private store: Store, private translate: TranslateService, 
    private _arrayToTreeConverterService: ArrayToTreeConverterService) { }
  ngOnInit(): void {
    this.isAnimation = true;



    
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    });
    this.rdsTenantMfeConfig = {
      name: 'RdsCompTenantList',
      input: {
        tenantHeaders: this.tenantTableHeader,
        tenantList: this.tenantTableData,
        editionList: this.editionList,
        noDataTitle: 'Currently you do not have tenant',
        isShimmer: true,
        editShimmer: true,
        tenantHeadersUser:this.userTableHeader,        
        userList:this.userTableData,
        tenantLoginList:this.tenantLoginLists
      },
      output: {              
      }
    };

    this.store.dispatch(getEditionComboboxItems())
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res && res.editions) {
        this.editionList  = []
        res.editions.forEach(element => {
          const data = {
            value:element.value,
            some:element.displayText,
            isSelected:element.isSelected,
            icon:'',
            iconWidth:0,
            iconHeight:0,
            iconFill:false,
            iconStroke: true,
            isFree: element.isFree
          }
          this.editionList.push(data);
          // console.log('data' , data);
          
        }); 
       
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.editionList = [...this.editionList];
        this.rdsTenantMfeConfig = mfeConfig;
      }
    })
    this.store.dispatch(getProfilepic());
    this.store.select(profileSelector).subscribe((res: any)=> {})


    this.store.select(selecteTeantLoginList).subscribe((res: any) => {     
      if (res && res.tenantLogin  && res.status == "success") {        
        let targetUrl='http://localhost:8080/login'+'?impersonationToken='+res.tenantLogin.impersonationToken+ '&tenantId=' + this.loginList+ '&tenancyName='+res.tenantLogin.tenancyName;
      this.userAuthService.unauthenticateUser(true,targetUrl);      
      }
    })      

  
    this.store.select(selecteTeantUserList).subscribe((res: any) => {
      this.userTableData=[];
      if (res &&res.tenantUsers&&  res.tenantUsers.items && res.status == "success") {
        res.tenantUsers.items.forEach((element: any) => {                 
          const item: any = {
            name:element.name,
            id:element.value
          }
          this.userTableData.push(item);
        });
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.userList = [... this.userTableData];
        this.rdsTenantMfeConfig = mfeConfig;
      }
    })

    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res && res.tenants.items && res.status == "success") {
        this.isAnimation = false;
        res.tenants.items.forEach((element: any) => {
          const status: string = (element.isActive) ? 'Active' : 'Inactive';
          // const statusTemplate = `<div class="status ${status}">${status}</div>`;
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          const editionTemplate = `<div class="d-flex align-items-center"><div class="edition ${element.editionDisplayName}"></div><div class="">${element.editionDisplayName}</div></div>`;
          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.tenancyName} </span></div></div>`;
          let subscriptionDate = '';
          if (element.subscriptionEndDateUtc) {
            subscriptionDate = this.datepipe.transform(new Date(element.subscriptionEndDateUtc), 'MM/dd/yyyy, h:mm:ss a');
          } else {
            subscriptionDate = '';
          }
          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            subscriptionEndDateUtc: (element.subscriptionEndDateUtc && element.subscriptionEndDateUtc !== null && element.subscriptionEndDateUtc.ts) ? this.datepipe.transform((new Date(element.subscriptionEndDateUtc.ts)), 'MM/dd/yyyy') : '--',  
            editionDisplayName: element.editionDisplayName,
            editionTemplate: (element.editionDisplayName && element.editionDisplayName !== null) ?editionTemplate : '--',
            id: element.id,
            name: element.tenancyName,            
            // creationTime: this.datepipe.transform(new Date(element.creationTime),'dd-MM-yyyy h:mm:ss a')
          }
          this.tenantTableData.push(item);
        });
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantList = [... this.tenantTableData];
        mfeConfig.input.isShimmer = false;
        this.rdsTenantMfeConfig = mfeConfig;
      }
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      if (res && res.tenantInfo && res.status === 'success') {
        this.tenantSettingsInfo = {};
        this.tenantData = {};
        this.tenantSettingsInfo['connectionString'] = res.tenantInfo.connectionString;
        this.tenantSettingsInfo['isActive'] = res.tenantInfo.isActive;
        this.tenantSettingsInfo['isInTrialPeriod'] = res.tenantInfo.isInTrialPeriod;
        this.tenantData['tenancyName'] = res.tenantInfo.tenancyName;
        this.tenantData['tenantName'] = res.tenantInfo.name;
        this.tenantData['adminEmailAddress'] = res.tenantInfo.adminEmailAddress;
        this.tenantData['edition'] = (res.tenantInfo.editionId && res.tenantInfo.editionId !== null) ? res.tenantInfo.editionId.toString(): res.tenantInfo.editionId;
        this.tenantData['unlimitedSubscription'] = (res.tenantInfo.subscriptionEndDateUtc !== null&&res.tenantInfo.subscriptionEndDateUtc) ? false : true;
        this.tenantData['id'] = res.tenantInfo.id;
        this.tenantData['subscriptionEndDate'] = (res.tenantInfo.subscriptionEndDateUtc) ? new Date(res.tenantInfo.subscriptionEndDateUtc) : null;
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantData = { ... this.tenantData };
        mfeConfig.input.tenantSettingsInfo = { ... this.tenantSettingsInfo };
        mfeConfig.input.editShimmer = false
        this.rdsTenantMfeConfig = mfeConfig;
      }
    });
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res && res.tenantFeature && res.status === 'success') {
        this.tenantFeatureValues = res.tenantFeature.featureValues;
        this.tenantFeatures = this.convertArraytoTreedata(res.tenantFeature.features);

        // this.editionList = res.editions;
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantFeatureValues = [... this.tenantFeatureValues];
        mfeConfig.input.tenantFeatures = [... this.tenantFeatures];

        this.rdsTenantMfeConfig = mfeConfig;
      }
    })
  }
  convertArraytoTreedata(data: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      data,
      'parentName',
      'name',
      null,
      'children',
      [
        {
          target: 'label',
          source: 'displayName',
        },
        {
          target: 'expandedIcon',
          value: 'fa fa-folder-open text-warning',
        },
        {
          target: 'collapsedIcon',
          value: 'fa fa-folder text-warning',
        },
        {
          target: 'expanded',
          value: true,
        },
      ],
      1
    );
    return treedaTA;
  }

  

  onSaveTenant (tenant: any)  {
    if (tenant && tenant.tenantInfo) {
      if (tenant.tenantInfo.id) {
        const data: any = {
          tenancyName: tenant.tenantInfo.tenancyName,
          name: tenant.tenantInfo.tenantName,
          connectionString: tenant.tenantSettings.connectionString,
          editionId: +tenant.tenantInfo.edition,
          isActive: tenant.tenantSettings.isActive,
          subscriptionEndDateUtc: (tenant.tenantInfo.unlimitedSubscription||!tenant.tenantInfo.subscriptionEndDate||tenant.tenantInfo.subscriptionEndDate==null) ? null : new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
          isInTrialPeriod: false,
          id: tenant.tenantInfo.id
        };
        this.store.dispatch(updateTenant(data))

      } else {
        const data: any = {
          tenancyName: tenant.tenantInfo.tenancyName,
          name: tenant.tenantInfo.tenantName,
          adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
          adminPassword: tenant.tenantSettings.password,
          connectionString: tenant.tenantSettings.connectionString,
          shouldChangePasswordOnNextLogin: tenant.tenantSettings.changePasswordOnNextLogin,
          sendActivationEmail: tenant.tenantSettings.sendActivationEmail,
          editionId: +tenant.tenantInfo.edition,
          isActive: tenant.tenantSettings.isActive,
          subscriptionEndDateUtc: (tenant.tenantInfo.unlimitedSubscription||!tenant.tenantInfo.subscriptionEndDate||tenant.tenantInfo.subscriptionEndDate==null) ? null : new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
          isInTrialPeriod: false
        };
        this.store.dispatch(saveTenant(data, 30))

      }
    }
    }

    onEditTenant (selectedTenant: any) {
      this.store.dispatch(getTenantForEdit(selectedTenant));
      this.store.dispatch(getTenantFeaturesForEdit(selectedTenant))
    }

    onReset (event: any) {
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      this.tenantFeatureValues = [];
      this.tenantFeatures = [];
      const mfeConfig = this.rdsTenantMfeConfig
      mfeConfig.input.tenantData = { ... this.tenantData };
      mfeConfig.input.tenantSettingsInfo = { ... this.tenantSettingsInfo };
      mfeConfig.input.tenantFeatureValues = [... this.tenantFeatureValues];
      mfeConfig.input.tenantFeatures = [... this.tenantFeatures];
      if (event.newtenant) {
        mfeConfig.input.editShimmer = false;
      } else {
        mfeConfig.input.editShimmer = true;
      }

      this.rdsTenantMfeConfig = mfeConfig;

    }

    deleteEvent (event: any){
      this.store.dispatch(deleteTenant(event.id, 30))
    }

    onSaveFeatures (feature: any){
      this.store.dispatch(updateTenantFeatureValues(feature))
    }

    onSelectTenant(event:any){
      this.store.dispatch(getTenantUsers(event));
    }
    
    onTenantLogIn(event:any){  
      this.loginList=event.tenantId;                   
       const data:any={
        tenantId:this.loginList,
        userId:event.userId
       };
       this.store.dispatch(getTenantLogin(data)); 
                         
    }

  }
