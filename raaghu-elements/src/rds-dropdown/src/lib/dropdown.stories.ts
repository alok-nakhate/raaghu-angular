import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsDropdownComponent } from './rds-dropdown.component';

export default {
  title: 'Elements/Dropdown',
  component: RdsDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large', 'medium'],
      control: { type: 'radio' }
    },
    direction: {
      options: ['Drop-down', 'Drop-up', 'Drop-end', 'Drop-start'],
      control: { type: 'radio' },
    },
    role: {table: {disable: true,},},
  },
} as Meta;

const Template: Story<RdsDropdownComponent> = (args: RdsDropdownComponent) => ({
  props: args,
  template: `<rds-dropdown
  [listItems]="listItems"
  [label]="label"
  [direction]="direction"
   [size]="size"
   [role]="role"
   role= 'dropdown-button'
  [colorVariant]="colorVariant"
   >
    </rds-dropdown>`,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'size', 'listItems', 'label', 'direction', 'role'] } };
Default.args = {
  colorVariant: 'primary',
  size: 'default',
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: '', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
  ],
  label: 'EXCEL OPERATIONS',
  direction: 'Drop-down',
  role: 'dropdown-button',
};

export const Dropdown_with_split = Template.bind({});
Dropdown_with_split.parameters = { controls: { include: ['colorVariant', 'size', 'listItems', 'label', 'direction', 'role'] } };
Dropdown_with_split.args = {
  colorVariant: 'primary',
  size: 'default',
  listItems :  [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: '', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
  ],
  label: 'EXCEL OPERATIONS',
  direction: 'Drop-down',
  role: 'with_split',
};
