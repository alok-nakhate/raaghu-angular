import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

export interface EditionInfo {
  displayName: string;
  creationTimeString: string;
  subscriptionDateString: string;
  featureValues: any;
}

@Component({
  selector: 'rds-comp-plan-information',
  templateUrl: './rds-comp-plan-information.component.html',
  styleUrls: ['./rds-comp-plan-information.component.scss']
})
export class RdsCompPlanInformationComponent implements OnInit {
  EditionData: EditionInfo = {
    displayName: '',
    creationTimeString: '',
    subscriptionDateString: '',
    featureValues: []
  };

  constructor(private store: Store,public translate:TranslateService) { }

  ngOnInit(): void {
    
  }

}
