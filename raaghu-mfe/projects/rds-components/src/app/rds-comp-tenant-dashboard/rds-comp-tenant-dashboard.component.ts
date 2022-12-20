import { Component, OnInit, Injector, Input } from '@angular/core';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';
export interface MonthlySummaryData {
  monthlySummaryDataSets: [],
  monthlySummaryLabels: [],
  monthlySummarychartWidth: 0,
  monthlySummarychartOptions: [],
}
export interface WidgetData {
  headerTitle: string,
  backgroundColor: string
  color: string
}
export interface BigNumberWidgetData {
  bigNumber: string,
  backgroundColor?: string
  color?: string
  subText?: string
  subTextColor?: string
  iconClass?: string
}

@Component({
  selector: 'rds-comp-tenant-dashboard',
  templateUrl: './rds-comp-tenant-dashboard.component.html',
  styleUrls: ['./rds-comp-tenant-dashboard.component.scss']
})
export class RdsCompTenantDashboardComponent extends MfeBaseComponent implements OnInit {

  @Input() borderRadious?: number = 8;
  @Input() SalesPrice?: string = '3,32,230.00';
  @Input() SalesProfit?: string = '2203.00';
  @Input() RevenuePrice?: string = '9,72,900.00';
  @Input() RevenueProfit?: string = '1203.00';
  @Input() ProfitSharePrice?: string = '39,330.00';
  @Input() DailySalesGrowth?: string = '3,73,960.412';
  @Input() SalesGrowthLoss?: string = '5850.75';
  @Input() TotalClientCalls?: string = '75';
  @Input() TotalConnectedCalls?: string = '93';
  @Input() ConnectedCallsData: any = [80, 100 - 80];
  @Input() ClientCallsData: any = [65, 100 - 65];
  @Input() ProfitShareData: any = [10, 25, 30]
  @Input() userName: string = 'Keanu Foster';
  @Input() memberActivityTableData: any = [
    { "cases": 10, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
    , { "cases": 18, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
    , { "cases": 7, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
    , { "cases": 14, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
    , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\">Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" }
  ]

  @Input() monthlySummaryDataSets = [
    {
      label: 'Sales',
      data: [100, 120, 130, 140, 145, 150, 150, 157, 160, 168, 165, 158],
      borderColor: '#928AE0',
      backgroundColor: 'rgba(179, 134, 224, 0.8)',
      fill: true,
      // tension: 0.1,
    },
    // {
    //   label: 'Revenue',
    //   data: [290, 262, 205, 162, 150, 280, 206, 220, 260, 300, 275, 211],
    //   borderColor: '#EDB371',
    //   backgroundColor: 'rgba(75, 192, 192, 0.8)',
    //   fill: true,
    //   tension: 0.1,
    // }
  ]
  @Input() monthlySummaryLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  @Input() monthlySummarychartWidth = 1000
  @Input() monthlySummarychartOptions = {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: "end",
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: { enabled: true },
    },

    tooltip: {
      display: true,
      usePointStyle: true,
    },
  }

  // DOUGHNUT WITH BOOL
  @Input() pschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ProfitShareData,
      backgroundColor: [
        '#ff6384',
        '#ffcd56',
        '#4bc0c0'
      ],
      fillStyle: 'blue',
      fillRect: [200, 100, 140, 100],

      borderColor: [
        '#fff',
      ],
      borderWidth: 0,
      cutout: '85%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() pschartLabels = ['Total Sales', 'Revenue', 'Expenses']
  @Input() pschartWidth = 200;
  @Input() pschartOptions = {

    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {

      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: true,
        align: "middle",
        position: 'right',
      },
    }
  }

  // daily sales growth bar chart
  @Input() barHrChartDatasets = [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ];
  @Input() barHrChartLabels = ['10k', '20k', '30k', '40k', '50k', '60k', '70k', '80k', '90k'];
  @Input() barHrChartWidth = 255;
  @Input() barHrChartOptions = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: '',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: false,
        text: 'Monthly Summary'
      }
    },
  };

  // CallOverView bool chart data
  @Input() ClientCallschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ClientCallsData,
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#E30707',
        '#E1E1E1'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() ClientCallschartLabels = ['Total Client calls connected', 'Total Client calls disconnected'];
  @Input() ClientCallschartWidth = 200;
  @Input() ClientCallschartOptions = {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {
      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: true
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: false,
        align: "start",
        position: 'right',
      },
      tooltip: { enabled: false },
    },
  }

  // ConnectedCalls bool chart data
  @Input() ConnectedCallschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ConnectedCallsData,
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#07E33F',
        '#E1E1E1'
      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() ConnectedCallschartLabels = ['Total Connected calls', 'Total calls'];
  @Input() ConnectedCallschartWidth = 200;
  @Input() ConnectedCallschartOptions = {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {
      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: false,
        align: "start",
        position: 'right',
      },
      tooltip: { enabled: false },
    }
  }

  rdsMemberActivityTableMfeConfig: ComponentLoaderOptions;
  memberActivityTableHeader: TableHeader[] = [
    { displayName: 'Member', key: 'member', dataType: 'html' },
    { displayName: 'Cases', key: 'cases', dataType: 'text' },
    { displayName: 'Active', key: 'active', dataType: 'text' },
    { displayName: 'Closed', key: 'closed', dataType: 'text' },
    { displayName: 'Rate', key: 'rate', dataType: 'html' }
  ]
  tableStyle: string = 'light';

  constructor(private injector: Injector, public translate: TranslateService) { super(injector); }

  ngOnInit(): void {
    this.rdsMemberActivityTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.memberActivityTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.memberActivityTableData,
        pagination: false,
        recordsPerPage: 10,
        noDataTitle: 'Currently you do not have member activity'
      },
    };
  }
  LoadSalesData() {

  }
  LoadMonthlySummary() {

  }
  LoadProfitShare() {

  }
  LoadDailySalesGrowth() {

  }
  LoadMemberActivityTable() {

  }

}
