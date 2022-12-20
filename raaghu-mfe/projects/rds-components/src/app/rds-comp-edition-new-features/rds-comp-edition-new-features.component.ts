import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface EditionDat {
  settingEnabled: boolean;
  languageEnabled: boolean;
  textTemplateEnabled: boolean;
  themeEnabled: boolean;
  auditLogEnabled: boolean;

  }
@Component({
  selector: 'rds-comp-edition-new-features',
  templateUrl: './rds-comp-edition-new-features.component.html',
  styleUrls: ['./rds-comp-edition-new-features.component.scss']
})
export class RdsCompEditionNewFeaturesComponent implements OnInit {
  @Input() public EditionList: any = [];
  @Input() editionFeaturesData: any;
  @ViewChild('editionfeaturesForm')editionFeatureForm: NgForm;
  @Output() editionFeaturesInfo = new EventEmitter<any>();
  constructor() { }
  ngAfterViewInit(): void {
    if (this.editionFeaturesData && this.editionFeatureForm) {
      this.editionFeatureForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.editionFeaturesInfo.emit(this.editionFeaturesData);
        } else {
          this.editionFeaturesInfo.emit(undefined);
        }
      });
    }  }
  ngOnInit(): void {
    if (!this.editionFeaturesData) {
      this.editionFeaturesData = {};
      this.editionFeaturesData['edition'] = '';
      this.editionFeaturesData['MaxCount'] = '';
      this.editionFeaturesData['setting'] = false;
      this.editionFeaturesData['language'] = false;
      this.editionFeaturesData['textTemplate'] = false;
      this.editionFeaturesData['theme'] = false;
      this.editionFeaturesData['auditLog'] = false;
    }
  }
  selectAllFeature(e: boolean, type: string) {

    switch (type) {
      case 'settingEnabled':
        this.editionFeaturesData.setting = e;
        break;
      case 'languageEnabled':
        this.editionFeaturesData.language = e;
        break;
      case 'textTemplateEnabled':
        this.editionFeaturesData.textTemplate = e;
        break;
      case 'themeEnabled':
          this.editionFeaturesData.theme = e;
          break;
     case 'auditLogEnabled':
            this.editionFeaturesData.auditLog = e;
            break; 
    
  
    }
    this.editionFeaturesData.emit(this.editionFeaturesData);
    
   }
  
}
