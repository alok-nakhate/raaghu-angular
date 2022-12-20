import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export interface SettingsData {
  quickTheme: boolean;
  }
@Component({
  selector: 'rds-comp-other-settings',
  templateUrl: './rds-comp-other-settings.component.html',
  styleUrls: ['./rds-comp-other-settings.component.scss']
})
export class RdsCompOtherSettingsComponent implements OnInit {
  @Output() OtherSettingData=new EventEmitter<any>();
  @Input() editShimmer:boolean=false;
  @Input()
  OtherSetting: any = {
    isQuickThemeSelectEnabled: false,
  };
  
  dataset?: any = {};
  @Output() change = new EventEmitter<any>();
  
  constructor(public translate:TranslateService) { }
  
  
  
  ngOnInit(): void {
  }
  selectAllFeature(e: boolean, type: string) {
    this.OtherSetting.isQuickThemeSelectEnabled = e;
    this.OtherSettingData.emit(this.OtherSetting);
  }

  
}
