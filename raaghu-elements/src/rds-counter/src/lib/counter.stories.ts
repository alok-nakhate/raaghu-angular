import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';


import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCounterComponent } from './rds-counter.component';

export default {
  title: 'Elements/Counter',
  component: RdsCounterComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule,RdsIconModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
      control: { type: 'select' }
    },
    position: {
      options: ['top', 'bottom', 'start', 'end'],
      control: { type: 'radio' }
    },
  },
} as Meta

const Template: Story<RdsCounterComponent> = (args: RdsCounterComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['label', 'colorVariant', 'counterValue', 'width', 'min', 'max', 'position'] } };
Default.args = {
  label: '',
  colorVariant: 'primary',
  counterValue: 0,
  width: 110,
  min: 0,
  max: 10,
  position: 'start'
}
