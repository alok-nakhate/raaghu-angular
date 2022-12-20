
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsFeedComponent } from './rds-feed.component';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRatingModule } from '@libs/rds-rating';


export default {
  title: 'Elements/Feed',
  component: RdsFeedComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        CommonModule,
        RdsAvatarModule,
        RdsLabelModule,
        RdsLikeDislikeModule,
        RdsRatingModule,
        RdsIconModule
      ]
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsFeedComponent> = (args: RdsFeedComponent) => ({
  props: args,
});
export const Default = Template.bind({})
Default.parameters = { controls: { include: ['itemList'] } };
Default.args = {
  itemList: [
    {
      'actor': 'Jijo Fleshman',
      'username': '@jijolife123',
      date: '2022/01/03',
      feedIcon:'avatar',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      'description': 'This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.'

    }
  ]
}
