import { CommonModule } from '@angular/common';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCardComponent } from './rds-card.component';

export default {
  title: 'Elements/Card',
  component: RdsCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsAvatarModule],
    }),
  ],
  argTypes: {
    borderColor: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'basic' , 'standard', 'premium', 'professional'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [topBottomPadding]="topBottomPadding" [sidePadding]="sidePadding"
     [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [borderColor]="borderColor">
     <div header class="pt-3 px-3">
        <h5>Header Title</h5>
     </div>
    <div body>  
      <p>Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
    </div>
    <div footer>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </rds-card>`
});
export const Default = Template.bind({});
Default.parameters = { controls: { include: ['showHeader', 'showBody', 'showFooter', 'borderColor', 'custClass',
'topBottomPadding', 'sidePadding'] } };
Default.parameters = { controls: { include: ['colorVariant', 'showHeader', 'showBody', 'showFooter', 'borderColor' ] } };

Default.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  borderColor: undefined,
  topBottomPadding: true,
  sidePadding: true,
  // colorVariant: undefined,
};

const cardWithImageTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [topBottomPadding]="topBottomPadding" [sidePadding]="sidePadding"
    [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [borderColor]="borderColor" [colorVariant]="colorVariant">
  <div header>
    <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
  </div>
   <div body>  
    <h5>Header Title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
  </div>
  <div footer>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   </rds-card>`
});
export const cardWithImage = cardWithImageTemplate.bind({});
Default.parameters = { controls: { include: ['showHeader', 'colorVariant', 'showBody', 'showFooter', 'borderColor', 'custClass',
'topBottomPadding', 'sidePadding'] } };
cardWithImage.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  borderColor: undefined,
  topBottomPadding: true,
  sidePadding: true,
  // colorVariant: undefined,
};

const avatarTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [topBottomPadding]="topBottomPadding" [sidePadding]="sidePadding"
   [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [colorVariant]="colorVariant" [borderColor]="borderColor">
  <div header>
  <div class="banner-image1 position-relative">
      <div>
        <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
      </div>
      <div class="position-absolute avatar-pic">
        <rds-avatar [withProfilePic]="true" size="large" [roundedPills]="false"
        [profilePic]="'https://placekitten.com/300/300'"
        [roundedAvatar]="true">
        </rds-avatar>
      </div>
  </div>
</div> 
   <div body class="pt-3">  
    <h5>Header Title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
   </div>
   <div footer>
   <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
  </rds-card>`
});
export const avatar = avatarTemplate.bind({});
Default.parameters = { controls: { include: ['showHeader', 'colorVariant', 'showBody', 'showFooter', 'borderColor', 'custClass',
'topBottomPadding', 'sidePadding'] } };
avatar.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  borderColor: undefined,
  topBottomPadding: true,
  sidePadding: true,
  // colorVariant: undefined,
};

const centeredAvatarTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [topBottomPadding]="topBottomPadding" [sidePadding]="sidePadding"
    [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter"  [colorVariant]="colorVariant" [borderColor]="borderColor">
  <div header class="">
  <div class="banner-image1 position-relative">
      <div>
        <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
      </div>
      <div class="position-relative avatar-pic2 d-flex justify-content-center">
        <rds-avatar [withProfilePic]="true" size="large" [roundedPills]="false"
        [profilePic]="'https://placekitten.com/300/300'"
        [roundedAvatar]="true">
        </rds-avatar>
      </div>
  </div>
</div>
   <div body>  
    <h5>Header Title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
   </div>
   <div footer>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
  </rds-card>`
});

// const teletext = "some text"
export const withCenteredAvatar = centeredAvatarTemplate.bind({});
Default.parameters = { controls: { include: ['showHeader', 'colorVariant', 'showBody', 'showFooter', 'borderColor', 'custClass',
'topBottomPadding', 'sidePadding'] } };
withCenteredAvatar.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  borderColor: undefined,
  topBottomPadding: true,
  sidePadding: true,
  // colorVariant: undefined,
};
