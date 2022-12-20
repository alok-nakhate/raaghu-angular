import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'app-rds-comp-client-basics',
  templateUrl: './rds-comp-client-basics.component.html',
  styleUrls: ['./rds-comp-client-basics.component.scss']
})
export class RdsCompClientBasicsComponent implements OnInit, OnChanges {
  // View Child
  @ViewChild('clientBasicsForm') clientBasicsForm: NgForm;

  // Input Decorators
  @Input() clientBasics: any;
  @Input() clientInfo: any = undefined;
  @Input() isEdit: boolean = false;

  // Output Decorators
  @Output() clientBasicInfo = new EventEmitter<any>();

  // Properties
  rdsCallBackUrlTable: ComponentLoaderOptions;
  rdsSignoutTableConfig: ComponentLoaderOptions;
  rdsAllowedCorsOriginTable: ComponentLoaderOptions;
  callBackUrlArray: any[] = [];
  signoutUrlArray: any[] = [];
  corsOriginArray: any[] = [];
  callBackUrl = '';
  signoutUrl = '';
  corsOrigin = '';

  headers: TableHeader[] = [{ displayName: 'Origin', key: 'origin', dataType: 'text', dataLength: 30, required: true, sortable: true }];
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];


  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
   this.clientBasicsObjFn();
  }

  ngOnInit(): void {
    this.clientBasicsObjFn();
    setTimeout(() => {
      if (this.clientBasicsForm && this.clientBasics) {
        this.clientBasicsForm.statusChanges.subscribe(res => {
          this.clientBasicInfo.next(this.clientBasics);
        })
      }
    }, 100);

    // callBackUrlTable
    this.rdsCallBackUrlTable = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.headers,
        tableData: this.callBackUrlArray,
        inlineEdit: false,
        pagination: true,
        recordsPerPage: 3,
        actions: this.actions,
        isShimmer: false
      },
      output: {
        onActionSelection: (actionEvent: any) => {
          const deleteData = this.callBackUrlArray.find(x => x.origin == actionEvent.selectedData.origin);
          const deleteDataIndex = this.callBackUrlArray.indexOf(deleteData, 0);
          if (deleteDataIndex != undefined) this.callBackUrlArray.splice(deleteDataIndex, 1);
          this.rdsCallBackUrlTable.input.tableData = this.callBackUrlArray;
        }
      },
    }

    // rdsSignoutTable
    this.rdsSignoutTableConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.headers,
        tableData: this.signoutUrlArray,
        inlineEdit: false,
        pagination: true,
        recordsPerPage: 3,
        actions: this.actions,
        isShimmer: false
      },
      output: {
        onActionSelection: (actionEvent: any) => {
          const deleteData = this.signoutUrlArray.find(x => x.origin == actionEvent.selectedData.origin);
          const deleteDataIndex = this.signoutUrlArray.indexOf(deleteData, 0);
          if (deleteDataIndex != undefined) this.signoutUrlArray.splice(deleteDataIndex, 1);
          this.rdsSignoutTableConfig.input.tableData = this.signoutUrlArray;
        }
      },
    }

    // rdsAllowedCorsOriginTable  
    this.rdsAllowedCorsOriginTable = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.headers,
        tableData: this.corsOriginArray,
        inlineEdit: false,
        pagination: true,
        recordsPerPage: 3,
        actions: this.actions,
        isShimmer: false
      },
      output: {
        onActionSelection: (actionEvent: any) => {
          const deleteData = this.corsOriginArray.find(x => x.origin == actionEvent.selectedData.origin);
          const deleteDataIndex = this.corsOriginArray.indexOf(deleteData, 0);
          if (deleteDataIndex != undefined) this.corsOriginArray.splice(deleteDataIndex, 1);
          this.rdsAllowedCorsOriginTable.input.tableData = this.corsOriginArray;
        }
      },
    }
  }

  // Repeatitive functions
  clientBasicsObjFn() {
    if (!this.clientBasics.clientId) {
      this.clientBasics = {};
      this.clientBasics['clientId'] = '';
      this.clientBasics['clientName'] = '';
      this.clientBasics['description'] = false;
      this.clientBasics['clientUri'] = '';
      this.clientBasics['logoUri'] = '';
      this.clientBasics['allowedCorsOrigins'] = [];
      this.clientBasics['redirectUris'] = [];
      this.clientBasics['postLogoutRedirectUrisL'] = [];
      this.clientBasics['requireConsent'] = false;
      this.clientBasics['requireRequestObject'] = false;
      this.clientBasics['allowRememberConsent'] = true;
      this.clientBasics['enabled'] = true;
      this.clientBasics['allowOfflineAccess'] = true;
      this.clientBasics['frontChannelLogoutUri'] = null;
      this.clientBasics['backChannelLogoutUri'] = null;
      this.clientBasics['backChannelLogoutSessionRequired'] = true;
      this.clientBasics['allowedIdentityTokenSigningAlgorithms'] = null;
      this.clientBasics['id'] = '';
    }
  }

  // Functions from html
  addCallBackUrl(event: string) {
    this.callBackUrlArray.push({ clientId: this.callBackUrlArray.length + 1, origin: event });
    this.rdsCallBackUrlTable.input.tableData = [...this.callBackUrlArray];
    this.callBackUrl = '';
  }

  addSignoutUrl(event: string) {
    this.signoutUrlArray.push({ clientId: this.signoutUrlArray.length + 1, origin: event });
    this.rdsSignoutTableConfig.input.tableData = [...this.signoutUrlArray];
    this.signoutUrl = '';
  }

  addCorsOrigin(event: string) {
    this.corsOriginArray.push({ clientId: this.corsOriginArray.length + 1, origin: event });
    this.rdsAllowedCorsOriginTable.input.tableData = [...this.corsOriginArray];
    this.corsOrigin = '';
  }

}

































  // clientId: '',
  // clientName: '',
  // description: '',
  // clientUri: '',
  // logoUri: '',
  // allowedCorsOrigins: [],
  // redirectUris: [],
  // postLogoutRedirectUrisL: [],
  // requireConsent: false,
  // requireRequestObject: false,
  // allowRememberConsent: true,
  // enabled: true,
  // allowOfflineAccess: true,
  // frontChannelLogoutUri: null,
  // frontChannelLogoutSessionRequired: true,
  // backChannelLogoutUri: null,
  // backChannelLogoutSessionRequired: true,
  // allowedIdentityTokenSigningAlgorithms: null,
  // id: ''
