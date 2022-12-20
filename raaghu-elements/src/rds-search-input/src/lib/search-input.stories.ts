import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSearchInputComponent } from './rds-search-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Elements/Search',
  component: RdsSearchInputComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule,CommonModule,FormsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
  },
} as Meta

const Template: Story<RdsSearchInputComponent> = (args: RdsSearchInputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['placeholder', 'label', 'size'] } };

Default.args = {
  placeholder: 'Search',
  size: 'medium',
  label: 'Search Here'
}

export const withLabelPosition = Template.bind({});
withLabelPosition.parameters = { controls: { include: ['placeholder', 'label', 'size', 'position'] } };

withLabelPosition.args = {
  placeholder: 'Search',
  size: 'medium',
  label: 'Search Here',
  position: 'top'
}