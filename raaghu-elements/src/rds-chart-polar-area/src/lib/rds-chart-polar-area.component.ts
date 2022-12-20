import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetPolar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-polar-area',
  templateUrl: './rds-chart-polar-area.component.html',
  styleUrls: ['./rds-chart-polar-area.component.scss']
})
export class RdsChartPolarAreaComponent implements OnInit {

  canvas: any;
  ctx: any;
  static count = 0;
  // chartId = 'polarAreaChart' + RdsChartPolarAreaComponent.count;
  @Input() chartId: string = 'polarAreaChart0';
  @Input() chartWidth: number = 400;
  @Input() chartHeight: number = 400;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: ChartDataSetPolar[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartPolarAreaComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }


  ngOnChanges() {
    this.polarAreaChartBrowser()
  }

  ngAfterViewInit() {
    this.polarAreaChartBrowser();
  }

  polarAreaChartBrowser(): void {
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
            }
          }
        });
      });
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const polarAreaCanvas = new Chart(this.ctx, {
        type: 'polarArea',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (polarAreaCanvas !== null) {
        polarAreaCanvas.canvas.style.height = this.chartHeight + 'px';
        polarAreaCanvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
