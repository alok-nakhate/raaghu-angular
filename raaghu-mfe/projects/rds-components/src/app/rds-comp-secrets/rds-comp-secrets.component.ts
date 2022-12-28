import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-secrets',
  templateUrl: './rds-comp-secrets.component.html',
  styleUrls: ['./rds-comp-secrets.component.scss']
})
export class RdsCompSecretsComponent implements OnInit, OnChanges {

  // Input Decorators
  @Input() apiSecretTableHeader: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', dataLength: 30, sortable: true, required: true, },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Expiration', key: 'expiration', dataType: 'date', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Description', key: 'description', dataType: 'text', dataLength: 30, required: true, sortable: true, },
  ];
  @Input() apiSecretsTableData: any[] = [];
  @Input() showSecretForm = false;
  // Output Decorators
  @Output() secretDataInfo = new EventEmitter();
;
  secretData: any = {
    type: '',
    value: '',
    expiration: new Date(),
    description: ''
  };
  selectedEndDate: any;
  selectedEndDateEmit: any;
  typeData: any[] = [
    { id: 1, value: 'Shared Secret', some: 'Shared Secret' },
    { id: 2, value: 'X509 Thumbprint', some: 'X509 Thumbprint' }
  ];
  secretTableActions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void { }

  tableActionSelection(event: any) {
    if (event.actionId == 'delete') {
      const index = this.apiSecretsTableData.findIndex(x => x.value == event.selectedData.value);
      if (index != -1) {
        this.apiSecretsTableData.splice(index, 1);
        this.secretDataInfo.next(this.apiSecretsTableData);
      }
    }
  }

  selectEndDate(event: Date) {
    this.selectedEndDate = '';
    this.secretData.expiration = event;
    this.selectedEndDate = event.getDate() + '/' + event.getMonth() + '/' + event.getFullYear();
  }

  selectedOption(event: any) {
    this.secretData.type = event.item.value;
  }

  addSecrets(secretForm: NgForm) {
    if (secretForm.valid) {
      const item: any = {
        type: this.secretData.type,
        value: this.secretData.value,
        expiration: this.secretData.expiration,
        description: this.secretData.description
      };
      this.apiSecretsTableData.push(item);
      this.secretDataInfo.next(this.apiSecretsTableData);
      // secretForm.form.value.expiration = this.selectedEndDate;
      secretForm.reset();
      // this.selectedEndDate = '';
      this.secretData.expiration = null;
      this.secretData.expiration = new Date();
      this.showSecretForm = false;
    }
  }

}