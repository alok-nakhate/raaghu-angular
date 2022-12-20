import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-open-position',
  templateUrl: './rds-comp-open-position.component.html',
  styleUrls: ['./rds-comp-open-position.component.scss']
})
export class RdsCompOpenPositionComponent implements OnInit {
  @Input() item: any = {
    titleHeader: "Open Positions",
    navtabsItems: [
      {
        id: 'developer',
        label: 'Developer',
        tablink: '#developer',
        ariacontrols: 'developer',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        tablink: '#marketing',
        ariacontrols: 'marketing',
      },
      {
        id: 'designer',
        label: 'Designer',
        tablink: '#designer',
        ariacontrols: 'designer',
      },
      {
        id: 'researcher',
        label: 'Researcher',
        tablink: '#researcher',
        ariacontrols: 'researcher',
      }
    ],
    descriptions: [
      {
        type: "developer",
        roleName: "Android Developer",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },     
      {
        type: "marketing",
        roleName: "Sales",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "designer",
        roleName: "Android Developer",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "researcher",
        roleName: "Tester",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
    ],
  };
  
  activePage: number = 0;
  openFormContent: boolean = false;

  applyPositionContent: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  getSelectedNavTab(selectedIndex:any): void {
    this.activePage = selectedIndex
  }

  getJobList(selectedId: string): any {
    if (!this.item) {
      return [];
    }
    //if (selectedId === 'developer') {
    //  return this.item.descriptions;
    //}
    return this.item.descriptions.filter((x: any) => x.type === selectedId);
  }

  openForm() {
    this.applyPositionContent = false;
    this.openFormContent = true;
  }

}
