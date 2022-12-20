import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPaginationComponent } from './rds-pagination.component';
import { RdsIconModule } from '@libs/rds-icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
      title: 'Elements/Pagination',
      component: RdsPaginationComponent,
      decorators: [
            moduleMetadata({
                  imports: [RdsIconModule, CommonModule, FormsModule]
            }),
      ],
      argTypes: {
            role: {
                  table: {
                        disable: true
                  }
            }
      },
} as Meta;
const Template: Story<RdsPaginationComponent> = (args: RdsPaginationComponent) => ({
      props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['totalRecords', 'recordsPerPage', 'size', 'role', 'alignmentType'] } };

Default.args = {
      totalRecords: 10,
      recordsPerPage: 1,
      role: 'Basic',
      size: 'small',
      alignmentType: 'start'
};
export const advanced = Template.bind({});
advanced.parameters = { controls: { include: ['totalRecords', 'recordsPerPage', 'size', 'role', 'alignmentType'] } };

advanced.args = {
      totalRecords: 101,
      recordsPerPage: 5,
      role: 'Advanced',
      alignmentType: 'start'
};
