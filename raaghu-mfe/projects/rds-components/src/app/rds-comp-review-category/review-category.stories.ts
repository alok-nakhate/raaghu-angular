import { FormBuilder, FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsIconModule, RdsLabelModule, RdsLikeDislikeModule, RdsRatingModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';
import { RdsCompReviewCategoryComponent } from './rds-comp-review-category.component';
import { RdsReviewCategoryModule } from 'projects/libs/rds-elements/src/rds-review-category/src/lib/rds-review-category.module';

export default {
    title: 'Components/Review-Category',
    component: RdsCompReviewCategoryComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsRatingModule,
               RdsLikeDislikeModule,
               RdsReviewCategoryModule,
               RdsIconModule
            ],
            providers: [
              FormBuilder
            ],
            
        })
    ]
} as Meta;

const Template: Story<RdsCompReviewCategoryComponent> = (args: RdsCompReviewCategoryComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    itemList: [{
      display_type: "Basic",
      items: [
        { 
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'dasfsdfdg',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'dasfsdfdg',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'dasfsdfdg',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
          }
      ]
    }
  ]
};
export const ReviewType_1 = Template.bind({});
ReviewType_1.args = {
    itemList: [{
      display_type: "ReviewType_1",
      items: [
        {
            name: 'Jems Rock',
            date: new Date(),
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          }
      ]
    }
  ]
};
export const ReviewType_2 = Template.bind({});
ReviewType_2.args = {
    itemList: [{
      display_type: "ReviewType_2",
      items: [
        {
            name: 'Jems Rock',
            date: new Date(),
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          }
      ]
    }
  ]
};


