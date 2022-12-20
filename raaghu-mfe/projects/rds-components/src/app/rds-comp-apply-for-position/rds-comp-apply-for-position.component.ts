import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertPopupData } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';
declare var bootstrap: any;

@Component({
  selector: 'rds-comp-apply-for-position',
  templateUrl: './rds-comp-apply-for-position.component.html',
  styleUrls: ['./rds-comp-apply-for-position.component.scss']
})
export class RdsCompApplyForPositionComponent implements OnInit {
  @Input() itemList: any[] = []
  @Input() applicantData: any;
  @ViewChild('applicantDetailsForm') applicantDetailForm: NgForm;
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public contactNumber ='[1-9]{1}[0-9]{9}'
  showConfirmationPopup: boolean = false;
  alertData: AlertPopupData = {
    iconUrl: "tick",
    colorVariant: "success",
    alertConfirmation: "Thank You!",
    messageAlert: "Your application has been summited successfully.",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
  constructor() { }

  ngOnInit(): void {
    if (!this.applicantData) {
      this.applicantData = {};
      this.applicantData['applicantEmailId'] = '';
      this.applicantData['applicantFullName'] = '';
      this.applicantData['applicantContactNo'] = '';
      this.applicantData['applicantPosition'] = '';
      this.applicantData['applicantStartDate'] = '';
      this.applicantData['applicantResume'] = '';
      this.applicantData['applicantCoverLetter'] = '';      

    }
  }

  openConfirmationPopup() {
    if (this.applicantDetailForm.valid) {
      this.showConfirmationPopup = true;
      setTimeout(() => {
        var element: any = document.getElementById('confirmationId');
        var modal = new bootstrap.Modal(element);
        modal.show();
      }, 100);
    }
    else {
      this.showConfirmationPopup = false;
    }
    
  }
}
