import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-secrets',
  templateUrl: './rds-comp-secrets.component.html',
  styleUrls: ['./rds-comp-secrets.component.scss']
})
export class RdsCompSecretsComponent implements OnInit {

  // Input Decorators
  @Input() apiSecretTableHeader: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', dataLength: 30, sortable: true, required: true, },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Expiration', key: 'expiration', dataType: 'date', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Description', key: 'description', dataType: 'text', dataLength: 30, required: true, sortable: true, },
  ];
  @Input() apiSecretsTableData: any[] = [];

  // Output Decorators
  @Output() secretDataInfo = new EventEmitter();

  // Properties
  rdsApiSecretsTableMfeConfig: ComponentLoaderOptions;
  secretList: any[] = [];
  secretListShow: any[] = [];
  secretData: any = {
    type: '',
    value: '',
    expiration: new Date(),
    description: ''
  };
  showSecretForm = false;
  selectedEndDate: any;
  selectedEndDateEmit: any;

  constructor() { }

  ngOnInit(): void {
    if (this.apiSecretsTableData.length > 0) this.secretList = this.apiSecretsTableData;
    this.rdsApiSecretsTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.apiSecretTableHeader,
        tableData: this.secretListShow,
        tableStyle: 'light',
        width: '100%',
        recordsPerPage: 10,
        pagination: false,
        isInlineEdit: false,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have secrets'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId == 'delete') {
            const index1 = this.secretList.findIndex(x => x.value == event.selectedData.value);
            const index2 = this.secretListShow.findIndex(x => x.value == event.selectedData.value);
            if (index1 != -1 && index2 != -1) {
              this.secretList.splice(index1, 1);
              this.secretDataInfo.next(this.secretList);
              this.secretListShow.splice(index2, 1);
              this.rdsApiSecretsTableMfeConfig.input.tableData = [...this.secretListShow];
            }
          }
        }
      },
    };
  }

  selectEndDate(event: Date) {
    this.selectedEndDate = '';
    this.secretData.expiration = event;
    this.selectedEndDate = event.getDate() + '/' + event.getMonth() + '/' + event.getFullYear();
  }

  addSecrets(secretForm: NgForm) {
    if (secretForm.valid) {
      const item: any = {
        type: this.secretData.type,
        value: this.secretData.value,
        expiration: this.secretData.expiration,
        description: this.secretData.description
      };
      this.secretList.push(item);
      this.secretDataInfo.next(this.secretList);
      secretForm.form.value.expiration = this.selectedEndDate;
      this.secretListShow.push(secretForm.form.value);
      secretForm.reset();
      this.selectedEndDate = '';
      this.secretData.expiration = null;
      this.secretData.expiration = new Date();
      this.showSecretForm = false;
    }
  }

}