
import { CommonModule } from '@angular/common';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RdsWebsiteMetricComponent } from './rds-website-metric.component';

export default {
    title: 'Elements/Website Metric',
    component: RdsWebsiteMetricComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule,
                RdsLabelModule,
                RdsIconModule,
                RdsButtonModule]
        }),
    ],
    argTypes: {
        colorVariant: {
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            control: { type: 'select' }
        },
        display_type: { table: { disable: true, }, },
    }
} as Meta;

const Template: Story<RdsWebsiteMetricComponent> = (args: RdsWebsiteMetricComponent) => ({
    props: args,
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['display_type', 'item'] } };
Default.args = {
    display_type: 'metric_type1',
    item: {
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'
    }
}

export const withTopBorder = Template.bind({})
withTopBorder.parameters = { controls: { include: ['display_type', 'item'] } };
withTopBorder.args = {
    display_type: 'metric_type2',
    item: {
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'

    }
}

export const leftAligned = Template.bind({})
leftAligned.parameters = { controls: { include: ['display_type', 'item'] } };
leftAligned.args = {
    display_type: 'metric_type3',
    item: {
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with',
        icon: 'edit',
        iconHeight: '20px',
        iconWidth: '20px'
    }
}
export const withLeftAlignedIcon = Template.bind({})
withLeftAlignedIcon.parameters = { controls: { include: ['display_type', 'item'] } };
withLeftAlignedIcon.args = {
    display_type: 'metric_type4',
    item: {
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with',
        icon: 'edit',
        iconHeight: '20px',
        iconWidth: '20px',

    }
}
export const withCenterAlignedIcon = Template.bind({})
withCenterAlignedIcon.parameters = { controls: { include: ['display_type', 'item'] } };
withCenterAlignedIcon.args = {
    display_type: 'metric_type5',
    item: {
        title: '510+',
        icon: 'edit',
        iconHeight: '20px',
        iconWidth: '20px',
        link: 'Learn more',
        subtitle: 'Clients Worked with'


    }
}
export const centerAligned = Template.bind({})
centerAligned.parameters = { controls: { include: ['display_type', 'item'] } };
centerAligned.args = {
    display_type: 'metric_type6',
    item: {
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with',
        description: 'We have successfully onboard more than 510 clients as of now. Amazing work experience with them'
    }
}