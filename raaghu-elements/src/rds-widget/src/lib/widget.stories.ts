
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsWidgetComponent } from './rds-widget.component';
import { RdsBigNumberWidgetModule } from '@libs/rds-big-number-widget';
import { RdsChartLineModule } from '@libs/rds-chart-line';
import { RdsChartBarHorizontalModule } from '@libs/rds-chart-bar-horizontal';
import { RdsChartBoolModule } from '@libs/rds-chart-bool';
import { RdsChartDoughnutModule } from '@libs/rds-chart-doughnut';

export default {
  title: 'Elements/Widget',
  component: RdsWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule,
        RdsBigNumberWidgetModule,
        RdsChartLineModule,
        RdsChartBarHorizontalModule,
        RdsChartBoolModule,
        RdsChartDoughnutModule,
        RdsBigNumberWidgetModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'gradient-primary'],
      control: { type: 'select' }
    },
    //cardheight: {
    //  options: ['card-stretch', 'card-stretch-half'],
    //  control: { type: 'select' }
    //},
  },

} as Meta;

const Template: Story<RdsWidgetComponent> = (args: RdsWidgetComponent) => ({
  props: args,
  template: `<rds-widget [isRefreshRequired]="isRefreshRequired" [headerTitle]="headerTitle" [colorVariant]="colorVariant" >  
  <div body>
    <rds-big-number-widget bigNumber="$32,230.00"  subText="+$2203.00" [colorVariant]="colorVariant"
      [icon]="'triangle_up'" [iconHeight]="'12px'" [iconWidth]="'12px'" [iconFill]="true" [iconStroke]="true" [textAlign]="'text-start'" subTitleColorVariant="success"
    ></rds-big-number-widget>
  </div>
</rds-widget>`
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['headerTitle', 'isRefreshRequired', 'colorVariant'] } };
Default.args = {
  headerTitle: 'Sales',
  isRefreshRequired: false,
  colorVariant: ''
}

const barChartTemplate: Story<any> = (args: any) => ({
  props: args,
  template: `<rds-widget [isRefreshRequired]="isRefreshRequired"  [headerTitle]="headerTitle" [colorVariant]="colorVariant" >
  <div body>
    <rds-big-number-widget [iconFill]="true" [iconStroke]="true" [bigNumber]="'$3,73,960.412'" [subText]="'-$5850.75'"
      [icon]="'triangle_down'"  [iconHeight]="'12px'" [iconWidth]="'12px'" [textAlign]="'text-start'" subTitleColorVariant="danger"></rds-big-number-widget>
    <rds-chart-bar-horizontal [chartLabels]="barHrChartLabels" [chartWidth]="barHrChartWidth" [chartHeight]="barHrchartHeight"
      [chartDataSets]="barHrChartDatasets" [chartOptions]="barHrChartOptions">
    </rds-chart-bar-horizontal>
  </div>
</rds-widget>`
});
export const withBarChart = barChartTemplate.bind({})
withBarChart.parameters = { controls: { include: ['headerTitle', 'isRefreshRequired', 'colorVariant', 'barHrChartDatasets',
'barHrChartLabels', 'barHrChartWidth', 'barHrchartHeight','barHrChartOptions'] } };
withBarChart.args = {
  headerTitle: 'Daily Sales Growth',
  isRefreshRequired: true,
  colorVariant: '',
  barHrChartDatasets: [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 1,
      borderRadius: 10,
      barThickness: 7,
      borderSkipped: false,
    }
  ],
  barHrChartLabels: ['10k', '20k', '25k', '30k', '40k', '50k', '60k', '70k', '75k', '80k', '90k', '95k'],
  barHrChartWidth: 300,
  barHrchartHeight: 300,
  barHrChartOptions: {
    indexAxis: 'x',
    elements: {
    bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: '',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      scales:
      {
        y: {
          beginAtZero: true,
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: false,
        text: 'Daily Sales Growth'
      }
    },
  },
}

const lineChartTemplate: Story<any> = (args: any) => ({
  props: args,
  template: `   <rds-widget [isRefreshRequired]="isRefreshRequired" [colorVariant]="colorVariant"
  [headerTitle]="headerTitle">
  <div body>
    <rds-chart-line [chartLabels]="monthlySummaryLabels" [chartWidth]="monthlySummarychartWidth" [chartHeight]="monthlySummarychartHeight"
      [chartDataSets]="monthlySummaryDataSets" [chartOptions]="monthlySummarychartOptions"></rds-chart-line>
  </div>
</rds-widget>`
});
export const withLineChart = lineChartTemplate.bind({})
withLineChart.parameters = { controls: { include: ['headerTitle', 'isRefreshRequired', 'colorVariant', 'monthlySummaryDataSets',
'monthlySummaryLabels', 'monthlySummarychartWidth', 'monthlySummarychartHeight','monthlySummarychartOptions'] } };
withLineChart.args = {
  headerTitle: 'Monthly Summary',
  isRefreshRequired: false,
  colorVariant: '',
  monthlySummaryDataSets: [
    {
      label: 'Sales',
      data: [190, 200, 133, 231, 112, 125, 135, 135.7, 266, 224, 122, 125],
      borderColor: '#4DCFFF',
      pointBackgroundColor: '#4DCFFF',
      // backgroundColor: '#ECEEF4',
      fill: true,
      pointRadius: 3,
      // fillColor: "rgba(195, 40, 96, 0.1)",
      tension: 0.4,
    },
    {
      label: 'Revenue',
      data: [290, 262, 205, 162, 150, 180, 206, 220, 240, 190, 275, 211],
      borderColor: '#863BFF',
      pointBackgroundColor: '#863BFF',
      // backgroundColor: '#ECEEF4',
      fill: true,
      pointRadius: 3,
      tension: 0.4,
    }
  ],
  monthlySummaryLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthlySummarychartWidth: 650,
  monthlySummarychartHeight: 250,
  monthlySummarychartOptions: {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    borderWidth: 1,
    maintainAspectRatio: false,
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
          boxWidth: 8,
          padding: 30,
          height: 10
        },
      },
      tooltip: { enabled: true },
    },
    scales:
    {
      y: {
        beginAtZero: true,
        legend: {
          labels: {
            maxheight: 10
          },
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      },
    },
    tooltip: {
      display: true,
      usePointStyle: true,
    },
  }
}

