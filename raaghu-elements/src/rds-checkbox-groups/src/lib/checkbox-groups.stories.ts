import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from "@storybook/addon-actions";
import { RdsCheckboxGroupsComponent } from './rds-checkbox-groups.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export default {
    title: 'Elements/Checkbox Group',
    component: RdsCheckboxGroupsComponent ,
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

const Template: Story<RdsCheckboxGroupsComponent> = (args: RdsCheckboxGroupsComponent) => ({
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

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['itemList', 'switch', 'inline', 'state', 'withLabel', 'isInputGroup'] } };
Default.args = {
itemList : [
  {
    id: 1,
    label: "Child Checkbox 1",
    checked: false,
    disabled: false,
  },
  {
    id: 2,
    label: "Child Checkbox 2",
    checked: false,
    disabled: false,
  },  
],
 switch:false,
 inline:false,
 state:'checkbox',
 withLabel: true,
 isInputGroup: false
}
