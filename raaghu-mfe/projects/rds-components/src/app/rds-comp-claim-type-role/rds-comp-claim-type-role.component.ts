import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

export class claims {
  roleId: any;
  claimType: string;
  claimValue: string;
}

@Component({
  selector: 'rds-comp-claim-type-role',
  templateUrl: './rds-comp-claim-type-role.component.html',
  styleUrls: ['./rds-comp-claim-type-role.component.scss']
})
export class RdsCompClaimTypeRoleComponent implements OnInit {

  ClaimData: claims = {
    roleId: undefined,
    claimType: '',
    claimValue: '',
  };
  @Input() claimDisplayArray: any[] = [];

  @Input() claimValueData: any[] = [];
  @Output() addClaim = new EventEmitter();
  @Output() deleteClaim = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onClaimSave = new EventEmitter();

  rdsDataTableClaimType: ComponentLoaderOptions;
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];
  ClaimTableHeader: TableHeader[] = [
    { displayName: 'Type', key: 'claimType', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Value', key: 'claimValue', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ];

  sampleDelete: any

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

    // Claim Display Array Data table
    this.rdsDataTableClaimType = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ClaimTableHeader,
        tableData: this.claimDisplayArray,
        inlineEdit: false,
        pagination: true,
        recordsPerPage: 4,
        actions: this.actions,
        isShimmer: false
      },
      output: {
        deleteEvent: (deleteEvent: any) => {
          this.sampleDelete = deleteEvent;
          this.deleteClaim.next(deleteEvent);
        },
        onActionSelection: (actionEvent: any) => {
          if (actionEvent.actionId === 'delete') this.deleteClaim.emit(actionEvent.selectedData);
        },
      }
    };
    this.rdsDataTableClaimType.input.tableData = this.claimDisplayArray;
  }

  addClaimData(claimForm: NgForm) {
    if (claimForm.form.value && claimForm.valid) {
      const item: any = {
        roleId: this.claimDisplayArray.length + 1,
        claimType: this.ClaimData.claimType,
        claimValue: claimForm.form.value.claimValue
      }
      this.addClaim.next(item);
      claimForm.reset();
    }
  }

  deleteClaimData(index: number) {
    this.deleteClaim.next(this.sampleDelete);
  }

  selectedClaimType(event: any) {
    this.ClaimData.claimType = event.item.value;
  }

  onCancelClaimType(claimDataForm: NgForm) {
    claimDataForm.reset();
    this.claimValueData = [];
    this.claimDisplayArray = [];
    this.onCancel.next(true);
  }

  saveClaim(claimForm: NgForm) {
    this.onClaimSave.next();
  }

}
