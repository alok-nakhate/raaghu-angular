import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetRadar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-radar',
  templateUrl: './rds-chart-radar.component.html',
  styleUrls: ['./rds-chart-radar.component.scss']
})
export class RdsChartRadarComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  // chartId = 'radarChart' + RdsChartRadarComponent.count;
  @Input() chartId: string = 'radarChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetRadar[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }

  // public get classes(): string[] {
  //   var classes = ['res-width']
  //   if (this.chartStyle === "Dark") {
  //     classes.push('dark-mode')
  //     return classes
  //   }
  //   return classes
  // }

  ngOnChanges(): void {
    this.radarChartBrowser();
  }

  ngAfterViewInit(): void {
    this.radarChartBrowser();
  }

  radarChartBrowser(): void {
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

      if (this.chartOptions && this.style) {
        if (this.chartOptions['plugins'] && this.chartOptions['plugins']['legend'] && this.chartOptions['plugins']['legend']['labels']) {
          const legend = this.style.getPropertyValue(this.chartOptions['plugins']['legend']['labels']['color']);
          if (legend) {
            this.chartOptions['plugins']['legend']['labels']['color'] = legend;
          }
        }

        if (this.chartOptions['scales']) {
          Object.keys(this.chartOptions['scales']).forEach((ele, index) => {
            if (ele && this.style) {
              if (this.chartOptions['scales'][ele] && this.chartOptions['scales'][ele]['ticks']) {
                const tickColor = this.style.getPropertyValue(this.chartOptions['scales'][ele]['ticks']['color'])
                if (tickColor) {
                  this.chartOptions['scales'][ele]['ticks']['color'] = tickColor;

                }
              }
            }
          })
        }
      }
      this.ctx = this.canvas.getContext('2d');
      const radarChart = new Chart(this.ctx, {
        type: 'radar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (radarChart !== null) {
        radarChart.canvas.style.height = this.chartHeight + 'px';
        radarChart.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
