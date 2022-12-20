
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsLabelComponent } from './rds-label.component';

export default {
  title: 'Elements/Label',
  component: RdsLabelComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsLabelComponent> = (args: RdsLabelComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['label', 'bold', 'italic'] } };

Default.args = {
  label: "this is a label",
  bold: false,
  italic: false,
}

const mutilineTemplate: Story<any> = (args: RdsLabelComponent) => ({
  props: args,
  template: `<div>
<rds-label [label]="label" [bold]="bold" [class.pe-2]="!multiline" [italic]="italic" [multiline]="multiline"></rds-label>
<rds-label [label]="label1" [bold]="bold" [italic]="italic" [multiline]="multiline"></rds-label>
</div>`
});
export const multiline = mutilineTemplate.bind({});
multiline.parameters = { controls: { include: ['label', 'bold', 'italic', 'multiline','label1'] } };
multiline.args = {
  label: "this is a label",
  label1: 'this is a label2',
  multiline: true,
  bold: false,
  italic: false,
}

