
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsAlertComponent } from './rds-alert.component';

export default {
  title: 'Elements/Alert',
  component: RdsAlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    position: { control: 'radio',options: ['top', 'bottom'], if: { arg: 'sticky' } },
  },
} as Meta;

const Template: Story<RdsAlertComponent> = (args: RdsAlertComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['dismissible', 'icon', 'position', 'delay', 'colorVariant', 
'iconFill', 'iconStroke', 'iconHeight', 'iconWidth', 'sticky'] } };
Default.args = {
  dismissible: true,
  icon: 'information',
  position: 'top',
  delay: 0,
  colorVariant:'danger',
  iconFill:false,
  iconStroke:true,
  iconHeight:'25px',
  iconWidth:'25px',
  sticky: false,
}

