import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// export class identity{
//   requiredLength:number ;
//   defaultAddress:string;
//   nonAlpha:boolean;
//   uppercaserequired:boolean;
//   lowercaserequired:boolean;
//   numbers:boolean;
//   lockoutDuration:string
//   MaxAttmpts:string;
//   uppercase:boolean;
//   lowercase:boolean
// }
@Component({
  selector: 'rds-comp-identity-management-new',
  templateUrl: './rds-comp-identity-management-new.component.html',
  styleUrls: ['./rds-comp-identity-management-new.component.scss']
})
export class RdsCompIdentityManagementNewComponent implements OnInit {
  // @Input() identityData:any= {
  //   requiredPassword: '', defaultAddress:'', nonAlpha:false,uppercaserequired:false, numbers:false, lowercaserequired:false,
  //  lockoutDuration: '', MaxAttmpts:'', uppercase:false, lowercase:false,newusers:'' };
  @Input() identityData : any ;
  @ViewChild('identityDataForm')identityForm: NgForm;
  @Output() identityInfo = new EventEmitter<any>();

  constructor() { }
  ngAfterViewInit(): void {

  }
 
   
  ngOnInit(): void {
    if (!this.identityData) {

      this.identityData={};
      this.identityData['requiredlength'] = '';
      this.identityData['splChar'] = '';
      this.identityData['nonAlpha'] = false;
      this.identityData['uppercaserequired'] = false;
      this.identityData['lowercaserequired'] = false;
      this.identityData['numbers'] = false;
      this.identityData['lockoutDuration'] = '';
      this.identityData['MaxAttmpts'] = '';
      this.identityData['newusers']=false;
      this.identityData['confirmEmail'] = false;
      this.identityData['phoneNumber'] = false;
      this.identityData['confirmPhoneNumber'] = false;
      this.identityData['changeEmail'] = false;
      this.identityData['changeUserName'] = false;
  
    }
  }
  selectIdentity(e: boolean, type: string) {
debugger
    this.identityData.emit(this.identityData);
    
   }
   onSaveIdentity(){
//     const data :any = {
// password : this.identityData.password,
// lockout : this.identityData,
// signIn : this.identityData.signIn,
// user : this.identityData.user
//     }
    this.identityInfo.emit(this.identityData)
   }
  
}
