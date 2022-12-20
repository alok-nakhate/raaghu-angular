import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { deleteEdition, getEditionInfo, getEditions, saveEdition, updateEdition } from 'projects/libs/state-management/src/lib/state/edition/edition.action';
import { selectAllEditions, selectEditionInfo } from 'projects/libs/state-management/src/lib/state/edition/edition.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnInit {

  isAnimation: boolean = true;

  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  public rdsEditionMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store,private translate:TranslateService, private _arrayToTreeConverterService: ArrayToTreeConverterService, private alertService: AlertService) { }

  EditionDatatable: any = [];
  featureList: any = [];
  freeEditions: any = [];
  editionData: any = {}

  editionList: any = [];
  defaultEditionName: any[] = [];

  ngOnInit(): void {
    this.isAnimation = true;
    // this.subscribeToAlerts();
    this.rdsEditionMfeConfig = {
      name: 'RdsCompFeaturesListNew',
      input: {
        recordsPerpage: 10,
        featureList: this.featureList,
        noDataTitle: 'Currently you do not have edition',
        editionList: this.editionList,
        isShimmer:true,
        editShimmer:true
      },
      output: {
        onEditionSave: (edition) => {
          if (edition && edition.editionBasicInfo) {
            if (edition.editionBasicInfo.id) {
              this.store.dispatch(updateEdition(edition))
            } else {
              const data: any = {
                displayName : edition.editionBasicInfo.editionName ,
                planId : edition.editionBasicInfo.editionPlan
              }
              this.store.dispatch(saveEdition(data))
            }
    }
  }
}
    }
    // const mfeConfig = this.rdsEditionMfeConfig
    // mfeConfig.input.isShimmer =false
    // this.rdsEditionMfeConfig = mfeConfig;
  
    this.store.dispatch(getEditions());
    this.store.select(selectAllEditions).subscribe((res: any) => {
      // this.EditionDatatable = [];
      if (res) {
        this.isAnimation = false;
        this.editionData = {};
        this.editionData['editionName'] = res.displayName;
        this.editionData['editionPlan'] = res.planId;
        // res.items.forEach(element => {
        //   const edition: any = {
        //     editionname: element.displayName,
        //     price: element.annualPrice,
        //     trialPeriod: element.trialDayCount,
        //     expiringEdition: element.expiringEditionDisplayName,
        //     id: element.id,
        //     name:element.displayName,          
        //   }
        //   // this.EditionDatatable.push(edition);
        // });
        // res.items.forEach(elements =>{
        //   let  data = {...this.editionData,
        //     'EditionName':elements.displayName
        //     }
        //     this.Dataset.push(data);
        // })
        const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
        rdsEditionMfeConfig.input.editionData ={...this.editionData};
        rdsEditionMfeConfig.input.editionData =res.editionList;
        rdsEditionMfeConfig.input.editionData =res.editions;
        rdsEditionMfeConfig.input.isShimmer=false
        this.rdsEditionMfeConfig = rdsEditionMfeConfig;
      }

    }, (err: any) => {
    })
    this.store.dispatch(getEditionInfo("asdf"))
    this.store.select(selectEditionInfo).subscribe((res: any) => {
      // if (res && res.editionInfo && res.editionInfo.featureValues && res.status == "success") {
      //   this.featureList = this.convertArraytoTreedata(res.editionInfo.features)
      //   const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
      //   rdsEditionMfeConfig.input.featureList = [...this.featureList];
      //   rdsEditionMfeConfig.input.selectedFeatures = [...res.editionInfo.featureValues];
      //   rdsEditionMfeConfig.input.selectedEdition = { ...res.editionInfo.edition };
      //   rdsEditionMfeConfig.input.editShimmer=false;
      //   this.rdsEditionMfeConfig = { ...rdsEditionMfeConfig };
      // }

    })
    // this.store.dispatch(getEditions())
    // this.store.select(selectAllEditions).subscribe((res: any) => {
    //   if (res && res.editionComboboxItem) {
    //     this.editionList = [];
    //     this.freeEditions = [];
    //     this.editionList = res.editionComboboxItem;
    //     this.freeEditions = res.editionComboboxItem.filter((x: any) => x.isFree);
    //     const mfeConfig = this.rdsEditionMfeConfig
    //     mfeConfig.input.editionList = [... this.editionList];
    //     mfeConfig.input.freeEditions = [...this.freeEditions]
    //     this.rdsEditionMfeConfig = mfeConfig;
    //   }
    // });
    //this.store.dispatch(getDefaultEditionName())
    //this.store.select(selectDefaultNameComboboxItems).subscribe((res: any) => {
    //  if (res && res.defaultEditionNameItem && res.defaultEditionNameItem.length > 0) {
    //    this.defaultEditionName = res.defaultEditionNameItem;
    //    const mfeConfig = this.rdsEditionMfeConfig
    //    mfeConfig.input.defaultEditionName = [this.defaultEditionName];
    //    this.rdsEditionMfeConfig = mfeConfig;
    //  }
    //});
    // this.store.select(selectTenant).subscribe((res: any) => {
    //   if (res && res.status==='success') {
    //     const mfeConfig = this.rdsEditionMfeConfig
    //     mfeConfig.input.tenantCount =res.tenantCount;
    //     this.rdsEditionMfeConfig = mfeConfig;
    //   }
    // })
    //}
  // convertArraytoTreedata(data: any) {
  //   const treedaTA = this._arrayToTreeConverterService.createTree(
  //     data,
  //     'parentName',
  //     'name',
  //     null,
  //     'children',
  //     [
  //       {
  //         target: 'label',
  //         source: 'displayName',
  //       },
  //       {
  //         target: 'expandedIcon',
  //         value: 'fa fa-folder-open text-warning',
  //       },
  //       {
  //         target: 'collapsedIcon',
  //         value: 'fa fa-folder text-warning',
  //       },
  //       {
  //         target: 'expanded',
  //         value: true,
  //       },
  //       {
  //         target: 'selectable',
  //         targetFunction(item) {
  //             return item.inputType.name === 'CHECKBOX';
  //         },
  //     },
  //     ],
  //     1
  //   );
  //   return treedaTA;
  // }
  // subscribeToAlerts() {
  //   this.alertService.alertEvents.subscribe((alert) => {
  //     this.currentAlerts = [];
  //     const currentAlert: any = {
  //       type: alert.type,
  //       title: alert.title,
  //       message: alert.message,
  //     };
  //     this.currentAlerts.push(currentAlert);
  //     const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
  //     rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
  //     this.rdsAlertMfeConfig = rdsAlertMfeConfig;
  //   });

  // }
        }
      }