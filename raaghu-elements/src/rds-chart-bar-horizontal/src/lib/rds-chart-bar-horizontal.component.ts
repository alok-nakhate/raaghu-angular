
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetBar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bar-horizontal',
  templateUrl: './rds-chart-bar-horizontal.component.html',
  styleUrls: ['./rds-chart-bar-horizontal.component.scss']
})
export class RdsChartBarHorizontalComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'horizontalChart' + RdsChartBarHorizontalComponent.count;
  @Input() chartId: string = 'horizontalChart0';
  @Input() chartWidth = 100;
  @Input() chartHeight = 350;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetBar[] | any;
  @Input() chartOptions?: any;
  @Input() isGradient: boolean = false;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);

  }

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
      this.ctx = this.canvas.getContext('2d');
      this.chartDataSets.forEach((ele: any, index: number) => {
        if (this.style) {

          let color = this.style.getPropertyValue(ele.backgroundColor);
          const borderColor = this.style.getPropertyValue(ele.borderColor);
          const pointBackgroundColor = this.style.getPropertyValue(ele.pointBackgroundColor);
          if (borderColor) {
            ele.borderColor = borderColor;
          }
          if (pointBackgroundColor) {
            ele.pointBackgroundColor = pointBackgroundColor;
          }
          if (color) {
            if (this.isGradient) {
              const gradient = this.ctx.createLinearGradient(0, 50, 0, 300);
              color = color.replace(/[\d\.]+\)$/g, '.76)');
              gradient.addColorStop(0.1, color);
              color = color.replace(/[\d\.]+\)$/g, '.08)');
              gradient.addColorStop(1, color);
              ele.backgroundColor = gradient;
            } else {
              ele.backgroundColor = color
            }

          }
        }

      })

      if (this.chartOptions && this.style) {
        if (this.chartOptions['plugins'] && this.chartOptions['plugins']['legend'] && this.chartOptions['plugins']['legend']['labels']) {
          const legend = this.style.getPropertyValue(this.chartOptions['plugins']['legend']['labels']['color']);
          if (legend) {
            this.chartOptions['plugins']['legend']['labels']['color'] = legend;
          }
        }

        if (this.chartOptions['scales']) {
          Object.keys(this.chartOptions['scales']).forEach((ele, index) => {
            if (ele) {
              if (this.chartOptions['scales'][ele] && this.chartOptions['scales'][ele]['ticks'] && this.style) {
                const tickColor = this.style.getPropertyValue(this.chartOptions['scales'][ele]['ticks']['color'])
                if (tickColor) {
                  this.chartOptions['scales'][ele]['ticks']['color'] = tickColor;

                }
              }
            }
          })
        }
      }

      const canvas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (canvas !== null) {
        canvas.canvas.style.height = this.chartHeight + 'px';
        canvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
