import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiResourceClaimDto } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { deleteApiResource, getAllApiResources, getApiResource, saveApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
import { selectAllApiResource, selectApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { claimTypesAll } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectClaimTypesAll } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  public resourceTableData: any = [];
  public navtabsItems: any = [];
  public userClaims: ApiResourceClaimDto[] = [];
  public claims: any = [];
  public activeTab: number = 0;
  public viewCanvas: boolean = false;
  public offCanvasTitle: string = 'New Api Resource';
  public resourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'name',
      dataType: 'text'
    },
    {
      displayName: 'Display Name',
      key: 'displayName',
      dataType: 'text'
    },
    {
      displayName: 'Description',
      key: 'description',
      dataType: 'text'
    }
  ];
  public selectedProperties: any = [];
  public propertyTableHeader: TableHeader[] = [
    {
      displayName: 'Key',
      key: 'key',
      dataType: 'text'
    },
    {
      displayName: 'Vlaue',
      key: 'value',
      dataType: 'text'
    },
  ];
  public actions: any = [
    {
      id: 'edit',
      displayName: 'Edit'
    },
    {
      id: 'delete',
      displayName: 'Delete'
    }
  ];
  public property_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete'
    }
  ];
  public propertyTableData: any = [];
  public secrets: any = [];
  public scopes: any = [];

  public basicInfo: any;
  public _basicInfo: any;

  constructor(private store: Store,
    public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    const offcanvas = document.getElementById('api-resource-offcanvas');
    if (offcanvas) {
      offcanvas.addEventListener('hidden.bs.offcanvas', event => {
        this.viewCanvas = false;
      });
    }
  }


  ngOnInit(): void {
    this.store.dispatch(getAllApiResources());
    this.store.select(selectAllApiResource).subscribe((res: any) => {
      this.resourceTableData = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((ele: any) => {
          if (ele) {
            this.resourceTableData.push(ele);
          }
        });
      }
    });
    this.store.dispatch(claimTypesAll());
    this.store.select(selectClaimTypesAll).subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          let item = {
            id: element.id,
            displayName: element.name,
            left: false
          };
          this.claims.push(item);
        })

      }
    });
    this.store.select(selectApiResource).subscribe((res: any) => {
      if (res) {
        this.propertyTableData = res.properties;
        this.basicInfo['name'] = res.name;
        this.basicInfo['displayName'] = res.displayName;
        this.basicInfo['id'] = res.id;
        this.basicInfo['description'] = res.description;
        this.basicInfo['enabled'] = res.enabled;
        this.basicInfo['algorithm'] = res.allowedAccessTokenSigningAlgorithms;
        this.basicInfo['enabled'] = res.enabled;
        this.basicInfo['showInDiscoveryDocument'] = res.showInDiscoveryDocument;
        this.secrets = res.secrets;
        this.scopes = res.scopes;
        if (res.userClaims) {
          this.claims.forEach((claim: any) => {
            if (claim) {
              const _claim: any = res.userClaims.find((x: any) => x.type == claim.displayName);
              if (_claim) {
                claim.left = true;
              }
            }
          })
        }
      }
    })



  }

  onActionSelection(event: any): void {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteApiResource(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.viewCanvas = true;
      this.navtabsItems = [
        {
          label: 'Basics',
          tablink: '#Basics',
          ariacontrols: 'Basics',
        },
        {
          label: 'Claims',
          tablink: '#Claims',
          ariacontrols: 'Claims',
        },
        {
          label: 'Secrets',
          tablink: '#Secrets',
          ariacontrols: 'Secrets',
          hide: true
        },
        {
          label: 'Properties',
          tablink: '#Properties',
          ariacontrols: 'Properties',
          hide: true
        },
      ]
      this.store.dispatch(getApiResource(event.selectedData.id));
      setTimeout(() => {
        var offcanvas = document.getElementById('api-resource-offcanvas');
        var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
        bsOffcanvas.show();
      }, 100);

    }
  }

  onClaimSelection(event): void {
    this.userClaims = event;
  }

  onClaimSave(): void {
    this.onBasicInfoSave(this._basicInfo);
  }

  onFormValid(event): void {
    this._basicInfo = event;
  }

  onBasicInfoSave(data: any): void {
    if (data) {
      const body: any = {
        name: data.name,
        displayName: data.displayName,
        description: data.description,
        allowedAccessTokenSigningAlgorithms: data.algorithm,
        showInDiscoveryDocument: data.showInDiscoveryDocument,
        userClaims: []
      }
      this.userClaims.forEach((claim: any) => {
        if (claim) {
          const _claim = {
            apiResourceId: data.id,
            type: data.displayName
          }
          body.userClaims.push(_claim);
        }
      })
      if (this.selectedProperties && this.selectedProperties.length > 0) {
        const properties: any = [];
        this.selectedProperties.forEach(element => {
          const data: any = {
            apiResourceId: this.basicInfo.id,
            key: element.key,
            value: element.value
          }
          properties.push(data)
        });
        this.basicInfo['properties'] = properties;
      }

      this.store.dispatch(saveApiResource(body))
    }
  }

  openCanvas(): void {
    this.viewCanvas = true;
    this.navtabsItems = [
      {
        label: 'Basics',
        tablink: '#Basics',
        ariacontrols: 'Basics',
      },
      {
        label: 'Claims',
        tablink: '#Claims',
        ariacontrols: 'Claims',
      }
    ]
    setTimeout(() => {
      var offcanvas = document.getElementById('api-resource-offcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

  }
  onPropertyResourceSave(event): void {
    if (event && event.property) {
      this.selectedProperties = event.properties;
      this.onBasicInfoSave(this.basicInfo);
    }
  }

  onTabClick(index: any): void {
    this.activeTab = index
  }

}
