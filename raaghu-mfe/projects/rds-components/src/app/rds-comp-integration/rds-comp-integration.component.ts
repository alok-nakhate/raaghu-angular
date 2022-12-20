import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-integration',
  templateUrl: './rds-comp-integration.component.html',
  styleUrls: ['./rds-comp-integration.component.scss']
})
export class RdsCompIntegrationComponent implements OnInit {
  @Input() integrationList: any = [
    {
      title: 'Zapier',
       subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: false
    },
    {
      title: 'Adobe XD', subtitle: 'Build custom automation and intefrations with app', icon: 'adobeXD', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    },
    {
      title: 'Figma', subtitle: 'Build custom automation and intefrations with app', icon: 'figma', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    },
    {
      title: 'Dropbox', subtitle: 'Build custom automation and intefrations with app', icon: 'dropbox', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    },
    {
      title: 'Jira', subtitle: 'Build custom automation and intefrations with app', icon: 'jira', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    },
    {
      title: 'Notion', subtitle: 'Build custom automation and intefrations with app', icon: 'notion', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: false
    },
    {
      title: 'GitHub', subtitle: 'Build custom automation and intefrations with app', icon: 'github', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: true
    },
    {
      title: 'Slack', subtitle: 'Build custom automation and intefrations with app', icon: 'slack', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    },
    {
      title: 'Linear', subtitle: 'Build custom automation and intefrations with app', icon: 'linear', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
    }];

    @Input () buttonSpinner : boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.buttonSpinner=false;
  }  
}
