import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetBubble {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bubble',
  templateUrl: './rds-chart-bubble.component.html',
  styleUrls: ['./rds-chart-bubble.component.scss']
})
export class RdsChartBubbleComponent implements OnInit, OnChanges, AfterViewInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //@Input() chartId = 'ChartBubble' + RdsChartBubbleComponent.count;
  @Input() chartId: string = 'ChartBubble0';
  @Input() chartWidth: number = 400;
  @Input() chartHeight: number = 600;
  @Input() chartLabels?: any;
  @Input() chartDataSets?: ChartDataSetBubble[] | any = [];
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartBubbleComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }

  ngOnChanges(): void {
    this.ChartBubbleBrowser();
  }

  ngAfterViewInit(): void {
    this.ChartBubbleBrowser();
  }

  ChartBubbleBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
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
    if (this.canvas !== null) {
      // this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const bubbleChart = new Chart(this.ctx, {
        type: 'bubble',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (bubbleChart !== null) {
        bubbleChart.canvas.style.height = this.chartHeight + 'px';
        bubbleChart.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
