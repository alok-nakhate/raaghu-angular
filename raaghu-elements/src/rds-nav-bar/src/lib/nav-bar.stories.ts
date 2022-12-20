import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsNavBarComponent } from './rds-nav-bar.component';

export default {

  title: 'Elements/Navbar',
  component: RdsNavBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsIconModule],
    }),
  ],
  argTypes: {
    // size: {
    //   options: ['small', 'medium', 'large', 'extra-large'],
    //   control: { type: 'select' },
    // }
  },
} as Meta;


export const Default: Story<RdsNavBarComponent> = (args) => ({
  props: args,
});
Default.parameters = { controls: { include: ['navbarItems', 'title', 'colorVariant'] } };
Default.args = {
  // size: 'medium',
  navbarItems: [{
    label: "Home",
    url: ''
  },
  {
    label: "Features",
    url: ''
  },
  {
    label: "Pricing",
    url: ''
  }],
  title: 'Navbar',
};


