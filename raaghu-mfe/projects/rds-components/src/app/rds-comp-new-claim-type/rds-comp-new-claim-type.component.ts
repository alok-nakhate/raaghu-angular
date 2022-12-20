import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdentityClaimValueType } from 'projects/libs/shared/src/lib/service-proxies';
export class claimtype {
  public name: string;
  public valueType: IdentityClaimValueType;
  public description: string;
  public regex: string;
  public required: boolean;
  public regexDescription: string;
}
@Component({
  selector: 'app-rds-comp-new-claim-type',
  templateUrl: './rds-comp-new-claim-type.component.html',
  styleUrls: ['./rds-comp-new-claim-type.component.scss']
})

export class RdsCompNewClaimTypeComponent implements OnInit {

  @Input() valueTypeItems: any = [];

  @Output() onClaimTypeSave = new EventEmitter<{ ClaimTypeData: any }>();
  @ViewChild('ClaimTypeForm') tenantInfoForm: NgForm;

  constructor() { }

  ClaimTypeData: claimtype = {
    name: '',
    valueType: 0,
    description: '',
    regex: '',
    required: false,
    regexDescription: '',
  }

  ngOnInit(): void { }

  AddCliamtypeData() {
    this.onClaimTypeSave.emit({ ClaimTypeData: this.ClaimTypeData });
    this.ClaimTypeData = new claimtype();
  }

  clearclaimtypeData() {
    this.ClaimTypeData = new claimtype();
  }

  selectedValueType(event: any) {
    this.ClaimTypeData.valueType = event.item.value;
  }

}
