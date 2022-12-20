import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsRadioButtonModule } from '@libs/rds-radio-button';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCardDetailComponent } from './rds-card-detail.component';

export default {
  title: 'Elements/Bank Card Detail',
  component: RdsCardDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsIconModule, RdsRadioButtonModule, RdsLabelModule],
    }),
  ],
  argTypes: {

  },
} as Meta;

const Template: Story<RdsCardDetailComponent> = (args: RdsCardDetailComponent) => ({
  props: args,
  template: `<rds-card-detail [cardData]=cardData [IsEditAndDefaultFunctionalityRequired]="IsEditAndDefaultFunctionalityRequired"
  [IsSelectionRequired]="IsSelectionRequired" [label]="label">
   </rds-card-detail>`
});

// const teletext = "some text"
export const BankCardDetail = Template.bind({});
BankCardDetail.parameters = { controls: { include: ['cardData', 'IsEditAndDefaultFunctionalityRequired', 'IsSelectionRequired', 'label'] } };
BankCardDetail.args = {
  cardData: {
    cardID: '1011', cardName: 'MasterCard', cardExpiry: '11/2027', cardLogo:'editions', cardNumber: 3596, isDefault:false,radioItems: [{id: 1011, checked: false, name: "Radio-Button"}]
  },
  IsEditAndDefaultFunctionalityRequired:true,
  IsSelectionRequired: true,
  label: 'Label card'
};

