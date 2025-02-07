
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsCompAlertPopupComponent } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';
import { NestGroupDirective } from '../rds-comp-hierarchy/node-label.directive';

export default {
  title: 'Components/Organization Tree',
  component: RdsCompOrganizationTreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsCheckboxModule,
        RdsOffcanvasModule,
        RdsInputModule,
        NgxTranslateModule,
        RdsIconModule,
        SharedModule,
        RdsIconModule,
      ],

      declarations: [RdsCompAlertPopupComponent,
        NestGroupDirective
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompOrganizationTreeComponent> = (args: RdsCompOrganizationTreeComponent) => ({
  props: {
    ...args

  },
});

export const Default = Template.bind({});

Default.args = {
  organizationTreeData: [
    {
      "data": {
        "parentId": null,
        "code": "00001",
        "displayName": "qwerty",
        "memberCount": 0,
        "roleCount": 0,
        "lastModificationTime": "2022-09-30T10:51:06.454+05:30",
        "lastModifierUserId": 1,
        "creationTime": "2022-09-30T09:26:39.630+05:30",
        "creatorUserId": 1,
        "id": 69
      },
      "level": 1,
      "selected": false,
      "label": "qwerty",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "children": [
        {
          "data": {
            "parentId": 69,
            "code": "00001.00001",
            "displayName": "test",
            "memberCount": 14,
            "roleCount": 1,
            "lastModifierUserId": null,
            "creationTime": "2022-09-30T09:26:57.564+05:30",
            "creatorUserId": 1,
            "id": 70
          },
          "level": 2,
          "selected": false,
          "label": "test",
          "expandedIcon": "fa fa-folder-open text-warning",
          "collapsedIcon": "fa fa-folder text-warning",
          "expanded": true,
          "children": [
            {
              "data": {
                "parentId": 70,
                "code": "00001.00001.00001",
                "displayName": "child",
                "memberCount": 0,
                "roleCount": 0,
                "lastModifierUserId": null,
                "creationTime": "2022-09-30T09:27:27.617+05:30",
                "creatorUserId": 1,
                "id": 72
              },
              "level": 3,
              "selected": false,
              "label": "child",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "children": [
                {
                  "data": {
                    "parentId": 72,
                    "code": "00001.00001.00001.00001",
                    "displayName": "child",
                    "memberCount": 0,
                    "roleCount": 0,
                    "lastModifierUserId": null,
                    "creationTime": "2022-09-30T09:27:39.368+05:30",
                    "creatorUserId": 1,
                    "id": 73
                  },
                  "level": 4,
                  "selected": false,
                  "label": "child",
                  "expandedIcon": "fa fa-folder-open text-warning",
                  "collapsedIcon": "fa fa-folder text-warning",
                  "expanded": true,
                  "children": []
                },
                {
                  "data": {
                    "parentId": 72,
                    "code": "00001.00001.00001.00002",
                    "displayName": "child1",
                    "memberCount": 0,
                    "roleCount": 0,
                    "lastModifierUserId": null,
                    "creationTime": "2022-09-30T09:38:27.386+05:30",
                    "creatorUserId": 1,
                    "id": 74
                  },
                  "level": 4,
                  "selected": false,
                  "label": "child1",
                  "expandedIcon": "fa fa-folder-open text-warning",
                  "collapsedIcon": "fa fa-folder text-warning",
                  "expanded": true,
                  "children": []
                }
              ]
            },
            {
              "data": {
                "parentId": 70,
                "code": "00001.00001.00002",
                "displayName": "122",
                "memberCount": 0,
                "roleCount": 0,
                "lastModifierUserId": null,
                "creationTime": "2022-09-30T10:15:12.674+05:30",
                "creatorUserId": 1,
                "id": 81
              },
              "level": 3,
              "selected": false,
              "label": "122",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "children": []
            },
            {
              "data": {
                "parentId": 70,
                "code": "00001.00001.00003",
                "displayName": "test1",
                "memberCount": 0,
                "roleCount": 0,
                "lastModifierUserId": null,
                "creationTime": "2022-09-30T10:16:13.146+05:30",
                "creatorUserId": 1,
                "id": 83
              },
              "level": 3,
              "selected": false,
              "label": "test1",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "children": []
            }
          ]
        },
        {
          "data": {
            "parentId": 69,
            "code": "00001.00002",
            "displayName": "admin",
            "memberCount": 0,
            "roleCount": 0,
            "lastModifierUserId": null,
            "creationTime": "2022-09-30T09:27:11.760+05:30",
            "creatorUserId": 1,
            "id": 71
          },
          "level": 2,
          "selected": false,
          "label": "admin",
          "expandedIcon": "fa fa-folder-open text-warning",
          "collapsedIcon": "fa fa-folder text-warning",
          "expanded": true,
          "children": []
        }
      ]
    },
    {
      "data": {
        "parentId": null,
        "code": "00002",
        "displayName": "test1",
        "memberCount": 0,
        "roleCount": 0,
        "lastModifierUserId": null,
        "creationTime": "2022-09-30T09:39:59.650+05:30",
        "creatorUserId": 1,
        "id": 75
      },
      "level": 1,
      "selected": false,
      "label": "test1",
      "expandedIcon": "fa fa-folder-open text-warning",
      "collapsedIcon": "fa fa-folder text-warning",
      "expanded": true,
      "children": []
    }
  ],
  nodeColor: ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'],
  mutable: true,
};
