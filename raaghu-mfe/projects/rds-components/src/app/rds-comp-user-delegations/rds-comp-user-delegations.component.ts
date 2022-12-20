import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
import { AlertPopupData } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';
declare var bootstrap: any
@Component({
  selector: 'rds-user-delegations',
  templateUrl: './rds-comp-user-delegations.component.html',
  styleUrls: ['./rds-comp-user-delegations.component.scss']
})
export class RdsUserDelegationsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() userList: any = [];
  selectedUser: any;
  deligateDivFlag: boolean = false;
  @Input() rdsDeligateTableHeader: TableHeader[] = [];
  @Input() rdsDeligateTableData: any = [];
  @Input() delegateTabopened: boolean = false;
  @Input() recordsPerpage: number = 10;
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }]
  @Input() pagination: boolean = false;
  @Input() tableWidth: string = '100%';
  @Input() buttonSpinner: boolean = true;
  @Input() submitted: boolean = false;
  @Input() tableStyle: string = 'Light';

  username: any = '';
  startDate: Date = new Date();
  endDate: any = '';
  targetId = undefined;

  @Output() onDeligateSave = new EventEmitter<any>()
  @Output() onCancelDeligate = new EventEmitter<any>()
  @Output() onDeleteDeligate = new EventEmitter<any>()
  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.delegateTabopened) {
      this.deligateDivFlag = false;
    }
    if (!this.buttonSpinner) {
      this.buttonSpinner = true;
      this.submitted = false;
    }

    if (this.targetId) {
      this.userList.forEach((res: any) => {
        if (res && +res.value === +this.targetId) {
          this.username = res.some;
        }
      })
    }

  }

  ngOnInit(): void {
  }


  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.onDeleteDeligate.emit(event.selectedData);
    }
  }

  hideandShowdelegateform() {
    this.endDate = '';
    this.deligateDivFlag = !this.deligateDivFlag;
    this.submitted = false;
    this.username = '';
  }



  onSave(delegateForm: NgForm): void {
    if (!delegateForm.valid) {
      return;
    }

    this.buttonSpinner = true;
    this.submitted = true;
    const DeligateData: any = {
      endTime: this.endDate,
      startTime: this.startDate,
      targetUserId: this.targetId
    }

    this.onDeligateSave.emit(DeligateData);
    this.deligateDivFlag = false;
    this.endDate = new Date();
    this.startDate = new Date();
    this.username = '';


  }
  onCancel(): void {
    // this.onCancelDeligate.emit(true);
    this.buttonSpinner = true;
    this.submitted = false;
    this.deligateDivFlag = false;
    this.submitted = false;
    // this.onCancelDeligate.emit(true);
  }


  onDateChange(date: Date, type: string) {
    if (type === 'startDate') {
      this.startDate = date;
    } else {
      this.endDate = date;
    }
  }
  ngOnDestroy(): void {
  }

  onUsernameSelect(selectedItem: any): void {
    this.username = selectedItem.item.some;
    this.targetId = selectedItem.item.value;
  }



}
