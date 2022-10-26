import { Story, Meta } from '@storybook/angular';
import { RdsOffcanvasComponent } from './rds-offcanvas.component';

export default {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvasComponent,
  argTypes: {
    onShow: { click: "clicked" },
    onClose: { click: "clicked" },
    backdrop: {
      options: ['static', true, false],
      control: { type: 'select' },
    },
    placement: {
      options: ['start', 'end', 'top', 'bottom'],
      control: { type: 'select' },
    },
  },
} as Meta;
const Template: Story<RdsOffcanvasComponent> = (args: RdsOffcanvasComponent) => ({
  props: args,
});
export const Default: Story<RdsOffcanvasComponent> = (args) => ({
  props: args,
  template:
    `
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#canvasExample"
  aria-controls="canvasExample">
   Button
  </button>
  <rds-offcanvas
  [placement]=[placement]
  [canvasTitle]="canvasTitle"
  [backDrop]="backDrop"
  [offId]="offId"
  [offcanvaswidth]="offcanvaswidth"
  [bodySpacing]="bodySpacing"
  >
  </rds-offcanvas> `,

});
Default.parameters = { controls: { include: ['canvasTitle', 'placement', 'backDrop', 'offId','offcanvaswidth'] } };

Default.args = {
  offId: 'canvasExample',
  canvasTitle: 'Offcanvas Title',
  placement: 'top',
  backDrop: 'static',
  offcanvaswidth:650,
};

// export const basic = Template.bind({});
// basic.args = {
//   // offId:'canvas1',
//   backDrop: true,
//   scrolling: true,
//   buttonTitle: 'Button'
// }
