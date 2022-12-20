import { Story, Meta } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsDoubleRangeComponent } from './rds-double-range.component';


export default {
  title: 'Elements/Double Range',
  component: RdsDoubleRangeComponent,
  decorators: [componentWrapperDecorator((story: any) => `<div class="px-3">${story}</div>`)],
  argTypes: {
    role: {table: {disable: true,},},
  }
} as Meta

const Template: Story<RdsDoubleRangeComponent> = (args: RdsDoubleRangeComponent) => ({
  props: { ...args },
});
export const DoubleRange = Template.bind({})
DoubleRange.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max'] } };
DoubleRange.args = {
  role: 'Default',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}

export const DoubleRangeType1 = Template.bind({})
DoubleRangeType1.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max'] } };
DoubleRangeType1.args = {
  role: 'Double Range Type 1',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}

export const DoubleRangeType2 = Template.bind({})
DoubleRangeType2.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max'] } };
DoubleRangeType2.args = {
  role: 'Double Range Type 2',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}
