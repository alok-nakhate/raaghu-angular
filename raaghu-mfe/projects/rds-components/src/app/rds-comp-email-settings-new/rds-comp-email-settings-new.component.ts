import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rds-comp-email-settings-new',
  templateUrl: './rds-comp-email-settings-new.component.html',
  styleUrls: ['./rds-comp-email-settings-new.component.scss']
})
export class RdsCompEmailSettingsNewComponent implements OnInit {
  @Input() emailSettingsData: any;
  @ViewChild('emailsettingsForm')emailSettingsForm: NgForm;
  SslSetting: any = {
    sslSettingEnabled: false,
  };
  @Output() emailSettingsInfo = new EventEmitter<any>();
  constructor() { }
  ngAfterViewInit(): void {
    // if (this.emailSettingsData && this.emailSettingsForm) {
    //   this.emailSettingsForm.statusChanges.subscribe(res => {
    //     if (res === 'VALID') {
    //       this.emailSettingsInfo.emit(this.emailSettingsData);
    //     } else {
    //       this.emailSettingsInfo.emit(undefined);
    //     }
    //   });
    // }
    }
  ngOnInit(): void {
    if (!this.emailSettingsData) {
      this.emailSettingsData = {};
      this.emailSettingsData['defaultDisplayName'] = '';
      this.emailSettingsData['defaultAddress'] = '';
      this.emailSettingsData['host'] = '';
      this.emailSettingsData['port'] = '';
      this.emailSettingsData['ssl'] = false;
      this.emailSettingsData['defaultcredentials'] = false;
      this.emailSettingsData['smtpdomain']='';
      this.emailSettingsData['smtpusername']='';
      this.emailSettingsData['smtpPassword']='';
    
    }
  }
  selectEmailSettings(e: boolean, type: string) {

    switch (type) {
      case 'ssl':
        this.emailSettingsData.ssl = e;
        break;
      case 'theme':
        this.emailSettingsData.theme = e;
        break;
     
  
    }
    this.emailSettingsData.emit(this.emailSettingsData);
    
   }
   onSaveEmail(): void {
    this.emailSettingsInfo.emit(this.emailSettingsData)
   }
   
  }


