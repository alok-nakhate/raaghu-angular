import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';
import {
  RdsAccordionModule,
  RdsBadgeModule,
  RdsBenefitModule,
  RdsBreadcrumbModule,
  RdsButtonModule,
  RdsCardModule,
  RdsIconLabelModule,
  RdsLabelModule,
} from '@libs/rds-elements';
import { RdsPriceModule } from 'projects/libs/rds-elements/src/rds-price/src/public-api';
import { RdsFeatureListModule } from 'projects/libs/rds-elements/src/rds-feature-list/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsColorModule } from 'projects/libs/rds-elements/src/rds-color/src/public-api';
import { RdsProductImageModule } from 'projects/libs/rds-elements/src/rds-product-image/src/public-api';
import { RdsRatingModule } from 'projects/libs/rds-elements/src/rds-rating/src/public-api';
import { RdsSizeModule } from 'projects/libs/rds-elements/src/rds-size/src/public-api';
import { RdsCompBenefitComponent } from '../rds-comp-benefit/rds-comp-benefit.component';

export default {
  title: 'Components/Product-Overview',
  component: RdsCompProductOverviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompBenefitComponent,RdsCompProductOverviewComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsBreadcrumbModule,
        RdsLabelModule,
        RdsBadgeModule,
        RdsCardModule,
        RdsButtonModule,
        RdsPriceModule,
        RdsFeatureListModule,
        RdsIconModule,
        RdsColorModule,
        RdsProductImageModule,
        RdsRatingModule,
        RdsIconLabelModule,
        RdsBenefitModule,
        RdsSizeModule,
        RdsAccordionModule
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<RdsCompProductOverviewComponent> = (
  args: RdsCompProductOverviewComponent
) => ({
  props: args,
});

export const ProductOverview1 = Template.bind({});

ProductOverview1.args = {
  productType: 'producroverview1',
  itemList: [
    { id: 1, color: '#FFFFFF' },
    { id: 2, color: '#FDD2FF' },
    { id: 3, color: '#BFEAFF' },
  ],
  item: [
    {
      id: 1,
      icon: 'roles',
      iconHeight: '25px',
      iconWidth: '25px',
      title: 'International delivery',
      description: 'Get your order in 2 years',
    },
  ],


  sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'}]
};

export const ProductOverview2 = Template.bind({});

ProductOverview2.args = {
  productType: 'producroverview2',
  listItems: [
    { id: 1, value: 'Only the best materials', some: 'value' },
    { id: 2, value: 'Ethically and locally made', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
  ],
  itemList: [
    { id: 1, color: '#F88AAC' },
    { id: 2, color: '#6F6F6F' },
    { id: 3, color: '#16BE36' },
  ],
  sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'}],

  itemListbenefit: [{
    display_type: "Basic",
    colSize: 6,
    items: [
      {
        id: 1,
        icon: 'roles',
        iconHeight: "25px",
        iconWidth: "25px",
        title: "International delivery",
        description: "Get your order in 2 month",
        display_type: "Basic",

      },
      {
        id: 1,
        icon: 'roles',
        iconHeight: "25px",
        iconWidth: "25px",
        title: "Loyalty rewards",
        description: "Don't look at other tees",
        display_type: "Basic",
      }
    ]
  }
]
};
export const ProductOverview3 = Template.bind({});

ProductOverview3.args = {
  productType: 'producroverview3',
  listItems: [
    { id: 1, value: 'Multiple strap configurations', some: 'value' },
    { id: 2, value: 'Spacious interior with top zip', some: 'value' },
    { id: 3, value: 'Leather handle and tabs', some: 'value' },
    { id: 4, value: 'Interior dividers', some: 'value' },
    { id: 5, value: 'Stainless strap loops ', some: 'value' },
    { id: 6, value: 'Double stitched construction', some: 'value' },
    { id: 7, value: 'Water-resistant', some: 'value' },
  ],
  itemList: [
    { id: 1, color: '#853610' },
    { id: 2, color: '#323EAE' },
    { id: 3, color: '#FF9900' },
  ]
};
export const ProductOverview4 = Template.bind({});

ProductOverview4.args = {
  productType: 'producroverview4',
  itemList: [
    { id: 1, color: '#E1CBA4' },
    { id: 2, color: '#323EAE' },
    { id: 3, color: '#FF9900' },
  ],
  sizeDataWithDescription : [{value: '18L', description:"Perfect for a reasonable amount of snacks."},{value: '20L', description:"Enough room for a serious amount of snacks."}]

};
export const product_overview_description = Template.bind({});

product_overview_description.args = {
  productType: 'productoverviewdescription',
  listItems: [
    { id: 1, value: 'Hand cut and sewn locally', some: 'value' },
    { id: 2, value: 'Dyed with our proprietary colors', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Ultra-soft 100% cotton', some: 'value' },
  ]
}