import { BrowserModule } from '@angular/platform-browser';
import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';
import { RdsVideoPlayerComponent } from './rds-video-player.component'

export default {
  title: 'Elements/VideoPlayer',
  component: RdsVideoPlayerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule]
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsVideoPlayerComponent> = (args: RdsVideoPlayerComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['videoLink'] } };
Default.args = {
videoLink:'http://static.videogular.com/assets/videos/videogular.mp4',
}