// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Meta, moduleMetadata, Story } from '@storybook/angular';
// import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
// import { RdsCompOtherSettingsComponent } from './rds-comp-other-settings.component';
// import { NgxTranslateModule } from '@libs/shared';

// export default {
//   title: 'Components/Other Settings',
//   component: RdsCompOtherSettingsComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [
//         FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsCheckboxModule
//       ],
//       providers: [
//         FormBuilder
//       ],
//     })
//   ]
// } as Meta;

// const Template: Story<RdsCompOtherSettingsComponent> = (args: RdsCompOtherSettingsComponent) => ({
//   props: { 
//     ...args 
//   }
// });

// export const Default = Template.bind({});
// Default.args={
//   OtherSetting:{
//     isQuickThemeSelectEnabled:true
//   }
// }