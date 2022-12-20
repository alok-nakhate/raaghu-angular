import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { Login, LoginAttempts } from '../../models/profile.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'app-rds-comp-login-attempts',
  templateUrl: './rds-comp-login-attempts.component.html',
  styleUrls: ['./rds-comp-login-attempts.component.scss']
})
export class RdsCompLoginAttemptsComponent implements OnInit {
  rdsLoginTableMfeConfig: ComponentLoaderOptions
  constructor(public translate:TranslateService) { }
  @Input()
  TabiD: string;
  @Input()
  LoginAttempts: any = {};
  @Input() Result: string;
  @Input() public operationLogs: any = [];
  @Input() public operationLogsHeaders: TableHeader[] = [];
   showInput:boolean=false;
   @Input() FilterData: any=[]
   

  result:string;
  endDate = new Date();
  startDate = new Date();

  @Output() RefreshLoginAttemts = new EventEmitter<any>();
  @Input()
  listItemsResult: any[] = [
  { value: '', some: 'All', isSelected:false,iconFill:false, icon:'',iconWidth:0,iconHeight:0,iconStroke:false,isFree:false,},
  { value: 'Success', some: 'Success', isSelected:false,iconFill:false, icon:'',iconWidth:0,iconHeight:0,iconStroke:false,isFree:false,},
  { value: 'InvalidUserNameOrEmailAddress', some: 'Invalid Username or email Address', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'InvalidPassword', some: 'Invalid Password', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserIsNotActive', some: 'User is Not Active', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'InvalidTenancyName', some: 'Invalid Tenancy name', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'TenantIsNotActive', some: 'Tenant Is Not Active', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserEmailIsNotConfirmed', some: 'User Email Is Not Confirmed', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UnknownExternalLogin', some: 'Unknown External Login', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'LockedOut', some: 'Locked Out', isSelected:false, icon:'',iconFill:false,iconWidth:0,iconStroke:false,isFree:false,},
  { value: 'UserPhoneNumberIsNotConfirmed', some: 'User PhoneNumber IsNot Confirmed', isSelected:false, icon:'',iconFill:false,conWidth:0,iconStroke:false,isFree:false,} ]
 
  ngOnInit(): void {
    this.rdsLoginTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.LoginAttempts.TableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.LoginAttempts.LoginDatatable,
        recordsPerPage: 10,
        pagination: true,
        noDataTitle:'Currently you do not have login attempts',
        noDataSubTitle:''
      },
    };
   
  }

  startDateModify(event) {

    this.startDate = event;
  }
  endDateModify(event) {

    this.endDate = event;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.rdsLoginTableMfeConfig) {
      this.rdsLoginTableMfeConfig.input.tableData = this.LoginAttempts.LoginDatatable;

    }
    console.log()
  }
  LoginAttemptTableData: LoginAttempts;
 
Search(loginAttempt:NgForm){
  loginAttempt.form.markAllAsTouched();
  let startdate = this.startDate .toISOString()
  let endDate = this.endDate.toISOString()
console.log(" loginAttempt.form.value == ",  loginAttempt.form.value);
  const FilterData:any={
    StartDate:startdate,
    EndDate:endDate,
    Result:this.Result,
    Sorting:undefined,
    maxResultCount:10,
    SkipCount:0,
    filter:undefined
  }
this.RefreshLoginAttemts.emit(FilterData)

}

onClickShowInput()  {
  this.showInput=!this.showInput;

}

onResultListSelect(event : any){
this.result = event.item.some
}
}
