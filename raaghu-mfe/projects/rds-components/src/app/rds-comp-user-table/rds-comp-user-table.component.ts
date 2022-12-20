import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';

declare var bootstrap: any;
@Component({
  selector: 'rds-comp-user-table',
  templateUrl: './rds-comp-user-table.component.html',
  styleUrls: ['./rds-comp-user-table.component.scss']
})
export class RdsCompUserTableComponent implements OnInit {
  rdsUserTableMfeConfig: ComponentLoaderOptions;
  @Input() userTableHeader: TableHeader[] = [];
  @Input() userTableData: any = [];
  @Input() recordsPerpage: number = 10;
  @Input() tableStyle: string = "light";
  @Input()
  listuser: any[] = []
  @Input()
  listcountrycode: any[] = []
  Isenabled: boolean;
  username: string;
  buttonSpinnerForUserTable: boolean = false;
  countrycode: string;
  public viewCanvas: boolean = false;
  activePage: number = 0;
  canvasTitle: string = 'New User';
  navtabsItems: any = [];
  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
    this.rdsUserTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.userTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.userTableData,
        recordsPerPage: this.recordsPerpage,
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle:'Currently you do not have user'
      },
      output: {
        onActionSelection:(event:any)=>{
          if(event.actionId==='delete'){
            const index = this.userTableData.findIndex((x: any) => x.userId === event.data.userId);
            if (index !== -1) {
              this.userTableData.splice(index, 1);
              const mfeConfig = this.rdsUserTableMfeConfig
              mfeConfig.input.tableData = [... this.userTableData];
              this.rdsUserTableMfeConfig = mfeConfig;
            }
          }
        }
      }
    };
  }

  onChangeIsenabled(event: any) {
    this.Isenabled = event.detail;
  }
  selectedCountrycode(item: any) {
    var Result = item
    this.countrycode = Result.item.value
  }
  selectedusercode(item: any) {
    var Result = item
    this.username = Result.item.value
  }

  openCanvas(): void {
    this.buttonSpinnerForUserTable = true;
    this.viewCanvas = true;
    this.activePage = 0;
    this.canvasTitle = 'Add User';
    setTimeout(() => {
      var offcanvas = document.getElementById('AddUser');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  closeCanvas(): void {
    this.viewCanvas = false;
    this.buttonSpinnerForUserTable = false;
  }
}
