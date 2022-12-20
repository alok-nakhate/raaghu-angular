import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsProductImageModule } from '@libs/rds-product-image';
import { RdsTeamMemberComponent } from '@libs/rds-team-member';
import { Story, Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Elements/Team-member',
  component: RdsTeamMemberComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        RdsIconModule,
        RdsProductImageModule,
        RdsLabelModule,
        RdsAvatarModule
      ],
    }),
  ],
  // argTypes: {
  //   displayType: { table: { disable: true, }, },
  // },
} as Meta;

const Template: Story<RdsTeamMemberComponent> = (args: RdsTeamMemberComponent) => ({
  props: args
});

export const Default = Template.bind({});
// Default.parameters = { controls: { include: ['displayType', 'teamItem'] } };
Default.args = {
  displayType : "Basic",
  colorVariant: "primary",
  teamItem : [{
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit',
  }]
};


export const advance = Template.bind({});
advance.args = {
  displayType: 'Advanced',
  colorVariant: 'primary',
  teamItem : [
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit',

    },
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit',

    },
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit',

    }

  ]

}

