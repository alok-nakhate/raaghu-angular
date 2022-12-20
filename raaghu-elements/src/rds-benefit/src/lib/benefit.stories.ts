import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsBadgeModule } from '@libs/rds-badge';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBenefitComponent } from './rds-benefit.component';

export default {
  title: 'ELEMENTS/Benefit',
  component: RdsBenefitComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,
        RdsLabelModule,
        RdsBadgeModule,
        RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
     })
  ] ,
  argTypes: {
    display_type: {table: {disable: true,},},
  }
} as Meta;

const Template: Story<RdsBenefitComponent> = (args: RdsBenefitComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['display_type', 'item'] } };
Default.args = {
  display_type: 'Default',
  item:
  {
    id: 1,
    icon: 'currency_dollar_circle',
    iconHeight: "35px",
    iconWidth: "35px",
    title: "International delivery",
    description: "Get your order in 2 days"
  }
}

export const LeftAligned = Template.bind({});
LeftAligned.parameters = { controls: { include: ['display_type', 'item', 'position'] } };
LeftAligned.args = {
  display_type: 'Left Aligned',
  item:
  {
    id: 3,
    icon:"../assets/benefit_type1.png",
    iconHeight: "40px",
    iconWidth: "40px",
    title: "Free delivery all year long",
    description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
  },
}

export const centreAligned = Template.bind({});
centreAligned.parameters = { controls: { include: ['display_type', 'item'] } };
centreAligned.args = {
  display_type: 'Centre Aligned',
  item:
  {
    id: 6,
    iconHeight: "40px",
    iconWidth: "40px",
    icon: 'truck',
    title: "Free shipping",
    description: "Free delivery is our main part of company we just price it into the products. Someone's paying for it, and it's not us."
  }
}

export const WithLabel = Template.bind({});
WithLabel.parameters = { controls: { include: ['display_type', 'item'] } };
WithLabel.args = {
  display_type: 'With Label',
  item:
  {
    id: 7,
    icon: "../assets/benefit_type1.png",
    status: 'Active',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free delivery all year long',
    description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
  }
}

export const WithoutLabel = Template.bind({});
WithoutLabel.parameters = { controls: { include: ['display_type', 'item'] } };
WithoutLabel.args = {
  display_type: 'Without Label',
  item:
  {
    id: 7,
    icon: 'truck',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free shipping world wide',
    description: "Free delivery is our main part of company"
  }
}

export const HeadingWithIcon = Template.bind({});
HeadingWithIcon.parameters = { controls: { include: ['display_type', 'item'] } };
HeadingWithIcon.args = {
  display_type: 'Heading With Icon',
  item:
  {
    id: 7,
    icon: 'truck',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free delivery all year long',
  }
}

