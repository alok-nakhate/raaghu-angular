import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface chartDataSetstacked {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-stacked',
  templateUrl: './rds-chart-stacked.component.html',
  styleUrls: ['./rds-chart-stacked.component.scss']
})
export class RdsChartStackedComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'stackChart' + RdsChartStackedComponent.count;
  @Input() chartId: string = 'stackChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight: number = 400;

  // @Input() chartStyle?: any;
  @Input() chartLabels?: any
  // @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: chartDataSetstacked[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartStackedComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
    // this.chartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    // this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    // this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    // this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    // this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    // this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    // this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    // this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    // this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    // this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
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
    this.barChartBrowser();
  }

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }

  barChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      // this.canvas.style.backgroundColor = this.canvasBackgroundColor;

      this.chartDataSets.forEach((element: any) => {
        if (this.style) {
          const color = this.style.getPropertyValue(element.backgroundColor);
          if (color) {
            element.backgroundColor = color;
          }
        }
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
      const stackedChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (stackedChart !== null) {
        stackedChart.canvas.style.height = this.chartHeight + 'px';
        stackedChart.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
