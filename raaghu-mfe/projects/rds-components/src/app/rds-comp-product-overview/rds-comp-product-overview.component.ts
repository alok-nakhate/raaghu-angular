import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-product-overview',
  templateUrl: './rds-comp-product-overview.component.html',
  styleUrls: ['./rds-comp-product-overview.component.scss'],
})
export class RdsCompProductOverviewComponent {
  @Input() productType:
    | 'producroverview1'
    | 'producroverview2'
    | 'producroverview3'
    | 'producroverview4'
    | 'producroverviewdescription' = 'producroverview1';

  sizeData: [];
  sizeDataWithDescription: [];
  @Input() itemListbenefit: [];
  @Input() producroverview1 = [
    {
      name: 'Men',
      route: '/Men',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
    {
      name: 'Cloting',
      route: '/Cloting',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
    {
      name: 'Basic Tee 6-pack',
      route: '/Basic Tee 6-pack',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
  ];
  @Input() producroverview2 = [
    {
      name: 'Women',
      route: '/Men',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
    {
      name: 'Cloting',
      route: '/Cloting',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
    {
      name: 'Basic Tee',
      route: '/Basic Tee',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
  ];
  @Input() producroverview4 = [
    {
      name: 'Travel',
      route: '/Travel',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
    {
      name: 'Bags',
      route: '/Bags',
      iconClass: 'dashboard',
      iconWidth: '15px',
      iconHeight: '15px',
      disabled: true,
    },
  ];
  listItems: [] = [];
  itemList: [];
  item: [
    {
      id: 1;
      icon: 'roles';
      iconHeight: '25px';
      iconWidth: '25px';
      title: 'International delivery';
      description: 'Get your order in 2 years';
    }
  ];
  @Input() fill:boolean;
  @Input() colorVariantName:string;
 
  @Input() imgitemList: [
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png',
    'https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/1_dac179d7-7d1c-438c-a053-e85703a08be1_160x.jpg?v=1639546727',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_160x.jpg?v=1639994439',
    'https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439'
  ];

  likebtn(){
    // if (itemColor == 'danger') {
    //   this.colorVariantName = 'dark';
    //   this.fill = false;
    // } else if (itemColor == 'dark') {
    //   this.colorVariantName = 'danger';
    //   this.fill = true;
    // }
  }
}
