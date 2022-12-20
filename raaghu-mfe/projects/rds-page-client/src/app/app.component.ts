import { Component, TemplateRef } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getAllApiResources } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
import { selectAllApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { getAllClients, getPermissions, saveClient } from 'projects/libs/state-management/src/lib/state/clients/clients.actions';
import { selectAllClients, selectAllPermissions } from 'projects/libs/state-management/src/lib/state/clients/clients.selector';
import { getAllIdentityResources } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectA } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  viewCanvas: boolean = false;
  activePage: number = 0;
  clientUniqueId: any;
  offcanvasId: string = 'client_canvas';
  isEdit = false;
  rdsClientMfeConfig: ComponentLoaderOptions;
  rdsClientSecretsMfeConfig: ComponentLoaderOptions;
  rdsClientBasicsMfeConfig: ComponentLoaderOptions;
  rdsClientResourcesMfeConfig: ComponentLoaderOptions;
  rdsPermissionRoleMfeConfig: ComponentLoaderOptions;
  rdsClientAdvancedMfeConfig: ComponentLoaderOptions;
  permissionTreeData: any = [];
  emitPermissionsData = { name: undefined, permissions: { permissions: [] } };
  emitClientData: any = {};

  clientTableHeaders: TableHeader[] = [
    { displayName: 'Client ID', key: 'clientId', dataType: 'text', filterable: true, sortable: true },
    { displayName: 'Name', key: 'clientName', dataType: 'text', filterable: true, sortable: true },
    { displayName: 'Description', key: 'description', dataType: 'text' }
  ];
  clientSecretTableHeaders: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', filterable: true, sortable: true, required: true },
    { displayName: 'Value', key: 'value', dataType: 'number', filterable: true, sortable: true, required: true },
    { displayName: 'Expiration', key: 'expiration', dataType: 'text', filterable: true, sortable: true, required: true },
    { displayName: 'Description', key: 'description', dataType: 'text', required: true }
  ];
  content!: TemplateRef<any>;
  clientList: any = [];
  apiResources: any = [];
  clientSecretList: any = [{}];
  secrets: any;
  client: any = {};
  canvasTitle: string = 'New Client';
  public navtabsItems: any[] = [
    {
      label: 'Basics',
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: 'Secrets',
      tablink: '#secrets',
      ariacontrols: 'secrets',

    },
    {
      label: 'Resources',
      tablink: '#resources',
      ariacontrols: 'resources',
    },
    {
      label: 'Permissions',
      tablink: '#permissions',
      ariacontrols: 'permissions',
    }
    // {
    //   label: 'Advanced',
    //   tablink: '#advanced',
    //   ariacontrols: 'advanced',
    // }
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {

    // Client Data Table
    this.rdsClientMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableData: this.clientList,
        tableHeaders: this.clientTableHeaders,
        recordsPerPage: 10,
        inlineEdit: false,
        width: '100%',
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have client'
      },

      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'edit') {
            this.clientUniqueId = event.selectedData.id;
            this.client.basicInfo = event.selectedData;
            this.client.resources = (event.selectedData.resources) ? event.selectedData.resources : [];
            this.clientSecretList = event.selectedData.secrets;
            const mfeConfig = this.rdsClientSecretsMfeConfig
            mfeConfig.input.tableData = [... this.clientSecretList];
            this.rdsClientSecretsMfeConfig = mfeConfig;
            const clientBasicsMfeConfig = this.rdsClientBasicsMfeConfig
            clientBasicsMfeConfig.input.clientInfo = this.client.basicInfo;
            this.rdsClientBasicsMfeConfig = clientBasicsMfeConfig;
            const ClientResourcesMfeConfig = this.rdsClientResourcesMfeConfig
            ClientResourcesMfeConfig.input.clientResources = [...this.client.resources];
            this.rdsClientResourcesMfeConfig = ClientResourcesMfeConfig;
            this.newClient(undefined)
          } else if (event.actionId === 'delete') {
            const index: any = this.clientList.findIndex((x: any) => x.id === event.id);
            if (index !== -1) {
              this.clientList.splice(index, 1);
              const mfeConfig = this.rdsClientMfeConfig
              mfeConfig.input.tableData = [... this.clientList];
              this.rdsClientMfeConfig = mfeConfig;
            }
          }
        }
      }
    };

    // Get all clients
    this.store.dispatch(getAllClients());
    this.store.select(selectAllClients).subscribe((res) => {
      this.clientList = [];
      if (res && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            clientId: element.clientId,
            clientName: element.clientName,
            description: element.description
          }
          this.clientList.push(item);
        });
      };
      const mfeConfig = this.rdsClientMfeConfig
      mfeConfig.input.tableData = [...this.clientList];
      mfeConfig.input.refresh = true;
      this.rdsClientMfeConfig = { ...mfeConfig };
    });

    // Advanced tab
    this.rdsClientAdvancedMfeConfig = {
      name: 'RdsCompClientAdvanced',
      input: {},
      output: {}
    }

    // Basics tab
    this.rdsClientBasicsMfeConfig = {
      name: 'RdsCompClientBasics',
      input: {
        clientBasics: {},
      },
      output: {
        clientBasicInfo: (eventData: any) => {
          // console.log('clientBasicInfo', eventData);
          this.emitClientData = {...eventData};
          // this.getClientInfo(eventData)
        }
      }
    };

    // Resources tab
    this.rdsClientResourcesMfeConfig = {
      name: 'RdsCompClientResources',
      input: {
        identityResourcesData: undefined,
        apiResourcesData: undefined,
      },
      output: {

      }
    };

    // Identity Resorces API
    this.store.dispatch(getAllIdentityResources());
    this.store.select(selectA).subscribe(res => {
      if (res && res.items) {
        const data: any[] = [];
        res.items.forEach(element => {
          const item: any = {
            description: element.description,
            displayName: element.displayName,
            emphasize: element.emphasize,
            enabled: element.enabled,
            extraProperties: element.extraProperties,
            id: element.id,
            name: element.name,
            properties: element.properties,
            required: element.required,
            showInDiscoveryDocument: element.showInDiscoveryDocument,
            userClaims: element.userClaims
          };
          data.push(item);
        });
        this.rdsClientResourcesMfeConfig.input.identityResourcesData = [...data];
      }
    });

    // Api Resorces API
    this.store.dispatch(getAllApiResources()),
      this.store.select(selectAllApiResource).subscribe(res => {
        const data: any[] = [];
        if (res && res.items) {
          res.items.forEach(element => {
            const item: any = {
              allowedAccessTokenSigningAlgorithms: element.allowedAccessTokenSigningAlgorithms,
              description: element.description,
              displayName: element.displayName,
              enabled: element.enabled,
              extraProperties: element.extraProperties,
              id: element.id,
              name: element.name,
              properties: element.properties,
              scopes: element.scopes,
              secrets: element.secrets,
              showInDiscoveryDocument: element.showInDiscoveryDocument,
              userClaims: element.userClaims
            };
            data.push(item);
          });
          this.rdsClientResourcesMfeConfig.input.apiResourcesData = [...data];
        }
      })

    // Secret tab
    this.rdsClientSecretsMfeConfig = {
      name: 'RdsCompSecrets',
      input: {},
      output: {
        secretDataInfo: (event: any) => {
          // console.log('secret Data', event);
          this.emitClientData.clientSecrets = [...event]
          // this.emitClientData = {...event};
        }
      }
    };

    this.store.dispatch(getAllApiResources());
    this.store.select(selectAllApiResource).subscribe((res) => {
      this.apiResources = [];
      if (res) {
        res.items.forEach((element: any) => {
          const item: any = {
            displayName: element.displayName,
            name: element.name,
            left: element.description,
            id: element.id
          }
          this.apiResources.push(item);
        });
      }

      const mfeConfig = this.rdsClientMfeConfig
      mfeConfig.input.apiResources = [...this.apiResources];
      mfeConfig.input.refresh = true;
      this.rdsClientMfeConfig = { ...mfeConfig };
    });

    // Permission
    this.rdsPermissionRoleMfeConfig = {
      name: 'RdsCompPermissionTree',
      input: {
        treeData: this.permissionTreeData,
        roleName: undefined,
        isEdit: false
      },
      output: {
        getAllselectedPermissions: (event: any) => {
          this.emitPermissionsData.permissions.permissions = [];
          this.emitPermissionsData.permissions.permissions = event;
        }
      }
    }


  }

  newClient(event: any): void {
    if (event) {
      this.clientUniqueId = undefined;
      event.stopPropagation();
      this.canvasTitle = 'New Client';
    } else {
      this.canvasTitle = 'Edit Client';
    }
    this.activePage = 0;
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
    // Permissions
    this.store.dispatch(getPermissions('admin'));
    this.store.select(selectAllPermissions).subscribe(res => {
      if (res && res.groups) {
        this.permissionTreeData = res.groups;
        const mfeConfig = this.rdsPermissionRoleMfeConfig
        mfeConfig.input.treeData = [... this.permissionTreeData];
        mfeConfig.input.roleName = res.entityDisplayName;
        mfeConfig.input.isEdit = false;
        this.rdsPermissionRoleMfeConfig = { ...mfeConfig };
      }
    });
  };

  close(): void {
    this.viewCanvas = false;
    this.activePage = 0;
    this.clientUniqueId = undefined
  }

  addSecrets(): void {
    this.clientSecretList.push(
      { id: this.clientSecretList.length + 1, type: '', value: '', description: '', expiration: '', isEdit: true },
    );
    const mfeConfig = this.rdsClientSecretsMfeConfig
    mfeConfig.input.tableData = [... this.clientSecretList];
    this.rdsClientSecretsMfeConfig = mfeConfig;
  }

  getClientInfo(event: any): void {
    this.client.basicInfo = event;
  }
  getSelectedResources(event: any): void {
    this.client.resources = event;
  }

  save() {
    console.log('Client Data: ', this.emitClientData);
    
    // this.store.dispatch(saveClient())
  }

  getBtnName(): string {
    if (this.clientUniqueId) {
      return 'Update';
    }
    return 'Create';
  }

  getNavTabItems(): any {
    if (this.isEdit) {
      this.navtabsItems.push({ label: 'Advanced', tablink: '#advanced', ariacontrols: 'advanced' });
      this.navtabsItems[0].label = 'Basics';
      this.navtabsItems[1].label = 'Secrets';
      this.navtabsItems[2].label = 'Resources';
      this.navtabsItems[3].label = 'Permissions';
      this.navtabsItems[4].label = 'Advanced';
      return this.navtabsItems;
    } else if (!this.isEdit) {
      this.navtabsItems[0].label = 'Basics';
      this.navtabsItems[1].label = 'Secrets';
      this.navtabsItems[2].label = 'Resources';
      this.navtabsItems[3].label = 'Permissions';
      return this.navtabsItems;
    }
  }
}
