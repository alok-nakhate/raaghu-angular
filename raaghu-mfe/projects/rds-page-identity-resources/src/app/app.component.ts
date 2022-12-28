import { Component, Injector, Input } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { claimTypesAll, deleteIdentityResource, getAllIdentityResources, getIdentityResource, saveIdentityResource } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectA, selectClaimTypesAll } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Claims, Resource } from '../modal/IdentityResourcemodals';

declare let bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public translate: TranslateService, public store: Store) { }
  viewCanvas: boolean = false;
  offCanvasId: string = 'EditIdentityresource'
  title = 'identity-resources';
  offCanvasTitle = 'New Identity Resources'
  activePage: any;
  selectId: any;
  identity: any = {};
  editShimmer: boolean = true;
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  rdsBasicResourceMfeConfig: ComponentLoaderOptions;
  public rdsClaimsMfeConfig: ComponentLoaderOptions;
  PropertyList: any = [];
  PropertyTableData: any = [];
  isEdit: boolean = false;
  BasicResource: Resource;
  public navtabsItems: any = [

  ];
  PropertyTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: false, required: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, sortable: false, required: true },
  ]

  ResourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'Name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'DisplayName',
      key: 'Displayname',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'Description',
      dataType: 'text',
    },
  ];
  ResourceTableData: any = [];
  Properties: any = ([] = [{ key: 'ShairedSecrets', Value: '12345' }]);
  finalResourceData: any;
  ResourceData: any = [];
  basicInfo: any = [];
  clientResourceData: any = [
    {
      displayName: 'abc',
      left: false,
      id: '1',
      name: 'aaa',
    },
    {
      displayName: 'eee',
      left: false,
      id: '4',
      name: 'test',
    }

  ];
  actions = [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }];
  onActionSelection(event: any) {
    if (event.actionId === 'delete') {

      this.store.dispatch(deleteIdentityResource(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.EditIdentyresource(event)
      // this.selectId = event.selectedData.id;
      // this.BasicResource = event.selectedData
      // this.openCanvas(true);
      this.store.dispatch(getIdentityResource(event.selectedData.id))
    }
  }

  ngOnInit(): void {

    this.activePage = 0;
    this.rdsresourceTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ResourceTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.ResourceTableData,
        recordsPerPage: 10,
        pagination: true,
        inlineEdit: false,
        actions: this.actions,
        noDataTitle: 'Currently you do not have identity resource'
      },
      output: {
      }
    };

    this.store.dispatch(getAllIdentityResources());
    this.store.select(selectA).subscribe((res: any) => {
      this.ResourceTableData = [];
      if (res && res.items) {
        res.items.forEach((ele: any) => {
          const data: any = {
            id: ele.id,
            Name: ele.name,
            Displayname: ele.displayName,
            Description: ele.description
          }
          this.ResourceTableData.push(data);
        });
        const mfeConfig = this.rdsresourceTableMfeConfig;
        mfeConfig.input.tableData = [...this.ResourceTableData];
        mfeConfig.input.isShimmer = false;
        this.rdsresourceTableMfeConfig = mfeConfig;
      }
    })

    this.store.dispatch(claimTypesAll());
    this.store.select(selectClaimTypesAll).subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          let item = {
            id: element.id,
            displayName: element.name,
            left: false
          };
          this.ResourceData.push(item);
        })

      }
    })
  }
  openCanvas(edit: boolean = false): void {
    this.viewCanvas = true;
    this.navtabsItems = [{
      label: 'Basics',
      tablink: '#Basics',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#Claim',
      ariacontrols: 'Claim',
    },
    ]
    this.activePage = 0;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offCanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

  }

  updateIdentity(id) {
    if (id == 0) {
      this.editShimmer = false;
    } else {
      this.editShimmer = true;
    }
    this.store.dispatch(getIdentityResource(id))
  }
  EditIdentyresource(event): void {
    this.viewCanvas = true;
    this.offCanvasTitle = 'Edit Identity Resources';
    this.navtabsItems = [{
      label: 'Basics',
      tablink: '#Basics',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#Claim',
      ariacontrols: 'Claim',
    },
    {
      label: 'Properties',
      tablink: '#Properties',
      ariacontrols: 'Properties',
    },]
    this.selectId = event.selectedData.id;
    this.BasicResource = event.selectedData
    setTimeout(() => {
      var offcanvas = document.getElementById('EditIdentityresource');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }
  onBasicInfoSave(event: any) {
    if (event.next) {
      this.activePage = 1;
    }
    this.identity.basicInfo = event.scopeResource

  }
  onClientResourceSave(event: any) {
    this.identity.ResourceData = event;
  }

  onSave() {

    const _data: any[] = [];
    this.identity.ResourceData.forEach(ele => {
      const _claimsData = {
        identityResourceId: ele.id,
        type: ele.displayName
      }
      _data.push(_claimsData)
    });
    const data: any = {
      name: this.basicInfo.name,
      description: this.basicInfo.description,
      displayName: this.basicInfo.displayName,
      enabled: this.basicInfo.enables,
      required: this.basicInfo.required,
      emphasize: this.basicInfo.emphasize,
      showInDiscoveryDocument: this.basicInfo.showInDiscoveryDocument,
      userClaims: _data,
      properties: []
    }
    this.store.dispatch(saveIdentityResource(data));
    this.activePage = 0
    this.viewCanvas = false
    this.updateIdentity(data)
  }
  // onEditionSave(data) {
  //   if (data) {
  //     if (data.id !== undefined) {
  //       this.store.dispatch(getIdentityResource(data.id))
  //     } else {
  //       this.store.dispatch(saveIdentityResource(data))
  //     }
  //   }
  // }
}
