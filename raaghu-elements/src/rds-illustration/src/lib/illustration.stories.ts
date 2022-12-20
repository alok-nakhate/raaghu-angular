import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { RdsIconModule } from '@libs/rds-icon';
import { RdsIllustrationComponent } from "./rds-illustration.component";

export default {
    title: 'Elements/Illustration',
    component: RdsIllustrationComponent,
    decorators: [
        moduleMetadata({
            imports: [RdsIconModule],
        }),
    ],
    argTypes: {

    },
} as Meta

const Template: Story<RdsIllustrationComponent> = (args: RdsIllustrationComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['label', 'subLabel', 'iconHeight', 'iconWidth'] } };
Default.args = {
    label: 'Currently you do not have Webhook Subscriptions',
    subLabel: 'Click on the button above to add',
    iconHeight: '168px',
    iconWidth: '168px'
}

