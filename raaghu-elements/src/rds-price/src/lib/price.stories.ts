
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPriceComponent } from './rds-price.component';


export default {
  title: 'Elements/Price',
  
  component: RdsPriceComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RdsLabelModule,RdsIconModule
      ],
    }),
  ],
  argTypes: {
    withDiscount: {table: {disable: true,},},
  },
} as Meta;

const Template: Story<RdsPriceComponent> = (args: RdsPriceComponent) => ({
  props: args,
});
export const WithDiscount = Template.bind({});
WithDiscount.parameters = { controls: { include: ['originalPrice','actualPrice', 'discount', 'withDiscount'] } };
WithDiscount.args = {
  originalPrice:90,
  actualPrice: 100,
  discount: 10,
  withDiscount: true
};

export const WithoutDiscount = Template.bind({});
WithoutDiscount.parameters = { controls: { include: ['originalPrice', 'withDiscount'] } };
WithoutDiscount.args = {
  originalPrice: 90,
  withDiscount: false
};

WithoutDiscount.args = {
  role: 'Basic',
};

export const withoutDiscount = Template.bind({});

withoutDiscount.args = {
  role: 'withoutDiscount',
  numberPricetwo: 0
};

