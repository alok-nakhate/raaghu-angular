import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsLabelModule, RdsRadioButtonModule, RdsTableModule } from '@libs/rds-elements';
import { RdsCompPricingTableComponent } from './rds-comp-pricing-table.component';
import { RdsLikeDislikeModule } from '../../../../libs/rds-elements/src/rds-like-dislike/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Components/Pricing Table',
  component: RdsCompPricingTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompPricingTableComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsTableModule,
        RdsRadioButtonModule,
        RdsLabelModule,
        RdsLikeDislikeModule,
        RdsIconModule
      ],
      providers: [
        FormBuilder,
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompPricingTableComponent> = (args: RdsCompPricingTableComponent) => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  selectedPlan: 'Monthly Plan',
  planList: [
    {
      "id": 1,
      "label": "Monthly Plan",
      "name": "Radio-Button",
      "checked": true,
      "planInfo": [{
        "price": "$240 ",
        "description": "Video team and setup, we can create product.",

      },
      {
        "price": "$300 ",
        "description": "Video team and setup, we can create product.",

      },
      {
        "price": "$420 ",
        "description": "Video team and setup, we can create product.",

      }]
    },
    {
      "id": 2,
      "label": "Yearly Plan",
      "name": "Radio-Button",
      "checked": false,
      "planInfo": [
        {
          "price": "$300 ",
          "description": "Video team and setup, we can create product.",
        },
        {
          "price": "$420 ",
          "description": "Video team and setup, we can create product.",

        },
        {
          "price": "$480 ",
          "description": "Video team and setup, we can create product.",

        }]
    },
  ],

  pricingTableHeaderItems: [
    { displayName: 'Plans', dataType: 'html', key: 'name', class:'w-250px py-2' },
    { displayName: 'Regular', dataType: 'icon', key: 'regular', class: 'min-w-200px w-20 text-center py-2' },
    { displayName: 'Professional', dataType: 'icon', key: 'professional', class: 'min-w-200px w-20 text-center py-2' },
    { displayName: 'Ultimate', dataType: 'icon', key: 'ultimate', class: 'min-w-200px w-20 text-center py-2' }],
  pricingTableBodyItems:
    [
      { name: { value: '<b>DESIGN SYSTEM</b>', type: 'html' }, regular: { value: '', type: 'text' }, professional: { value: '', type: 'text' }, ultimate: { value: '', type: 'text' } },
      { id: 1, name: 'Host admin screen', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 2, name: 'Tenant Admin screens', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 3, name: 'End users screens', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 4, name: 'Elements & Component library', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 5, name: 'Downloadable Adobe XD & Figma Kits', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 6, name: 'Theme - Light & Dark mode', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 7, name: 'Theme - Accessible (High Contrast)', regular: 'check', professional: 'check', ultimate: 'check' },
      { name: { value: '<b>Micro Front-end</b>', type: 'html' }, regular: { value: '', type: 'text' }, professional: { value: '', type: 'text' }, ultimate: { value: '', type: 'text' } },
      { id: 1, name: 'CI/CD for Azure DevOps', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 2, name: 'Micro Front-end Framework with Angular Support', regular: 'check', professional: 'check', ultimate: 'check' },
      { id: 3, name: 'Integration with Kendo UI Controls', regular: 'check', ultimate: 'check', professional: 'check' },
      { id: 4, name: 'Integration with Syncfusion control integration', regular: 'check', professional: 'check', ultimate: 'check' },
      { name: { value: '<b>Specification</b>', type: 'html' }, regular: { value: '', type: 'text' }, professional: { value: '', type: 'text' }, ultimate: { value: '', type: 'text' } },
      { id: 1, name: { value: 'Included developer licenses', type: 'text' }, regular: { value: '3', type: 'text' }, professional: { value: '10', type: 'text' }, ultimate: { value: '20', type: 'text' } },
      { id: 2, name: { value: 'Additional developer license', type: 'text' }, regular: { value: '$499', type: 'text' }, professional: { value: '$399', type: 'text' }, ultimate: { value: '$299', type: 'text' } },
      { id: 3, name: { value: 'No of Projects', type: 'text' }, regular: { value: 'Single project', type: 'text' }, professional: { value: '3 project', type: 'text' }, ultimate: { value: '3 project', type: 'text' } },
      { id: 4, name: { value: 'Perpetual license', type: 'text' }, regular: { value: 'Yes', type: 'text' }, professional: { value: 'Yes', type: 'text' }, ultimate: { value: 'Yes', type: 'text' } },
      { id: 5, name: { value: 'Latest source Code access', type: 'text' }, regular: { value: '1 year', type: 'text' }, professional: { value: '3 year', type: 'text' }, ultimate: { value: 'Lifetime', type: 'text' } },
      { id: 6, name: { value: 'Access to Premium Support Forum', type: 'text' }, regular: { value: 'No', type: 'text' }, professional: { value: 'No', type: 'text' }, ultimate: { value: 'Yes', type: 'text' } },
      { id: 7, name: { value: 'Forum support incident count/year', type: 'text' }, regular: { value: '20', type: 'text' }, professional: { value: '50', type: 'text' }, ultimate: { value: 'Unlimited', type: 'text' } },
      { id: 8, name: { value: 'Forum support incident count/year', type: 'text' }, regular: { value: '$199', type: 'text' }, professional: { value: '$99', type: 'text' }, ultimate: { value: 'Free', type: 'text' } },
      { id: 9, name: { value: 'Private ticket & email support', type: 'text' }, regular: { value: 'No', type: 'text' }, professional: { value: 'Yes', type: 'text' }, ultimate: { value: 'Yes', type: 'text' } },
      { name: { value: '', type: '' }, regular: { value: '<span class="btn btn-info">BUY NOW</span>', type: 'html' }, professional: { value: '<span class="btn btn-info">BUY NOW</span>', type: 'html' }, ultimate: { value: '<span class="btn btn-info">BUY NOW</span>', type: 'html' } },

    ]
}
