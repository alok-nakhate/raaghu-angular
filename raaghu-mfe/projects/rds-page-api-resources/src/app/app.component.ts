import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiResourceClaimDto } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { deleteApiResource, getAllApiResources, getApiResource, saveApiResource, updateApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
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
  public selectedSecrets: any = [];
  public basicInfo: any;

  constructor(private store: Store,
    public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    const offcanvas = document.getElementById('api-resource-offcanvas');
    if (offcanvas) {
      offcanvas.addEventListener('hidden.bs.offcanvas', event => {
        this.viewCanvas = false;
        this.basicInfo = undefined;
        this.selectedProperties = [];
        this.userClaims = [];
        this.selectedSecrets = [];
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
        this.basicInfo['enables'] = res.enabled;
        this.basicInfo['algorithm'] = res.allowedAccessTokenSigningAlgorithms;
        this.basicInfo['showInDiscoveryDocument'] = res.showInDiscoveryDocument;
        this.secrets = res.secrets;
        // this.scopes = res.scopes;
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



  onBasicInfoChange(event): void {
    this.basicInfo = event;
  }

  save(): void {
    if (this.basicInfo) {
      const body: any = {
        name: this.basicInfo.name,
        displayName: this.basicInfo.displayName,
        description: this.basicInfo.description,
        allowedAccessTokenSigningAlgorithms: this.basicInfo.algorithm,
        userClaims: []
      }
      this.userClaims.forEach((claim: any) => {
        if (claim) {
          const _claim = {
            apiResourceId: this.basicInfo.id,
            type: this.basicInfo.displayName
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
      if (this.selectedSecrets && this.selectedSecrets.length > 0) {
        const selectedSecrets: any = [];
        this.selectedSecrets.forEach(element => {
          const data: any = {
            apiResourceId: this.basicInfo.id,
            type: element.type,
            value: element.value,
            expiration: element.expiration,
            description: element.description
          }
          selectedSecrets.push(data)
        });
        this.basicInfo['secrets'] = selectedSecrets;
      }
      if (this.basicInfo.id) {
        body['enabled'] = this.basicInfo.enables;
        this.store.dispatch(updateApiResource({ body: body, id: this.basicInfo.id }));
      } else {
        body['showInDiscoveryDocument'] = this.basicInfo.showInDiscoveryDocument;
        this.store.dispatch(saveApiResource(body));
      }
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


  onSecretsChange(event: any): void {
    this.selectedSecrets = event;
  }


  onPropertyChange(event): void {
    if (event && event.property) {
      this.selectedProperties = event.properties;
    }
  }

  onTabClick(index: any): void {
    this.activeTab = index
  }

  getBtnName(): string {
    return this.basicInfo && this.basicInfo.id ? 'Update' : 'Create';
  }

}
