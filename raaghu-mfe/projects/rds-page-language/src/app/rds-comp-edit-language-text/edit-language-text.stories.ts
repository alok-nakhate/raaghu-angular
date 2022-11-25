import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text.component';

export default {
  title: 'Components/Edit Language Text',
  component: RdsCompEditLanguageTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsTextareaModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompEditLanguageTextComponent> = (args: RdsCompEditLanguageTextComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    Languagetext:[
        
    ]
}
