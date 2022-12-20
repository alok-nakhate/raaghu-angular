import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-tenant-basic-profile-right',
  templateUrl: './rds-comp-tenant-basic-profile-right.component.html',
  styleUrls: ['./rds-comp-tenant-basic-profile-right.component.scss']
})
export class RdsCompTenantBasicProfileRightComponent implements OnInit, OnChanges{

  @Input() public editionList: any = [];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() tenantInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantData: any;
  @ViewChild('tenantCreationForm') tenantInfoForm: NgForm;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean =true;


  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['name'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['editionId'] = [];
      this.tenantData['adminPassword'] = '' ;
      this.tenantData['activationState'] = 1 ;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      // this.tenantData['connectionStrings'] = '';
    }
    setTimeout(() => {
      if (this.tenantData && this.tenantInfoForm) {
        this.tenantInfoForm.statusChanges.subscribe(res => {
          if (res === 'VALID') {
            this.tenantInfo.emit({ tenant: this.tenantData, next: false });
          } else {
            this.tenantInfo.emit({ tenant: undefined, next: false });
          }
        });
      }

    }, 100);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['name'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['editionId'] = [];
      this.tenantData['adminPassword'] = '' ;
      this.tenantData['activationState'] = 1 ;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      // this.tenantData['connectionStrings'] = '';
    }

  }

  next(tenantCreationForm: NgForm): void {
    tenantCreationForm.form.markAllAsTouched();
    this.buttonSpinner=true;

    if (!tenantCreationForm || tenantCreationForm.invalid) {
      
      return;
    }
    this.tenantInfo.emit({ tenant: this.tenantData, next: true });
    // tenantCreationForm.reset()

  }
  getCheckboxValue(event: any): void {
    this.tenantData.activationState = event;
    if (event) {
      this.tenantData.activationState = null;
    }
  }
  
  getImage(ev: any) {
    let FileImage = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.tenantData.imageUrl = event.target.result;
    }
    reader.readAsDataURL(FileImage);
  }
  onEditionSelect(event: any): void {
    this.tenantData.edition = event.item.value;
  }

  onCanceled(){ 
    this.buttonSpinner=false;
    this.onCancel.emit(true);

  }

}
