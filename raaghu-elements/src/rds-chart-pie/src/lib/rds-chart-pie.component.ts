import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

// export interface chartlabel {
//   labelname: Array<string>;
// }

export interface ChartDataSetPie {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-pie',
  templateUrl: './rds-chart-pie.component.html',
  styleUrls: ['./rds-chart-pie.component.scss']
})
export class RdsChartPieComponent implements OnInit {

  static count = 0;
  //chartId = 'pieChart' + RdsChartPieComponent.count;
  @Input() chartId: string = 'pieChart0';
  canvas: any;
  context: any;
  @Input() chartWidth: number = 400;
  @Input() chartHeight: number = 500;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetPie[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartPieComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }



  ngOnChanges() {
    this.pieChartBrowser();
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.chartDataSets.forEach((element: any) => {
        element.backgroundColor.forEach((bg: any, index: number) => {
          if (this.style) {
            const color = this.style.getPropertyValue(element.backgroundColor[index]);
            if (color) {
              element.backgroundColor[index] = color;
            }          }
        });
      });
      this.context = this.canvas.getContext('2d');

      const pieChart = new Chart(this.context, {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (pieChart !== null) {
        pieChart.canvas.style.height = this.chartHeight + 'px';
        pieChart.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
