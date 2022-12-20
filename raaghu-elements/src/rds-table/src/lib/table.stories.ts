import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsTableComponent } from './rds-table.component';
import { RdsIconModule } from '@libs/rds-icon';
import { CommonModule } from '@angular/common';
import { RdsLikeDislikeModule } from '../../../rds-like-dislike/src/public-api';

export default {
  title: 'Elements/Table',
  component: RdsTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsTableComponent],
      imports: [
        RdsIconModule, CommonModule, RdsLikeDislikeModule
      ],

    })
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    // borderColorVariant: {
    //   options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    //   control: { type: 'select' }
    // },
  },
} as Meta;

const Template: Story<RdsTableComponent> = (args: RdsTableComponent) => ({
  props: args,
});



export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'tableHeaders', 'tableData'] } };
Default.args = {
  colorVariant: 'light',
  // borderColorVariant: 'secondary',
  tableHeaders: [
    { displayName: 'Name', dataType: 'text', key: 'name' },
    { displayName: 'Icon', dataType: 'icon', key: 'icon' },
    { displayName: 'Price', dataType: 'text', key: 'price' },
    { displayName: 'Text Number', dataType: 'text', key: 'textNumber' },
  ],
  tableData:
    [{ id: 1, name: 'Standard', icon: 'tick', price: '$20', textNumber: '22aa' },
    { id: 2, name: 'Premium', icon: 'tick', price: '$20',textNumber: '22aa' },
    { id: 3, name: 'Ultimate', icon: 'tick', price: '$20',textNumber: '22aa' },
    ],
}
export const withoutBorder = Template.bind({});
withoutBorder.parameters = { controls: { include: ['colorVariant', 'showTableBorder', 'tableHeaders', 'tableData'] } };
withoutBorder.args = {
  colorVariant: 'light',
  showTableBorder: false,
  tableHeaders: [
    { displayName: 'Name', dataType: 'text', key: 'name' },
    { displayName: 'Icon', dataType: 'icon', key: 'icon' },
    { displayName: 'Price', dataType: 'text', key: 'price' },
    { displayName: 'Text Number', dataType: 'text', key: 'textNumber' },
  ],
  tableData:
    [{ id: 1, name: 'Standard', icon: 'tick', price: '$20', textNumber: '22aa' },
    { id: 2, name: 'Premium', icon: 'tick', price: '$20',textNumber: '22aa' },
    { id: 3, name: 'Ultimate', icon: 'tick', price: '$20',textNumber: '22aa' },
    ],
}
export const withoutHeader = Template.bind({});
withoutHeader.parameters = { controls: { include: ['colorVariant', 'showTableHeader', 'tableHeaders', 'tableData'] } };
withoutHeader.args = {
  colorVariant: 'light',
  showTableHeader: false,
  tableHeaders: [
    { displayName: 'Name', dataType: 'text', key: 'name' },
    { displayName: 'Icon', dataType: 'icon', key: 'icon' },
    { displayName: 'Price', dataType: 'text', key: 'price' },
    { displayName: 'Text Number', dataType: 'text', key: 'textNumber' },
  ],
  tableData:
    [{ id: 1, name: 'Standard', icon: 'tick', price: '$20', textNumber: '22aa' },
    { id: 2, name: 'Premium', icon: 'tick', price: '$20',textNumber: '22aa' },
    { id: 3, name: 'Ultimate', icon: 'tick', price: '$20',textNumber: '22aa' },
    ],
}
