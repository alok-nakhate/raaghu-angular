import { Story, Meta } from '@storybook/angular';
import { RdsSpinnerComponent } from './rds-spinner.component';

export default {
  title: 'Elements/Spinner',
  component: RdsSpinnerComponent,
  argTypes: {
    spinnerType: {table: {disable: true,},},
  },
} as Meta;
const Template: Story<RdsSpinnerComponent> = (args: RdsSpinnerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['spinnerType',  'size', 'colorVariant'] } };
Default.args = {
  spinnerType: false,
  size: 'md',
  colorVariant: 'primary'
};

export const Growing = Template.bind({});
Growing.parameters = { controls: { include: ['spinnerType', 'colorVariant'] } };
Growing.args = {
  spinnerType: true,
  colorVariant: 'primary'
};

