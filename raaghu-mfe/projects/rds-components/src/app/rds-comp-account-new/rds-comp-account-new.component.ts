import { Component, EventEmitter, forwardRef, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-comp-account-new',
  templateUrl: './rds-comp-account-new.component.html',
  styleUrls: ['./rds-comp-account-new.component.scss'],
  // providers:[
  //   { provide: NG_VALUE_ACCESSOR, 
  //     useExisting: forwardRef(() => RdsCompAccountNewComponent), multi: true, }
  // ]
})
export class RdsCompAccountNewComponent implements OnInit {
  @Input() public AuthentiactionList: any = [];
  // AuthentiactionList:any = [  {value:'yes' , displayText:'Yes'},{value:'no', displayText:'No'}];

  @Input() public VersionList: any = [];
  @Input() accountData: any;
  @ViewChild('accountForm') accountForm: NgForm;
  @Output() accountInfo = new EventEmitter<any>();
  isReset: boolean = false;
  activePage: number = 0;
  @Input() externalProviders: any = [];
  _externalProviders: any = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this._externalProviders = JSON.parse(JSON.stringify(this.externalProviders));
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    if (!this.accountData) {
      this.accountData = {};
      this.accountData['registration'] = false;
      this.accountData['authentication'] = false;
      this.accountData['twofactorauthentication'] = '';
      this.accountData['allowUser'] = false;
      this.accountData['browser'] = false;
      this.accountData['imagacaptcha'] = false;
      this.accountData['securityauthentication'] = false;
      this.accountData['baseUrl'] = 'https://www.google.com/';
      this.accountData['version'] = 2;
      this.accountData['score'] = 0.5;
      this.accountData['site'] = 'asdf';
      this.accountData['googleSecret'] = 'fgh';
      this.accountData['googleSite'] = 'asdf';
      this.accountData['microsoftSecret'] = 'fgh';
      this.accountData['microsoftSite'] = 'asdf';
      this.accountData['twitterSecret'] = 'fgh';
      this.accountData['twitterSite'] = 'fgh';
      this.accountData['google'] = false;
      this.accountData['microsoft'] = false;
      this.accountData['twitter'] = false;
    }


  }

  selectIdentity() {

    this.accountData.emit(this.accountData);
    console.log(this.accountData, 'this.accountData');


  }

  onExternalProviderChange(value, item): void {
    item.enabled = value;
  }

  getSelectedValue(event) {
    this.AuthentiactionList.twofactorauthentication = event.value;

  }
  onSelectVersion(selectedItem: any): void {
    this.accountData.version = selectedItem.item.some;
  }
  onSelectAuthentiaction(selectedItem: any): void {
    this.accountData.twofactorauthentication = selectedItem.item.some;

  }
  onSaveAccount(): void {
    const selectedAuth: any = this.AuthentiactionList.find((x: any) => x.some == this.accountData.twofactorauthentication);
    if (selectedAuth) {
      this.accountData.twofactorauthenticationId = selectedAuth.value;
    }
    const selectedVersion: any = this.VersionList.find((x: any) => x.some == this.accountData.version);
    if (selectedVersion) {
      this.accountData.versionId = selectedVersion.value;
    }
    this.accountData['externalProviders'] = this._externalProviders;
    this.accountInfo.emit(this.accountData)
    // this.isReset = true;
    // this.activePage = 0;
  }


}
