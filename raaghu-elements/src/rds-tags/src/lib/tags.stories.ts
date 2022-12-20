import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTagsComponent } from './rds-tags.component';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Elements/Tag',
  component: RdsTagsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default'],
      control: { type: 'select' }
    },
    tagType: {
      options: ['square', 'round'],
      control: { type: 'radio' }
    },

    role: {
      options: ['basic', 'tagWithScroll'],
      control: { type: 'radio' }
    },
    // borderColorVariant: {
    //   options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default'],
    //   control: { type: 'select' }
    // }

    // role: { table: { disable: true, }, },

  }
} as Meta

const Template: Story<RdsTagsComponent> = (args: RdsTagsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['role', 'colorVariant', 'tagType',''] } };
Default.args = {
  role: 'basic',
  colorVariant: 'primary',
  tagType: 'square'
}
export const tagWithScroll = Template.bind({});
tagWithScroll.parameters = { controls: { include: ['role', 'colorVariant', 'tagType',''] } };
tagWithScroll.args = {
  role: 'tagWithScroll',
  colorVariant: 'primary',
  tagType: 'square'
 
}



