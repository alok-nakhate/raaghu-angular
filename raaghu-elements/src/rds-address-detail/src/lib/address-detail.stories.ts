
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsAddressDetailComponent } from './rds-address-detail.component';

export default {
  title: 'Elements/Address Detail',
  component: RdsAddressDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RdsIconModule
      ],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<RdsAddressDetailComponent> = (args: RdsAddressDetailComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['header', 'addressLine1', 'addressLine2', 'addressLine3', 'withIcon','Cardborder'] } };
Default.args = {
  header: 'Billing Address',
  addressLine1: 'Brookland House',
  addressLine2: '5439,Rose Mills Road',
  addressLine3: 'Santa Clara,CA 95054',
  withIcon: true,
  Cardborder : true
};