const doughnutChartTemplate: Story<any> = (args: any) => ({
  props: args,
  template: `    <rds-widget [isRefreshRequired]="isRefreshRequired" [colorVariant]="colorVariant"
  [headerTitle]="headerTitle">
  <div body>
    <rds-big-number-widget [bigNumber]="'$39,330.00'" [textAlign]="'text-start'"></rds-big-number-widget>
    <div class="col col-sm-12">
      <rds-chart-doughnut [chartDataSets]="pschartDatasets" [titleText]="'35 K'" [subTitleText]="'Profit'" chartId="psChart"
        [chartWidth]="pschartWidth" [chartHeight]="pschartHeight" [chartLabels]="pschartLabels"
        [chartOptions]="pschartOptions" chartType="doughnut">
      </rds-chart-doughnut>
    </div>
  </div>
</rds-widget>`
});
export const withDoughnutChart = doughnutChartTemplate.bind({})
withDoughnutChart.parameters = { controls: { include: ['headerTitle', 'isRefreshRequired', 'colorVariant', 'pschartDatasets',
'pschartLabels', 'pschartWidth', 'pschartHeight','pschartOptions'] } };
withDoughnutChart.args = {
  headerTitle: 'Profit Share',
  isRefreshRequired: false,
  colorVariant: '',
  pschartDatasets: [
    {
      label: 'Dataset 1',
      data: [60, 25, 15],
      backgroundColor: [
        '#ff6384',
        '#BF00BB',
        '#4bc0c0'
      ],
      fillStyle: 'blue',
      fillRect: [200, 100, 140, 100],

      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  pschartLabels: ['Total Sales - 60%', 'Revenue - 25%', 'Expenses - 15%'],
  pschartWidth: 255,
  pschartHeight: 200,
  pschartOptions: {

    cutoutPercentage: 40,
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
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
        labels: {
          boxWidth: 15,
          padding: 15
        },
      },
    }
  }


}

const boolChartTemplate: Story<any> = (args: any) => ({
  props: args,
  template: `  <rds-widget [isRefreshRequired]="isRefreshRequired" [colorVariant]="colorVariant"
  [headerTitle]="headerTitle">
  <div body>
    <div class="d-flex align-items-center mt-3"> 
      <div class="">
        <rds-chart-bool chartId="ConnectedCallschart" [centerIconName]="'headset'" [chartDataSets]="ConnectedCallschartDatasets" 
          [chartLabels]="ConnectedCallschartLabels" [chartWidth]="100" [chartHeight]="100"
          [chartOptions]="ConnectedCallschartOptions" chartType="doughnut"></rds-chart-bool>
      </div>
      <div class="ms-2">
        <h5 class="custom-title">85%</h5>
        <p class="custom-desc mb-0">Total Calls Connected</p>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3">
      <div class="">
        <rds-chart-bool chartId="ClientCallschart" [centerIconName]="'users'" [chartDataSets]="ClientCallschartDatasets" 
          [chartLabels]="ClientCallschartLabels" [chartWidth]="100" [chartHeight]="100"
          [chartOptions]="ClientCallschartOptions" chartType="doughnut"></rds-chart-bool>
      </div>
      <div class="ms-2">
        <h5 class="custom-title">65%</h5>
        <p class="custom-desc mb-0">Total Clients Called</p>
      </div>
    </div>
  </div>
</rds-widget>`
});
export const withBoolChart = boolChartTemplate.bind({})
withBoolChart.parameters = { controls: { include: ['headerTitle', 'isRefreshRequired', 'colorVariant', 'ClientCallschartDatasets',
'ClientCallschartLabels', 'ClientCallschartWidth', 'ClientCallschartOptions','ConnectedCallschartDatasets', 'ConnectedCallschartLabels',
'ConnectedCallschartWidth', 'ConnectedCallschartOptions'] } };
withBoolChart.args = {
  headerTitle: 'Call Overview',
  isRefreshRequired: false,
  colorVariant: '',
  ClientCallschartDatasets: [
    {
      label: 'Dataset 1',
      data: [65, 100 - 65],
      fillStyle: '#D0D7DD',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        'green',
        'white'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  ClientCallschartLabels: ['Total Client calls connected', 'Total Client calls disconnected'],
  ClientCallschartWidth: 200,
  ClientCallschartOptions: {
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
    maintainAspectRatio: false,
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
        "fontSize": 20,
      },
      tooltip: { enabled: false },
    },
  },

  // ConnectedCalls bool chart data
  ConnectedCallschartDatasets: [
    {
      label: 'Dataset 1',
      data: [80, 100 - 80],
      fillStyle: '#E1E1E1',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        'red',
        'white'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  ConnectedCallschartLabels: ['Total Connected calls', 'Total calls'],
  ConnectedCallschartWidth: 200,
  ConnectedCallschartOptions: {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    maintainAspectRatio: false,
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
}

