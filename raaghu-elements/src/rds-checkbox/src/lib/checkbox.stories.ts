import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from "@storybook/addon-actions";
import { RdsCheckboxComponent } from './rds-checkbox.component';
import { FormsModule } from '@angular/forms';
export default {
    title: 'Elements/Checkbox',
    component: RdsCheckboxComponent ,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [CommonModule, FormsModule],
      }),
    ],
    argTypes: {
         
    },
    excludeStories: /.*Data$/
} as Meta

const Template: Story<RdsCheckboxComponent> = (args: RdsCheckboxComponent) => ({
    props: { 
      ...args,
      onCheck: actionsData.onCheck,
      onUncheck: actionsData.onUncheck
    }
});
export const actionsData = {
  onUncheck: action("onUncheck"),
  onCheck: action("onCheck")
};

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['label', 'checked', 'disabled', 'switch', 'inline', 'state', 'id', 'withLabel', 'isInputGroup'] } };
Default.args = {
 label:'default checkbox',
 checked:false,
 disabled:false,
 switch:false,
 inline:false,
 state:'checkbox',
 id:"checkboxid",
 withLabel: true,
 isInputGroup: false
}
