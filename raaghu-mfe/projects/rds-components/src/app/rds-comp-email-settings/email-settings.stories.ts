
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompEmailSettingsComponent } from './rds-comp-email-settings.component';


export default {
    title: 'Components/Email Settings',
    component: RdsCompEmailSettingsComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompEmailSettingsComponent],
            imports: [
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsInputModule,
                RdsButtonModule
            ]
        })
    ]
} as Meta;


const Template: Story<RdsCompEmailSettingsComponent> = (args: RdsCompEmailSettingsComponent) => ({
    props: args
});

export const Default = Template.bind({});
Default.args={
    emailSettings:
    {
      currentEmail: 'niphy.anto@waiin.com',
      newEmail: 'abc@waiin.com',
      confirmEmail: 'abc@waiin.com'
    },
    buttonSpinner:false
}
