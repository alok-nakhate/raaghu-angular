import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsIconLabelModule, RdsIconModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule } from '@libs/shared';
import { RdsCompShoppingCartProductComponent } from './rds-comp-shopping-cart-product.component';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

export default {
  title: 'Components/Shopping cart',
  component: RdsCompShoppingCartProductComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule , ReactiveFormsModule ,NgxTranslateModule,CommonModule, RdsSelectListModule, RdsIconModule , RdsLabelModule ,RdsIconLabelModule,  RdsIconModule
      ],
      providers: [
        FormBuilder, DecimalPipe
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompShoppingCartProductComponent> = (args: RdsCompShoppingCartProductComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});

Default.args = {
  role: 'basic',
  isCheckout: true,
  itemList:[
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt', 
      prdosubname: 'Gray - medium', 
      price: 12,
      quantity:[
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value:6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ]

      ,
      highlights: {
        icon: 'check',
        label: 'In Stock'
      },

    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'Black & White - Large',
      price: 33,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'clock',
        label: 'Ships in 3-4 weeks'
      },

    }
    ,
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'White - Small',
      price: 9,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'check',
        label: 'In Stock'
      },

    }
  ]
};

export const withoutQuantity = Template.bind({});

withoutQuantity.args = {
  isCheckout: true,
  role: 'withoutQuantity',
  itemList:[
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Product Name 1', 
      prdosubname: 'Sub Name', 
      price: 12,
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Product Name 2',
      prdosubname: 'Sub Name',
      price: 33,
    }
  ]
}