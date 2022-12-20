
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsStatComponent } from './rds-stat.component';

export default {
  title: 'Elements/Stat',
  component: RdsStatComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    display_type: { table: { disable: true, }, },
  },
} as Meta;

const Template: Story<RdsStatComponent> = (args: RdsStatComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['display_type', 'statItems'] } };
Default.args = {
  display_type: 'basic',
  statItems: [
    {
      title: 'SAM SMITH',
      value: '2370',
      icon: 'star',
      iconHeight: '80px',
      iconWidth: '80px',
      iconFill: true,
      iconStroke: true
    },
  ]

}

export const advanced = Template.bind({});
advanced.parameters = { controls: { include: ['display_type', 'statItems'] } };
advanced.args = {
  display_type: 'advanced',
  statItems: [
    {
      title: 'SAM SMITH',
      value: '2370',
    },
  ]

}

