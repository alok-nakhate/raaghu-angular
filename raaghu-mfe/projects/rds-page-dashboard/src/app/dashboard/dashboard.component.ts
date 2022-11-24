import { Component, Input, OnInit,  } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() istenant:boolean=false;

  // rdsAdminDashboardMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsAdminDashboard',
  // };
  // rdsTenantDashboardMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsCompTenantDashboard',
  // };

  constructor() { }

  ngOnInit(): void {
   
  }

}
