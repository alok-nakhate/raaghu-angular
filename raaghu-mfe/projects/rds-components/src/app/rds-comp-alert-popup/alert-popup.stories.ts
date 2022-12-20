import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsIconModule, RdsLabelModule, RdsModalModule } from '@libs/rds-elements';
import { RdsCompAlertPopupComponent } from './rds-comp-alert-popup.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Alert Popup',
  component: RdsCompAlertPopupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, NgxTranslateModule, RdsIconModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompAlertPopupComponent> = (args: RdsCompAlertPopupComponent) => ({
  props: args,
});
export const Default: Story<RdsCompAlertPopupComponent> = (args) => ({
  props: args,
  template:
    `    <rds-button [label]="'Delete'"
    [size]="'small'" class="px-2"  [colorVariant]="'primary'" data-bs-toggle="modal" data-bs-target="#deleteModal">
    </rds-button>
     <rds-comp-alert-popup [alertID]="'deleteModal'" (onCancel)="close()"
                                (onDelete)="delete()" [alertData]="alertData">
    </rds-comp-alert-popup>
    `,

});
Default.args = {
  
  alertData:  {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "The record will be deleted permanently",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
};