import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsRatingModule } from '@libs/rds-rating';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsReviewCategoryComponent } from './rds-review-category.component';

export default {
  title: 'Elements/Review-category',
  component: RdsReviewCategoryComponent,
  decorators: [
    moduleMetadata({
      imports: [  
        FormsModule, ReactiveFormsModule, 
        RdsLabelModule,
        RdsRatingModule,
        RdsLikeDislikeModule,
        RdsIconModule,
        RdsAvatarModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    display_type: {table: {disable: true,},},
  }
 } as Meta;

const Template: Story<RdsReviewCategoryComponent> = (args: RdsReviewCategoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['display_type', 'item'] } };
Default.args = {
  display_type:'Basic',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
  }
  
}

export const leftAligned = Template.bind({});
leftAligned.parameters = { controls: { include: ['display_type', 'item'] } };
leftAligned.args= {
  display_type:'ReviewType_1',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    reviewRate: 4,
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
  }
}
export const centerAligned = Template.bind({});
centerAligned.parameters = { controls: { include: ['display_type', 'item'] } };
centerAligned.args= {
  display_type:'ReviewType_2',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    imageUrl:'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
  }
}

