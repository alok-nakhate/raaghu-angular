
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsTestimonialComponent } from './rds-testimonial.component';

export default {
  title: 'Elements/Testimonial',
  component: RdsTestimonialComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
      }),
  ],


  argTypes: {
  },
} as Meta;

const Template: Story<RdsTestimonialComponent> = (args: RdsTestimonialComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// Default.parameters = { controls: { include: ['testimonialItems'] } };
Default.args = {
  role: 'Default',
  testimonialItems: [
    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'SAM SMITH',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'quote_right',
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:true,
    iconStroke:true},

    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'King John',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'quote_right',
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:true,
    iconStroke:true,
    },

    {
      img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
      title: 'King Smith',
      subtitle: 'PRODUCT MANAGER',
      description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat',
      icon: 'quote_right',
      iconHeight: '18px',
      iconWidth: '18px',
      iconFill: true,
      iconStroke: true,
    },
  ]

}

