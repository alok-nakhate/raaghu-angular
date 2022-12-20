
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsSelectListComponent } from './rds-select-list.component';

export default {
  title: 'Elements/Select List',
  component: RdsSelectListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    labelPosition: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    multiple: {table: {disable: true,},},
  },
} as Meta;

const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    [size]="size"
    [itemList]="itemList"
    [placeholder]="placeholder"
    [isRequired]="isRequired"
    [label]="label">
  </rds-select-list>`,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['itemList',  'label', 'size','placeholder','isRequired'] } };
Default.args = {
  label:'select list',
  size:'small',
  itemList:[
    {
    displayText:'Item 1',
    value:1
  },
  {
    displayText:'Item 2',
  value:2}],
  placeholder: 'Select item',
  isRequired:false
};
const muliselectTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    [size]="size"
    [itemList]="itemList"
    [multiple]="multiple"
    [placeholder]="placeholder"
    [label]="label">
  </rds-select-list>`,
});
export const multiSelect = muliselectTemplate.bind({});
multiSelect.parameters = { controls: { include: ['itemList',  'label', 'size','placeholder','multiple'] } };
multiSelect.args = {
  label:'select list',
  size:'small',
  itemList:[
    {
    displayText:'Item 1',
    value:1
  },
  {
    displayText:'Item 2',
  value:2}],
  placeholder: 'Select item',
  multiple:true
};
const labelPositionTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    [size]="size"
    [itemList]="itemList"
    [labelPosition]="labelPosition"
    [placeholder]="placeholder"
    [label]="label">
  </rds-select-list>`,
});
export const labelPosition = labelPositionTemplate.bind({});
labelPosition.parameters = { controls: { include: ['itemList',  'label', 'size','placeholder','labelPosition'] } };
labelPosition.args = {
  label:'select list',
  size:'small',
  itemList:[
    {
    displayText:'Item 1',
    value:1
  },
  {
    displayText:'Item 2',
  value:2}],
  placeholder: 'Select item',
  labelPosition:'top'
};

const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<div class="row m-5">
  <div class="col-md-12 p-5"><rds-select-list
    [size]="size"
    [itemList]="itemList"
    [tooltipPlacement]="tooltipPlacement"
    [tooltipTitle]="tooltipTitle"
    [placeholder]="placeholder"
    [label]="label">
  </rds-select-list></div></div>`,
});
export const tooltip = tooltipTemplate.bind({});
tooltip.parameters = { controls: { include: ['itemList',  'label', 'size','placeholder','tooltipTitle','tooltipPlacement'] } };
tooltip.args = {
  label:'select list',
  size:'small',
  tooltipPlacement:'bottom',
  tooltipTitle:'select list',
  itemList:[
    {
    displayText:'Item 1',
    value:1
  },
  {
    displayText:'Item 2',
  value:2}],
  placeholder: 'Select item',
};
// export const Tooltip = tooltipTemplate.bind({});
// Tooltip.args = {
//   disabled: false,
//   multiple: false,
//   customIcon: '',
//   placeholderText:'Open this select menu', 
//   tooltipPlacement: '',
//   tooltipTitle: 'This is tooltip'
// };


// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { moduleMetadata } from '@storybook/angular';
// import { Story, Meta } from '@storybook/angular';
// import { RdsSelectListComponent } from './rds-select-list.component';

// export default {
//   title: 'Elements/Select List',
//   component: RdsSelectListComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [CommonModule, FormsModule],
//     }),
//   ],
//   argTypes: {
//     // size: {
//     //   options: ['default', 'small', 'large'],
//     //   control: { type: 'radio' },
//     // },
//     disabled: { control: { type: 'boolean' } },
//     multiple: { control: { type: 'boolean' } },
//     customIcon: { control: { type: 'text' } },
//     rows: { control: { type: 'text' } },
//     // LabelType: {
//     //   options: ['Top', 'Bottom', 'Left', 'Right'],
//     //   control: { type: 'select' },
//     // },
//     tooltipPlacement: {
//       options: ['top', 'bottom', 'right', 'left'],
//       control: { type: 'radio' }
//     },
//     size: {
//       options: ['small', 'large', 'default'],
//       control: { type: 'radio' }
//     },
//   },
// } as Meta;

// // const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
// //   props: args,
// //   template: `<rds-select-list
// //     [rows]="rows"
// //     [size]="size"
// //     [disabled]="disabled"
// //     [multiple]="multiple"
// //     [labelText]="labelText"
// //     [LabelType]="LabelType"
// //     customIcon="">
// //     <option selected>Open this select menu</option>
// //     <option value="1">One</option>
// //     <option value="2">Two</option>
// //     <option value="3">Three</option>
// //   </rds-select-list>`,
// // });
// // const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
// //   props: args,
// //   template: `<rds-select-list 
// //   [size]="rows"
// //     [disabled]="disabled  "
// //     [multiple]="multiple"
// //     customIcon=""
// //     [labelText]="labelText"
// //     [tooltipTitle]="tooltipTitle"
// //     [LabelType]="LabelType"
// //     [tooltipPlacement]="tooltipPlacement"
// //   >
// //   <option selected>Open this select menu</option>
// //   <option value="1">One</option>
// //   <option value="2">Two</option>
// //   <option value="3">Three</option>
// //   </rds-select-list>`,
// // });
// // export const basic = Template.bind({});

// // basic.args = {
// //   rows: '',
// //   labelText: '',
// //   // labelType: 'Top',
// //   // size: 'default',
// //   disabled: false,
// //   multiple: false,
// //   customIcon: ''
// // };

// // export const Tooltip = tooltipTemplate.bind({});
// // Tooltip.args = {
// //   disabled: false,
// //   multiple: false,
// //   customIcon: '',
// //   tooltipPlacement: '',
// //   tooltipTitle: 'This is tooltip'
// // };






// const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
//   props: args,
 
// });
// const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
//   props: args,
  
// });
// export const basic = Template.bind({});

// basic.args = {
//   rows: '',
//   labelText: '',
//   // labelType: 'Top',
//   // size: 'default',
//   disabled: false,
//   multiple: false,
//   customIcon: '',
//   itemList: [
//     { id:1, value: 'One', displayText: 'One'},
//     { id:2, value: 'Two', displayText: 'Two'},
//     { id:3, value: 'Three', displayText: 'Three'},
//   ]
// };

// export const Tooltip = tooltipTemplate.bind({});
// Tooltip.args = {
//   disabled: false,
//   multiple: false,
//   customIcon: '',
//   tooltipPlacement: '',
//   tooltipTitle: 'This is tooltip',
//   itemList: [
//     { id:1, value: 'One', displayText: 'One'},
//     { id:2, value: 'Two', displayText: 'Two'},
//     { id:3, value: 'Three', displayText: 'Three'},
//   ]
// };