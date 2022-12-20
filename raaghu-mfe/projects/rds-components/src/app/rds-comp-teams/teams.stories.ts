import { FormBuilder, FormsModule } from '@angular/forms';
import { RdsIconModule, RdsLabelModule, RdsTeamMemberModule } from '@libs/rds-elements';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCompTeamsComponent } from './rds-comp-teams.component';


export default {
  title: 'Components/Teams',
  component: RdsCompTeamsComponent,
  decorators: [
        moduleMetadata({
          declarations: [RdsCompTeamsComponent],
          imports: [FormsModule,
            RdsLabelModule,RdsTeamMemberModule,RdsIconModule
          ],
          providers: [
            FormBuilder
          ],
        })
      ]
} as Meta;
const Template: Story<RdsCompTeamsComponent> = (args: RdsCompTeamsComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
      displayType: 'Basic',
      teamItem : [
        {
          title: 'Tina',
          subTitle: 'Web Developer',
          imgLink:'../assets/no-profile-picture-icon.png',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        },
        {
          title: 'Wily',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        } ,
        {
          title: 'Vivek',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        } ,
        {
          title: 'Riya',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        }     
      ]
    }
 
  export const advanced = Template.bind({});
    advanced.args = {
  displayType: 'Advance',
  teamItem : [
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    },
    {
      title: 'Wily',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Vivek',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Riya',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    }     
  ]
}