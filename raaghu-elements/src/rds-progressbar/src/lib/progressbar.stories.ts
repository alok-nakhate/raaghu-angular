import { Story, Meta } from '@storybook/angular';
import { RdsProgressbarComponent } from './rds-progressbar.component';

export default {
  title: 'Elements/Progress bar',
  component: RdsProgressbarComponent,
  argTypes: {
    colorVariant: {
      options: ['info', 'warning', 'success', 'danger', 'secondary', 'light', 'dark', 'primary', 'default'],
      control: { type: 'select' }
    },
    striped: {
      options: ['default', 'progress-bar-striped'],
      control: { type: 'radio' }
    },
    role: { table: { disable: true, }, },
    // progressWidth: { control: { type: 'text' } },
    // animation: { control: { type: 'boolean' } },
    // label: { control: { type: 'boolean' } },
    // height: { control: { type: 'text' } },
    // progressbar_MaxWidth: { control: { type: 'text' } },
    //showMulitplebar:{control: { type: 'boolean' }}
  }
} as Meta;

const Template: Story<RdsProgressbarComponent> = (args: RdsProgressbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'striped', 'progressWidth', 'animation', 'role', 'height'] } };

Default.args = {
  colorVariant: 'default',
  striped: 'default',
  progressWidth: 40,
  animation: false,
  height: 15,
  role: 'single',
};

export const multi_Progressbar = Template.bind({});
multi_Progressbar.parameters = { controls: { include: ['progressvalues', 'role', 'height'] } };

multi_Progressbar.args = {
  role: 'multiple',
  height: 15,
  progressvalues: [{ progressWidth: 50, colorVariant: 'success', stripe: 'progress-bar-striped', animation: 'progress-bar-animated' }, { progressWidth: 20, colorVariant: 'danger' }, { progressWidth: 30, colorVariant: 'info' }],
};

