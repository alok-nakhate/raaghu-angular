import { FormBuilder } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsBannerComponent } from './rds-banner.component';

export default {
  title: 'ELEMENTS/Banner',
  component: RdsBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ] ,
  argTypes: {
    // position: {
    //   options: ['top', 'bottom'],
    //   control: { type: 'radio' }
    // },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    textAlign: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' }
    },
    position: { control: 'radio',options: ['top', 'bottom'], if: { arg: 'sticky' } },
  }
} as Meta

const Template: Story<RdsBannerComponent> = (args: RdsBannerComponent) => ({
  props: args
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['textAlign', 'bannerText', 'sticky', 'position', 'colorVariant', 'icon',
 'iconHeight', 'iconWidth', 'iconSize', 'iconStroke', 'iconFill'] } };
Default.args = {
  textAlign: 'start',
  bannerText: 'Big news! We are excited to announce a brand new product.',
  sticky: false,
  position: 'top',
  colorVariant: 'info',
  icon:'information',
  iconHeight: '20px',
  iconWidth: '20px',
  iconSize: '',
  iconStroke: true,
  iconFill: false
}
