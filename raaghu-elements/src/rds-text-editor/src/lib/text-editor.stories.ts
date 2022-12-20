import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { QuillModule } from 'ngx-quill';
import { RdsTextEditorComponent } from './rds-text-editor.component';

export default {
  title: 'Elements/Text Editor',
  component: RdsTextEditorComponent,
  decorators: [
    moduleMetadata({
      imports: [QuillModule.forRoot(), CommonModule, FormsModule]
    }),
  ],
  argTypes: {
    editorData: { control: { type: 'text' } },
  },
} as Meta

const Template: Story<RdsTextEditorComponent> = (args: RdsTextEditorComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['id', 'editorData'] } };
Default.args = {
  id: '',
  editorData: '<p>Hello!</p>',
}

