import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsRadioButtonModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompPaymentDetailsComponent } from './rds-comp-payment-details.component';


export default {
    title: 'Components/Payment Details',
    component: RdsCompPaymentDetailsComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompPaymentDetailsComponent],
            imports: [
                FormsModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule,RdsCheckboxModule, SharedModule,
                RdsRadioButtonModule
            ],
            providers: [
                FormBuilder,
            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompPaymentDetailsComponent> = (args: RdsCompPaymentDetailsComponent) => ({
    props: {
        ...args
    },

  
     
});
export const Default = Template.bind({});

Default.args = {
    cvc: 123,
    cardNumber: 246,
    name: 'abc',
    expirationDate: 567,
    buttonSpinner: false,
    paymentModeList :[
        {
          "id": 1,
          "label": "Credit Card",
          "checked": true,
          "name": "Radio-Button"
        },
        {
          "id": 2,
          "label": "Paypal",
          "checked": false,
          "name": "Radio-Button"
        },
        {
          "id": 3,
          "label": "eTransfer",
          "checked": false,
          "name": "Radio-Button"
        }
      ]
}

 