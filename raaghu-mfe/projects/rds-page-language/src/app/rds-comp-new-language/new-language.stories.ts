import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language.component';
import { RdsLabelModule } from '@libs/rds-label';

export default {
  title: 'Components/New Language',
  component: RdsCompNewLanguageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsSelectListModule,
        RdsDropdownlistModule,
        RdsCheckboxModule,
        RdsLabelModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompNewLanguageComponent> = (args: RdsCompNewLanguageComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    flags:[
        {value: "famfamfam-flags ad", displayText: "ad", isSelected: false}
        ,{value: "famfamfam-flags ae", displayText: "ae", isSelected: false}
        ,{value: "famfamfam-flags af", displayText: "af", isSelected: false}
        ,{value: "famfamfam-flags ag", displayText: "ag", isSelected: false}
        ,{value: "famfamfam-flags ai", displayText: "ai", isSelected: false}
    ],
    languageNames:[
        {value: "", displayText: "Invariant Language ()", isSelected: false}
        ,{value: "aa", displayText: "Afar (aa)", isSelected: false}
        ,{value: "aa-DJ", displayText: "Afar (Djibouti) (aa-DJ)", isSelected: false}
        ,{value: "aa-ER", displayText: "Afar (Eritrea) (aa-ER)", isSelected: false}
        ,{value: "aa-ET", displayText: "Afar (Ethiopia) (aa-ET)", isSelected: false}
        ,{value: "af", displayText: "Afrikaans (af)", isSelected: false}
        ,{value: "af-NA", displayText: "Afrikaans (Namibia) (af-NA)", isSelected: false}
        ,{value: "af-ZA", displayText: "Afrikaans (South Africa) (af-ZA)", isSelected: false}
        ,{value: "agq", displayText: "Aghem (agq)", isSelected: false}
        ,{value: "agq-CM", displayText: "Aghem (Cameroon) (agq-CM)", isSelected: false}
        ,{value: "ak", displayText: "Akan (ak)", isSelected: false}
    ]
}
