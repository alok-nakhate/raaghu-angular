import { Story, Meta } from '@storybook/angular';
import { RdsListGroupComponent } from './rds-list-group.component';

export default {
  title: 'Elements/List Group',
  component: RdsListGroupComponent,
  argTypes: {
    labelPosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' },
    },
    multiSelect: {table: {disable: true,},},
    // labelPosition: {
    //   options: [ 'start', 'top', 'end', 'bottom'],
    //   control: { type: 'select' }
    // },
  },
} as Meta;

const Template: Story<RdsListGroupComponent> = (
  args: RdsListGroupComponent
) => ({
  props: args,
});

export const Default: Story<RdsListGroupComponent> = (args) => ({
  props: args,
 
});
Default.parameters = { controls: { include: ['labelPosition', 'label', 'listItem'] } };

Default.args = {
  labelPosition: 'top',
  label: 'List Group',
  listItem: [
    {
      label: ' label 1',
      disabled: true,
      badgeLabel: '10',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
    {
      label: ' label 2',
      disabled: false,
      badgeLabel: '2',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
    {
      label: ' label 3',
      disabled: false,
      badgeLabel: '5',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
  ],
};
export const list_group_with_multiselect: Story<RdsListGroupComponent> = (args) => ({
  props: args,

});
list_group_with_multiselect.args = {
  label: 'List Group',
  multiSelect: true,
  listItem: [
    {
      id: 1,
      label: ' label 1',
      disabled: true,
      badgeLabel: '10',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
    {
      id: 2,
      label: ' label 2',
      disabled: false,
      badgeLabel: '2',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
    {
      id: 3,
      label: ' label 3',
      disabled: false,
      badgeLabel: '5',
      listHeading: '',
      listContent: '',
      listTime: '',
      type: '',
    },
  ],
  labelPosition: 'top',

};
list_group_with_multiselect.parameters = { controls: { include: ['labelPosition', 'label', 'listItem', 'multiSelect'] } };


// Template 1

// template: `<rds-list-group
// [flush]="false"
// listType="list"
// [multiSelect]="false"
// [orderList]="false"
// [listItem]="listItem"
// (onClick)="onClick($event)"
// [list]="list"
// >
// <ng-template #list  let-item>
// <li [ngClass]="item.type" >
// {{item.label}}</li>
// </ng-template>
// </rds-list-group>`,



// Template 2

// template: `<rds-list-group
// [flush]="false"
// listType="list"
// [multiSelect]="true"
// [orderList]="false"
// [listItem]="listItem"
// (onClick)="onClick($event)"
// [list]="list"
// >

// <ng-template #list  let-item>
// <li [ngClass]="item.type">
// <input class="form-check-input me-1" type="checkbox" value="">
// {{item.label}}
// </li>
// </ng-template>
// </rds-list-group>`,
