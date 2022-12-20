import { CommonModule } from '@angular/common';
import { RdsButtonModule } from '@libs/rds-button';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsPopoverComponent } from './rds-popover.component';


export default {
  title: 'Elements/Popover',
  component: RdsPopoverComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,RdsButtonModule],
    }),
  ],
  argTypes: {
    hover: {table: {disable: true,},},
  }
} as Meta;

const Template: Story<RdsPopoverComponent> = (args: RdsPopoverComponent) => ({
  props: args,
  template:
    `<rds-popover
    [popoverTitle]="popoverTitle"
     [popoverContent] ="popoverContent"
     [popoverPosition]="popoverPosition"
     (onClick)="onClick($event)">
     <rds-button [buttonType]="'labelOnly'" [label]="'popover button'" [colorVariant]="'primary'" [size]="'md'"></rds-button>
   </rds-popover>`
});

export const PopoverWithButton = Template.bind({});
PopoverWithButton.parameters = { controls: { include: ['popoverPosition', 'popoverTitle', 'popoverContent'] } };
PopoverWithButton.args = {
  popoverPosition: 'left',
  popoverTitle: 'popover title',
  popoverContent: 'popover body'
};
/* props: args,*/
//template:
//  `<rds-popover [popoverPosition]= "popoverPosition"
//    [popoverTitle] =  "popoverTitle" (click)="onClick($event)"
//    [popoverContent] =  "popoverContent">
//    <button class="btn btn-primary"> popover button </button>
//    </rds-popover>
//    `,



export const PopoverWithLink: Story<RdsPopoverComponent> = (args) => ({
  props: args,
  template:
    `<rds-popover [popoverPosition]= "popoverPosition"
      [popoverTitle] =  "popoverTitle"
      [popoverContent] =  "popoverContent"
      [hover] = "hover">
      <a role = "button" href = "#"> link button </a>
      </rds-popover>
      `,
});
PopoverWithLink.parameters = { controls: { include: ['popoverPosition', 'popoverTitle', 'popoverContent', 'hover'] } };
PopoverWithLink.args = {
  popoverPosition: 'right',
  popoverTitle: 'popover title',
  popoverContent: 'popover body',
  hover: true,
};
