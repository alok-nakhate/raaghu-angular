import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

export default {

  title: 'Elements/Dropdown List',
  component: RdsDropdownlistComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {

    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'outline-info', 'outline-light', 'outline-success', 'outline-primary', 'outline-secondary', 'outline-danger', 'outline-dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' }
    },
    // height: { control: { type: 'text' } }
    dropdownHeight: { control: { type: 'text' } }
  },
} as Meta;

const Template: Story<RdsDropdownlistComponent> = (args: RdsDropdownlistComponent) => ({

  props: args,
});


export const Default: Story<RdsDropdownlistComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist 
    [listItems]="listItems"
    [placeholder]="placeholder"
    [size]="size"
     [multiSelect]="multiSelect"
     [icon]="icon"
    [iconWidth]="iconWidth"
    [iconHeight]="iconHeight"
    [borderDropdown]="borderDropdown"
    [dropdownHeight]="dropdownHeight"
  >
    </rds-dropdownlist>`
});
Default.parameters = { controls: { include: ['placeholder', 'icon', 'size', 'iconHeight', 'iconWidth', 'multiSelect', 'listItems', 'borderDropdown', 'dropdownHeight'] } };

Default.args = {
  placeholder: 'Filter',
  size: 'small',
  icon: 'plus',
  iconHeight: '12px',
  iconWidth: '12px',
  multiSelect: false,
  // height: '250',
  dropdownHeight: undefined,
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '25px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
  ],
  borderDropdown: false
};


export const WithOffset: Story<RdsDropdownlistComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist 
    [listItems]="listItems"
    [placeholder]="placeholder"
    [size]="size"
    [multiSelect]="multiSelect"
    [xOffset] = "xOffset"
    [yOffset] = "yOffset"
    [borderDropdown]="borderDropdown"
    [dropdownHeight]="dropdownHeight"
  >
    </rds-dropdownlist>`
});
WithOffset.parameters = { controls: { include: ['placeholder', 'xOffset', 'yOffset', 'size', 'iconWidth', 'multiSelect', 'listItems', 'borderDropdown'] } };
WithOffset.args = {
  placeholder: 'Filter',
  xOffset: '0',
  yOffset: '0',
  size: 'small',
  multiSelect: false,
  dropdownHeight: undefined,
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '25px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
  ],
  borderDropdown: false
};
