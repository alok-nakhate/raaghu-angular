import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsCheckboxParentChildComponent } from './rds-checkbox-parent-child.component';

export default {

  title: 'Elements/Checkbox Parent Child',
  component: RdsCheckboxParentChildComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  argTypes: {

  },
  excludeStories: /.*Data$/
} as Meta;

const Template: Story<RdsCheckboxParentChildComponent> = (args: RdsCheckboxParentChildComponent) => ({
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
Default.parameters = { controls: { include: ['switch', 'inline', 'state', 'isInputGroup', 'itemList'] } };
Default.args = {
  switch: false,
  inline: false,
  state: 'checkbox',
  isInputGroup: false,
  itemList: [
    {
      id: 1,
      label: 'Parent Checkbox 1',
      isSelected: false,
      isIntermediate: false,
      isClosed: false,
      disabled: false,
      childList: [
        {
          id: 1,
          parent_id: 1,
          label: 'Child Checkbox 1',
          isSelected: false,
          disabled: false,
        },
        {
          id: 2,
          parent_id: 1,
          label: 'Child Checkbox 2',
          isSelected: false,
          disabled: false,
        },
        {
          id: 3,
          parent_id: 1,
          label: 'Child Checkbox 3',
          isSelected: false,
          disabled: false,
        },
        {
          id: 4,
          parent_id: 1,
          label: 'Child Checkbox 4',
          isSelected: false,
          disabled: false,
        }
      ]
    },
    {
      id: 2,
      label: 'Parent Checkbox 2',
      isSelected: false,
      isIntermediate: false,
      isClosed: false,
      disabled: false,
      childList: [
        {
          id: 1,
          parent_id: 1,
          label: 'Child Checkbox 1',
          isSelected: false,
          disabled: false,
        },
        {
          id: 2,
          parent_id: 1,
          label: 'Child Checkbox 2',
          isSelected: false,
          disabled: false,
        }
      ]
    },
  ]
}
