
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsLabelModule } from '../../../rds-label/src/lib/rds-label.module';
import { RdsLikeDislikeComponent } from './rds-like-dislike.component';

export default {
  title: 'Elements/Like-Dislike',
  component: RdsLikeDislikeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule,RdsLabelModule],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsLikeDislikeComponent> = (args: RdsLikeDislikeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['likeCount', 'dislikeCount'] } };
Default.args = {
  likeCount: 0,
  dislikeCount: 0
}

