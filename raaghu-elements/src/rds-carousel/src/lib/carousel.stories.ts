// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta } from '@storybook/angular';
import { RdsCarouselComponent } from './rds-carousel.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Elements/Carousel',
  component: RdsCarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
    display_type: { table: { disable: true, }, },
  },
} as Meta;

const Template: Story<RdsCarouselComponent> = (args: RdsCarouselComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['display_type', 'crossFade', 'controls', 'imageItem', 'indicators'] } };
Default.args = {
  display_type: 'basic',
  crossFade: true,
  controls: true,
  imageItem: [
    {
      img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
      caption: 'this is the caption section were u can add the caption for the image'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      caption: 'this is the caption section were u can add the caption for the image'
    }
  ],
  indicators: true,
};

export const Advanced = Template.bind({});
Default.parameters = { controls: { include: ['display_type', 'crossFade', 'controls', 'imageItem', 'indicators'] } };
Advanced.args = {
  display_type: 'advanced',
  crossFade: true,
  controls: true,
  carousalItem: [
    {
      icon: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
      name: 'Sam Smith',
      roleName: 'Product Manager',
      subTitle: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra.'
    },
    {
      icon: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
      name: 'king John',
      roleName: 'Tech Lead',
      subTitle: 'this is the caption section were u can add the caption for the image',
    }
  ],
  indicators: true,
};

