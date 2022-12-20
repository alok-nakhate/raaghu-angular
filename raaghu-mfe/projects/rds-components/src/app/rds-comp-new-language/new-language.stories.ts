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
        {value: "famfamfam-flags ad", some: "ad", isSelected: false}
        ,{value: "famfamfam-flags ae", some: "ae", isSelected: false}
        ,{value: "famfamfam-flags af", some: "af", isSelected: false}
        ,{value: "famfamfam-flags ag", some: "ag", isSelected: false}
        ,{value: "famfamfam-flags ai", some: "ai", isSelected: false}
    ],
    languageNames:[
        {value: "", some: "Invariant Language ()", isSelected: false}
        ,{value: "aa", some: "Afar (aa)", isSelected: false}
        ,{value: "aa-DJ", some: "Afar (Djibouti) (aa-DJ)", isSelected: false}
        ,{value: "aa-ER", some: "Afar (Eritrea) (aa-ER)", isSelected: false}
        ,{value: "aa-ET", some: "Afar (Ethiopia) (aa-ET)", isSelected: false}
        ,{value: "af", some: "Afrikaans (af)", isSelected: false}
        ,{value: "af-NA", some: "Afrikaans (Namibia) (af-NA)", isSelected: false}
        ,{value: "af-ZA", some: "Afrikaans (South Africa) (af-ZA)", isSelected: false}
        ,{value: "agq", some: "Aghem (agq)", isSelected: false}
        ,{value: "agq-CM", some: "Aghem (Cameroon) (agq-CM)", isSelected: false}
        ,{value: "ak", some: "Akan (ak)", isSelected: false}
    ]
}
