
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsAppDetailsComponent } from './rds-app-details.component';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsLabelModule } from '@libs/rds-label';

export default {
  title: 'Elements/App-details',
  component: RdsAppDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule,RdsLabelModule,RdsCheckboxModule],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsAppDetailsComponent> = (args: RdsAppDetailsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['item'] } };
Default.args = {
  item:{ 
     title: 'Zapier', 
     subtitle: 'Build custom automation and intefrations with app', 
     icon: 'zapier',
     route: '/home',
     selected:true,
     iconHeight:'30px',
     iconWidth:'30px',
     iconFill:false,
     iconStroke:true
    }
}

