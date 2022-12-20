import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsButtonModule } from '@libs/rds-button';
import { CommonModule } from '@angular/common';
import { RdsFileUploaderModule, RdsInputModule, RdsNavTabModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsCompOpenPositionComponent } from './rds-comp-open-position.component';
import { RdsCompApplyForPositionComponent } from '../rds-comp-apply-for-position/rds-comp-apply-for-position.component';
import { RdsCompAlertPopupComponent } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';


export default {
  title: 'Components/Open-Position',
  component: RdsCompOpenPositionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsLabelModule,
        RdsButtonModule,
        RdsFileUploaderModule,
        RdsInputModule,
        RdsTextareaModule,
        RdsNavTabModule,
        CommonModule,
        NgxTranslateModule.forRoot()
      ],
      declarations: [RdsCompApplyForPositionComponent],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
  }
} as Meta;

const Template: Story<RdsCompOpenPositionComponent> = (args: RdsCompOpenPositionComponent) => ({
  props: { ...args }
});

export const Default = Template.bind({});
Default.args = {
  item: {
    titleHeader: "Open Positions",
    navtabsItems: [
      {
        id:'developer',
        label: 'Developer',
        tablink: '#developer',
        ariacontrols: 'developer',
      },
      {
        id:'marketing',
        label: 'Marketing',
        tablink: '#marketing',
        ariacontrols: 'marketing',
      },
      {
        id:'designer',
        label: 'Designer',
        tablink: '#designer',
        ariacontrols: 'designer',
      },
      {
        id:'researcher',
        label: 'Researcher',
        tablink: '#researcher',
        ariacontrols: 'researcher',
      }
    ],
    descriptions: [
      {
        type: "developer",
        roleName: "Android Developer",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "developer",
        roleName: "IOS Developer",
        roleDescription: "Designing and build applications for mobile devices running Apple's iOS operating software.They are responsible for designing and coding the, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "developer",
        roleName: "Frontend Developer",
        roleDescription: "Front end developers are responsible for ensuring the allignment of web desing and user experience requirements, optimizing web pages for maximum efficiency and, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "developer",
        roleName: "Backend Developer",
        roleDescription: "Compile and analyze data, processes and codes to troubleshoot problems and identity areas for improvement collaborating , ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "developer",
        roleName: ".NET Developer",
        roleDescription: "Translate application storyboards and use cases into functional applications. Design, build and maintain efficient, reusable, and reliable, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "marketing",
        roleName: "Sales",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "designer",
        roleName: "UI/UX",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "researcher",
        roleName: "Tester",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
    ],
  }

}




