import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsRadioButtonModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompUserPermissionsComponent } from './rds-comp-user-permissions.component';
import { RdsCompUserBasicsComponent } from '../rds-comp-user-basics/rds-comp-user-basics.component';
import { RdsCompAlertComponent } from '../rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompFeaturesComponent } from '../rds-comp-features/rds-comp-features.component';
import { RdsCompPermissionTreeComponent } from '../rds-comp-permission-tree/rds-comp-permission-tree.component';

export default {
  title: 'Components/User Permissions', component: RdsCompUserPermissionsComponent,
  decorators: [moduleMetadata({
    declarations: [
      RdsCompUserBasicsComponent,
      RdsDataTableComponent, RdsCompPermissionTreeComponent, RdsCompAlertComponent]
    , imports: [FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule, SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, RdsNavTabModule, RdsSelectListModule, RdsCheckboxModule, RdsDatepickerModule, RdsRadioButtonModule, RdsCounterModule], providers: [FormBuilder,],
  })]
} as Meta;

const Template: Story<RdsCompUserPermissionsComponent> = (args: RdsCompUserPermissionsComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  FilterPermissionList: [{
    "data": {
      "parentName": null,
      "name": "TestEditionScopeFeature",
      "displayName": "[Test edition scope feature]",
      "description": null,
      "defaultValue": "false",
      "inputType": {
        "name": "CHECKBOX",
        "attributes": {},
        "validator": {
          "name": "BOOLEAN",
          "attributes": {}
        }
      }
    },
    "level": 1,
    "selected": false,
    "label": "[Test edition scope feature]",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
    "selectable": true,
    "children": []
  },
  {
    "data": {
      "parentName": null,
      "name": "App.ChatFeature",
      "displayName": "Chat",
      "description": null,
      "defaultValue": "false",
      "inputType": {
        "name": "CHECKBOX",
        "attributes": {},
        "validator": {
          "name": "BOOLEAN",
          "attributes": {}
        }
      }
    },
    "level": 1,
    "selected": false,
    "label": "Chat",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
    "selectable": true,
    "children": [
      {
        "data": {
          "parentName": "App.ChatFeature",
          "name": "App.ChatFeature.TenantToHost",
          "displayName": "Chat with host",
          "description": null,
          "defaultValue": "false",
          "inputType": {
            "name": "CHECKBOX",
            "attributes": {},
            "validator": {
              "name": "BOOLEAN",
              "attributes": {}
            }
          }
        },
        "level": 2,
        "selected": false,
        "label": "Chat with host",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": []
      },
      {
        "data": {
          "parentName": "App.ChatFeature",
          "name": "App.ChatFeature.TenantToTenant",
          "displayName": "Chat with other tenants",
          "description": null,
          "defaultValue": "false",
          "inputType": {
            "name": "CHECKBOX",
            "attributes": {},
            "validator": {
              "name": "BOOLEAN",
              "attributes": {}
            }
          }
        },
        "level": 2,
        "selected": false,
        "label": "Chat with other tenants",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": []
      }
    ]
  },
  {
    "data": {
      "parentName": null,
      "name": "App.MaxUserCount",
      "displayName": "Maximum user count",
      "description": "0 = unlimited",
      "defaultValue": "0",
      "inputType": {
        "name": "SINGLE_LINE_STRING",
        "attributes": {},
        "validator": {
          "name": "NUMERIC",
          "attributes": {
            "MinValue": 0,
            "MaxValue": 2147483647
          }
        }
      }
    },
    "level": 1,
    "selected": false,
    "label": "Maximum user count",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
    "selectable": false,
    "children": []
  },
  {
    "data": {
      "parentName": null,
      "name": "App.TestCheckFeature",
      "displayName": "Test check feature",
      "description": null,
      "defaultValue": "false",
      "inputType": {
        "name": "CHECKBOX",
        "attributes": {},
        "validator": {
          "name": "BOOLEAN",
          "attributes": {}
        }
      }
    },
    "level": 1,
    "selected": false,
    "label": "Test check feature",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
    "selectable": true,
    "children": []
  },
  {
    "data": {
      "parentName": null,
      "name": "App.TestCheckFeature2",
      "displayName": "Test check feature 2",
      "description": null,
      "defaultValue": "true",
      "inputType": {
        "name": "CHECKBOX",
        "attributes": {},
        "validator": {
          "name": "BOOLEAN",
          "attributes": {}
        }
      }
    },
    "level": 1,
    "selected": false,
    "label": "Test check feature 2",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
    "selectable": true,
    "children": []
  }],
  userHeaders: [
    {
      key: 'userName',
      displayName: 'Username',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '12%'
    },
    {
      key: 'name',
      displayName: 'Name',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '12%'
    },
    {
      key: 'roleName',
      displayName: 'Roles',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '13%'
    },
    {
      key: 'emailAddress',
      displayName: 'Email Address',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '20%'
    },
    {
      key: 'emailConfirmTemplate',
      displayName: 'Email Confirm',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '15%'
    },
    {
      key: 'statusTemplate',
      displayName: 'Status',
      dataType: 'html',
      filterable: true,
      sortable: true,
      colWidth: '10%'
    },
    {
      key: 'creationTime',
      displayName: 'Creation Time',
      dataType: 'text',
      filterable: true,
      sortable: true,
      colWidth: '18%'
    },
  ],
  orgTreeData: [],
  userList: [{
    creationTime: "2022-06-07T11:06:14.2284783",
    emailAddress: "admin@aspnetzero.com",
    id: 1,
    isActive: true,
    isEmailConfirmed: true,
    statusTemplate: `<div><span class="badge badge-success">Active</span></div>`,
    emailConfirmTemplate: `<div> <span class="badge badge-primary">Yes</span></div>`,
    name: "admin",
    phoneNumber: null,
    profilePictureId: null,
    roleId: 1,
    roleName: "Admin",
    surname: "admin",
    userName: "admin"
  }],
  permissionsList: [
    {
      "data": {
        "parentName": null,
        "name": "TestEditionScopeFeature",
        "displayName": "[Test edition scope feature]",
        "description": null,
        "defaultValue": "false",
        "inputType": {
          "name": "CHECKBOX",
          "attributes": {},
          "validator": {
            "name": "BOOLEAN",
            "attributes": {}
          }
        }
      },
      "level": 1,
      "selected": false,
      "label": "[Test edition scope feature]",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "selectable": true,
      "children": []
    },
    {
      "data": {
        "parentName": null,
        "name": "App.ChatFeature",
        "displayName": "Chat",
        "description": null,
        "defaultValue": "false",
        "inputType": {
          "name": "CHECKBOX",
          "attributes": {},
          "validator": {
            "name": "BOOLEAN",
            "attributes": {}
          }
        }
      },
      "level": 1,
      "selected": false,
      "label": "Chat",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "selectable": true,
      "children": [
        {
          "data": {
            "parentName": "App.ChatFeature",
            "name": "App.ChatFeature.TenantToHost",
            "displayName": "Chat with host",
            "description": null,
            "defaultValue": "false",
            "inputType": {
              "name": "CHECKBOX",
              "attributes": {},
              "validator": {
                "name": "BOOLEAN",
                "attributes": {}
              }
            }
          },
          "level": 2,
          "selected": false,
          "label": "Chat with host",
          "expandedIcon": "fa fa-folder-open text-warning",
          "collapsedIcon": "fa fa-folder text-warning",
          "expanded": true,
          "selectable": true,
          "children": []
        },
        {
          "data": {
            "parentName": "App.ChatFeature",
            "name": "App.ChatFeature.TenantToTenant",
            "displayName": "Chat with other tenants",
            "description": null,
            "defaultValue": "false",
            "inputType": {
              "name": "CHECKBOX",
              "attributes": {},
              "validator": {
                "name": "BOOLEAN",
                "attributes": {}
              }
            }
          },
          "level": 2,
          "selected": false,
          "label": "Chat with other tenants",
          "expandedIcon": "fa fa-folder-open text-warning",
          "collapsedIcon": "fa fa-folder text-warning",
          "expanded": true,
          "selectable": true,
          "children": []
        }
      ]
    },
    {
      "data": {
        "parentName": null,
        "name": "App.MaxUserCount",
        "displayName": "Maximum user count",
        "description": "0 = unlimited",
        "defaultValue": "0",
        "inputType": {
          "name": "SINGLE_LINE_STRING",
          "attributes": {},
          "validator": {
            "name": "NUMERIC",
            "attributes": {
              "MinValue": 0,
              "MaxValue": 2147483647
            }
          }
        }
      },
      "level": 1,
      "selected": false,
      "label": "Maximum user count",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "selectable": false,
      "children": []
    },
    {
      "data": {
        "parentName": null,
        "name": "App.TestCheckFeature",
        "displayName": "Test check feature",
        "description": null,
        "defaultValue": "false",
        "inputType": {
          "name": "CHECKBOX",
          "attributes": {},
          "validator": {
            "name": "BOOLEAN",
            "attributes": {}
          }
        }
      },
      "level": 1,
      "selected": false,
      "label": "Test check feature",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "selectable": true,
      "children": []
    },
    {
      "data": {
        "parentName": null,
        "name": "App.TestCheckFeature2",
        "displayName": "Test check feature 2",
        "description": null,
        "defaultValue": "true",
        "inputType": {
          "name": "CHECKBOX",
          "attributes": {},
          "validator": {
            "name": "BOOLEAN",
            "attributes": {}
          }
        }
      },
      "level": 1,
      "selected": false,
      "label": "Test check feature 2",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "selectable": true,
      "children": []
    }
  ],
  roles: [
    {
      inheritedFromOrganizationUnit: false,
      isAssigned: true,
      roleDisplayName: "Admin",
      roleId: 1,
      roleName: "Admin",
    },
    {
      inheritedFromOrganizationUnit: false,
      isAssigned: true,
      roleDisplayName: "test",
      roleId: 4,
      roleName: "19bffedb2db041d1ad3e4f6907356e52"
    }
  ]
}
