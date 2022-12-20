import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsColorModule, RdsFeedModule, RdsLabelModule, RdsPriceModule, RdsProductImageModule, RdsRatingModule } from '@libs/rds-elements';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';
import { RdsIconModule } from '@libs/rds-icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

export default {
  title: 'Components/Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsCardModule, RdsBadgeModule,
        RdsColorModule, RdsRatingModule, RdsIconModule,RdsLabelModule,RdsProductImageModule,
        InfiniteScrollModule,RdsPriceModule,RdsFeedModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({
  props: {
    ...args
  }
});

export const withInlinePrice = Template.bind({});
withInlinePrice.args = {
  role: 'withInlinePrice',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: '../assets/inline_price.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee ", "subTitle": "White ", "price": "35", "badgeLabel": "", imageUrl: '../assets/inline_price.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee ", "subTitle": "White ", "price": "35", "badgeLabel": "", imageUrl: '../assets/inline_price.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee ", "subTitle": "White ", "price": "35", "badgeLabel": "Quality Assured", imageUrl: '../assets/inline_price.png', iconColor: 'dark', fill: false },]
}

export const simple = Template.bind({})
simple.args = {
  role: 'simple',
  productListItems: [{ id: 1, "icon": "heart","title": "Earthen Bottle", "subTitle": "Earthen Bottle ", "price": "35", "badgeLabel": "Quality Assured", imageUrl: '../assets/earthen_bottle.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Nomad Tumbler Bottle", "subTitle": "Nomad Tumbler Bottle", "price": "40", "badgeLabel": "", imageUrl: '../assets/tumbler_bottle.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Pure Glass Bottl", "subTitle": "Pure Glass Bottle", "price": "45", "badgeLabel": "", imageUrl: '../assets/pure_glass_bottle.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Teracotta Jar", "subTitle": "Teracotta Jar", "price": "35", "badgeLabel": "", imageUrl: '../assets/teracota_jar.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Mozing Ceramic Vase", "subTitle": "Mozing Ceramic Vase", "price": "40", "badgeLabel": "Quality Assured", imageUrl: '../assets/ceramic_vase.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "White Ceramic Vase", "subTitle": "White Ceramic Vase", "price": "45", "badgeLabel": "", imageUrl: '../assets/white_ceramic_vase.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "China Ceramic Vase", "subTitle": "China Ceramic Vase", "price": "35", "badgeLabel": "Quality Assured", imageUrl: '../assets/china_vase.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "High Gloss Vase", "subTitle": "High Gloss Vase", "price": "40", "badgeLabel": "", imageUrl: '../assets/high_gloss_vase.png', iconColor: 'dark', fill: false },],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withCTALink = Template.bind({})
withCTALink.args = {
  role: 'withCTALink',
  productListItems: [{ id: 1, "icon": "heart","title": "Leather Long Wallet", "subTitle": "Natural", "price": "35", "badgeLabel": "Lowest Price", imageUrl: '../assets/Leather_long_wallet.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Pen with Diary", "subTitle": "Black", "price": "43", "badgeLabel": "", imageUrl: '../assets/Pen_with_diary.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Tea Coaster Set Antique", "subTitle": "", "price": "51", "badgeLabel": "Lowest Price", imageUrl: '../assets/tea_coaster_Set_antique.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Wood Primer Toy", "subTitle": "Natural", "price": "33", "badgeLabel": "Eco Friendly", imageUrl: '../assets/wood_primer_toy.png', iconColor: 'dark', fill: false  },],
  
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withColorSwatchesAndHorizontalScrolling = Template.bind({})
withColorSwatchesAndHorizontalScrolling.args = {
  role: 'withColorSwatchesAndHorizontalScrolling',
  productListItems: [{ id: 1, "icon": "heart","title": "Premium Quality Ink Pen ", "subTitle": "Black", "price": "33", "badgeLabel": "", imageUrl: '../assets/Ink_pen.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Layer Glass Water Bottle", "subTitle": "Glass", "price": "24", "badgeLabel": "", imageUrl: '../assets/Layer_glass_bottle.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Elegant Creative Art", "subTitle": "Golden", "price": "55", "badgeLabel": "", imageUrl: '../assets/elegant_creative_art.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Door Hanger", "subTitle": "Brown", "price": "20", "badgeLabel": "Eco", imageUrl: '../assets/Door_hanger.png', iconColor: 'dark', fill: false  },],
  itemListColor: [
    { id: 1, color: '#353333' },
    { id: 2, color: '#FFC405' },
    { id: 3, color: '#E2E8EE' },
  ],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}


export const withTallImages = Template.bind({})
withTallImages.args = {
  role: 'withTallImages',
  productListItems: [{ id: 1, "icon": "heart","title": "Premium Finish Table", "subTitle": "Natural Brown", "price": "140", "badgeLabel": "Quality Assured", imageUrl: '../assets/finish_table.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Premium Rose Wood Chair", "subTitle": "BLue White Checks", "price": "41", "badgeLabel": "", imageUrl: '../assets/wood_chair.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Lounge Chair", "subTitle": "Silver", "price": "60", "badgeLabel": "", imageUrl: '../assets/Lounge_Chair.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Brass Peace Sign Metal Paperweight", "subTitle": "Golden Yellow", "price": "64", "badgeLabel": "", imageUrl: '../assets/brass_metal.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Gold Finish Metal Paperweight", "subTitle": "Silver", "price": "29", "badgeLabel": "", imageUrl: '../assets/gold_finish_metal.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Silver Finish Metal Paperweight", "subTitle": "Silver", "price": "60", "badgeLabel": "", imageUrl: '../assets/silver_metal.png', iconColor: 'dark', fill: false },
  
]}

export const withImageOverlayAndAddButton = Template.bind({})
withImageOverlayAndAddButton.args = {
  role: 'withImageOverlayAndAddButton',
  productListItems: [{ id: 1, "icon": "heart","title": "Leather long Wallet", "subTitle": "Natural", "price": "170", "badgeLabel": "Lowest Price", imageUrl: '../assets/Leather_wallet.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Hand Bag", "subTitle": "Natural", "price": "155 ", "badgeLabel": "", imageUrl: '../assets/leather_bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Office Bag", "subTitle": "Natural", "price": "120", "badgeLabel": "", imageUrl: '../assets/leather_office_bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Girls Bag", "subTitle": "Natural", "price": "190", "badgeLabel": "Quality Assured", imageUrl: '../assets/leather_girls_bag.png', iconColor: 'dark', fill: false },]
}

export const withTallImagesAndCTALink = Template.bind({})
withTallImagesAndCTALink.args = {
  role: 'withTallImagesAndCTALink',
  productListItems: [{ id: 1, "icon": "heart","title": "Silver/Black Basic Tee", "subTitle": "Light BLue", "price": "23", "badgeLabel": "Quality Assured", imageUrl: '../assets/Silver_Basic_Tee.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Dark Blue Check Shirt", "subTitle": "BLue White Checks", "price": "32", "badgeLabel": "", imageUrl: '../assets/dark_blue_check_shirt.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Office fit White Shirt", "subTitle": "Light BLue", "price": "28", "badgeLabel": "Free Transport", imageUrl: '../assets/office_fit.png', iconColor: 'dark', fill: false },]

}

export const withBorderGrid = Template.bind({})
withBorderGrid.args = {
  role: 'withBorderGrid',
  productListItems: [{ id: 1, "icon": "heart","title": "Notebook Set", "subTitle": "", "price": "160", "badgeLabel": "", imageUrl: '../assets/notebook_set.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Pen Set", "subTitle": "", "price": "120", "badgeLabel": "", imageUrl: '../assets/pen_set.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Lunch Box", "subTitle": "", "price": "199", "badgeLabel": "", imageUrl: '../assets/lunch_box.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Pencil Box", "subTitle": "", "price": "149", "badgeLabel": "", imageUrl: '../assets/pencil_box.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "School Bag-Black", "subTitle": "", "price": "112", "badgeLabel": "", imageUrl: '../assets/school_bag_black.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "School Bag-Blue", "subTitle": "", "price": "170", "badgeLabel": "", imageUrl: '../assets/school_bag_blue.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "School Bag-Black Red", "subTitle": "", "price": "120", "badgeLabel": "", imageUrl: '../assets/school_bag_black_red.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "School Bag-Red", "subTitle": "", "price": "125", "badgeLabel": "", imageUrl: '../assets/school_bag_red.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "School Bag-Green", "subTitle": "", "price": "125", "badgeLabel": "", imageUrl: '../assets/school_bag_green.png', iconColor: 'dark', fill: false }],

  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withSupportingText = Template.bind({})
withSupportingText.args = {
  role: 'withSupportingText',
  productListItems: [{ id: 1, "icon": "heart","title": "Duffle Bag Fancy", "subTitle": "Navy Natural ", "price": "325", "badgeLabel": "Lowest Price", imageUrl: '../assets/Blue_duffle_ bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Duffle Bag Fresh Blue", "subTitle": "Royal Blue", "price": "413", "badgeLabel": "", imageUrl: '../assets/fresh_blue_bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Duffle Bag", "subTitle": "Natural Grey", "price": "511", "badgeLabel": "Lowest Price", imageUrl: '../assets/Duffle_Bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Duffle Bag Sprt Blue", "subTitle": "Sky Blue", "price": "333", "badgeLabel": "Eco Friendly", imageUrl: '../assets/Duffle_bag_sport_blue.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Duffle Bag", "subTitle": "Rock Black", "price": "235", "badgeLabel": "Lowest Price", imageUrl: '../assets/leather_duffle_bag.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Duffle Bag", "subTitle": "Natural Finish", "price": "423", "badgeLabel": "", imageUrl: '../assets/duffle_bag_brown_1.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Duffle Bag", "subTitle": "Natural Finish", "price": "511", "badgeLabel": "Lowest Price", imageUrl: '../assets/duffle_bag_brown_1.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Leather Bag for Laptop", "subTitle": "Natural Finish", "price": "533", "badgeLabel": "Eco Friendly", imageUrl: '../assets/duffle_bag_for_laptop.png', iconColor: 'dark', fill: false },]
}

export const cardWithFullDetails = Template.bind({})
cardWithFullDetails.args = {
  role: 'cardWithFullDetails',
  productListItems: [{ id: 1, "icon": "heart", "title": "Premium Quality Soft T-shirt", "subTitle": "White/Gray", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://www.linkpicture.com/q/Group-191322@2x_1.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Premium Quality Soft T-shirt", "subTitle": "White/Black", "price": "$40", "badgeLabel": "", imageUrl: 'https://www.linkpicture.com/q/Group-191323@2x.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Premium Quality Soft T-shirt", "subTitle": "White", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://www.linkpicture.com/q/Group-191324@2x.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Premium T-shirt", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://www.linkpicture.com/q/Group-191324@2x.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Premium T-shirt 2", "subTitle": "Grey and Yellow", "price": "$40", "badgeLabel": "", imageUrl: 'https://www.linkpicture.com/q/Group-191325@2x.png', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Premium T-shirt 3", "subTitle": "White", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://www.linkpicture.com/q/Group-191326@2x.png', iconColor: 'dark', fill: false  },],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}
export const ProductImageWithTitle = Template.bind({})
ProductImageWithTitle.args = {
  role: 'ImageWithTitle',
  productListItems: [{ id: 1, "icon": "heart", "title": "Basic Tee", imageUrl: 'https://www.linkpicture.com/q/product_img_with_title_1.png', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee 2", imageUrl: 'https://www.linkpicture.com/q/product_img_with_title_1.png', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee 3", imageUrl: 'https://www.linkpicture.com/q/product_img_with_title_1.png', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee", imageUrl: 'https://www.linkpicture.com/q/product_img_with_title_1.png', iconColor: 'dark', fill: false  }],
}

export const productWithInfo= Template.bind({})
productWithInfo.args = {
  role: 'ImageWithInfo',
  productListItems: [{id: 1, "icon": "heart", "title": "Basic Tee 1", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 4", "subTitle": "White",imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false }]
}

export const InfiniteProductList= Template.bind({})
InfiniteProductList.args = {
  role: 'infiniteproductlist',
  productListItems: [{ id: 1, "icon": "heart", "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 2, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 3, "icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 4, "icon": "heart", "title": "School Bag Black", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 5, "icon": "heart", "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 6, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 7, "icon": "heart", "title": "School Bag", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 8, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 9, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 10,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 11,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'] , iconColor: 'dark', fill: false },
  { id: 12,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 13,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 14,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 15,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'] , iconColor: 'dark', fill: false },
  { id: 16,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 17,"icon": "heart",  "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'] , iconColor: 'dark', fill: false },
  { id: 18,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false }
],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]
}




// productListItems: [
//   { "title": "Basic Tee", "subTitle": "White", "imageUrl": "https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//   { "title": "Basic Tee 2", "subTitle": "White 2", "imageUrl": "https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg" },
//   { "title": "Basic Tee 3", "subTitle": "White 2", "imageUrl": "https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg" },
//   { "title": "Basic Tee", "subTitle": "White","imageUrl": "https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]
// }









