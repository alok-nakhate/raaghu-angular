import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-member-activity',
  templateUrl: './rds-comp-member-activity.component.html',
  styleUrls: ['./rds-comp-member-activity.component.scss']
})
export class RdsCompMemberActivityComponent implements OnInit {

  @Input()
  inputTypeList: any[] = []
  // { value: 'Software Developer', some: 'Software Developer', status: 'Software Developer', isSelected: false },
  // { value: 'Sales Executive', some: 'Sales Executive', status: 'Sales Executive', isSelected: false },
  // { value: 'Senior Manager', some: 'Senior Manager', status: 'Senior Manager', isSelected: false },
  // { value: 'Manager', some: 'Manager', status: 'Manager', isSelected: false },
  // { value: 'Associate', some: 'Associate', status: 'Associate', isSelected: false }
  // ]
  listDropdown: any[] = [];

  @Input() memberActivityTableData: any = []
    //   { "cases": 10, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
    //   , { "cases": 18, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
    //   , { "cases": 7, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
    //   , { "cases": 14, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
    //   , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" },
    //   { "cases": 10, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
    //   , { "cases": 18, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
    //   , { "cases": 7, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
    //   , { "cases": 14, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
    //   , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" }
    
    // ]
    rdsMemberActivityTableMfeConfig: ComponentLoaderOptions;
    // memberActivityTableHeader: TableHeader[] = [
    //   { displayName: 'Member', key: 'member', dataType: 'html' },
    //   { displayName: 'Cases', key: 'cases', dataType: 'text' },
    //   { displayName: 'Active', key: 'active', dataType: 'text' },
    //   { displayName: 'Closed', key: 'closed', dataType: 'text' },
    //   { displayName: 'Rate', key: 'rate', dataType: 'html' }
    // ]
    tableStyle: string = 'light';
  memberActivityTableHeader: any;
  constructor() { }

  ngOnInit(): void {
    this.rdsMemberActivityTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.memberActivityTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.memberActivityTableData,
        pagination: true,
        recordsPerPage:10,
        noDataTitle:'Currently you do not have member activity'
      },
    };
  }
  selectedRole(event:any){
  }
  SearchMember(event:any){
  }
}
