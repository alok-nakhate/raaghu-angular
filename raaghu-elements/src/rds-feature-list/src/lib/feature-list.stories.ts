import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsFeatureListComponent } from './rds-feature-list.component';

export default {
    title: 'Elements/Feature List',
    component: RdsFeatureListComponent,
    decorators: [
        moduleMetadata({
            imports: [
                RdsIconModule,
                CommonModule,
                FormsModule
            ],
        }),
    ],
    argTypes: {
        display_type: {
            options: ['basic', 'advanced'],
            control: { type: 'select' }
        },
    }
} as Meta

const Template: Story<RdsFeatureListComponent> = (args: RdsFeatureListComponent) => ({
    props: args,
});

export const Default = Template.bind({})
Default.args = {
    header: 'Features',
    display_type: 'basic',
    listItems: [
        {
            id: 1, value: 'Only the best materials',
           /*  listItems: [
                {
                    id: 1, value: 'Only the best materials',
                    listItems: [
                        { id: 1, value: 'Only the best materials' },
                        { id: 2, value: 'Ethically and locally made' },
                        { id: 3, value: 'Pre-washed and pre-shrunk' },
                        { id: 4, value: 'Machine wash cold with similar colors' },
                        { id: 5, value: 'Stainless strap loops' },
                        { id: 6, value: 'Double stitched construction' },
                        { id: 7, value: 'Water-resistant' },
                    ]
                }
            ], */
        },
        { id: 2, value: 'Ethically and locally made' },
        { id: 3, value: 'Pre-washed and pre-shrunk' },
        { id: 4, value: 'Machine wash cold with similar colors' },
        { id: 5, value: 'Stainless strap loops' },
        { id: 6, value: 'Double stitched construction' },
        { id: 7, value: 'Water-resistant' },
    ],
    columns: 1,
}