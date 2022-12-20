import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsTextareaComponent } from './rds-textarea.component';

export default {
  title: 'Elements/Textarea',
  component: RdsTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    labelPosition: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
    disabled: { table: { disable: true, }, },
    readonly: { table: { disable: true, }, },
  }
} as Meta

const Template: Story<RdsTextareaComponent> = (args: RdsTextareaComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['label', 'placeholderText', 'isRequired', 'labelPosition'] } };
Default.args = {
  label: 'Text area',
  placeholderText: "Add Placeholder",
  isRequired: false,
  labelPosition: 'top'
}
export const disabled = Template.bind({});
disabled.parameters = { controls: { include: ['label', 'placeholderText', 'disabled'] } };
disabled.args = {
  label: 'Text area',
  placeholderText: "Add Placeholder",
  disabled: true
}

export const readonly = Template.bind({});
readonly.parameters = { controls: { include: ['label', 'placeholderText', 'readonly'] } };
readonly.args = {
  label: 'Text area',
  placeholderText: "Add Placeholder",
  readonly: true
}

export const floatingLabel = Template.bind({});
floatingLabel.parameters = { controls: { include: ['label', 'placeholderText', 'isFloatingInputLabel'] } };
floatingLabel.args = {
  label: 'Text area',
  placeholderText: "Add Placeholder",
  isFloatingInputLabel: true
}


const tooltipTemplate: Story<RdsTextareaComponent> = (args: RdsTextareaComponent) => ({
  props: args,
  template: `<div class="row m-5">
  <div class="col-md-12 p-5">
<rds-textarea [label]="label"  [tooltipTitle]="tooltipTitle" [placeholderText]="placeholderText" [tooltipPlacement]="tooltipPlacement"></rds-textarea>
</div>
</div>`
});
export const Tooltip = tooltipTemplate.bind({});
Tooltip.parameters = { controls: { include: ['label', 'placeholderText', 'tooltipPlacement', 'tooltipTitle'] } };

Tooltip.args = {
  label: 'Text area',
  placeholderText: "Add Placeholder",
  tooltipPlacement: 'bottom',
  tooltipTitle: 'tooltip'
};
