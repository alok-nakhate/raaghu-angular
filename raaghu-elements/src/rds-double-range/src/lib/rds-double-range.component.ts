import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-double-range',
  templateUrl: './rds-double-range.component.html',
  styleUrls: ['./rds-double-range.component.scss']
})
export class RdsDoubleRangeComponent implements AfterViewInit {

  @Input() role = 'Default';
  @Input() val1: number = 0;
  @Input() val2: number = 100;

  @Input() min = 0

  @Input() max = 100

  @Output() rangeValueOne = new EventEmitter();

  @Output() rangeValueTwo = new EventEmitter();

  rangeval!: HTMLInputElement
  range1!: HTMLSpanElement
  range2!: HTMLSpanElement
  sliderOne!: HTMLInputElement
  sliderTwo!: HTMLInputElement
  sliderTrack!: HTMLDivElement

  minGap = 0

  valueDisabled1!: boolean;
  valueDisabled2!: boolean;
  rangeZIndex1!: number;
  rangeZIndex2!: number;
  class1 = '';
  class2 = '';

  constructor() { }
  ngAfterViewInit(): void {
    this.sliderTrack = document.querySelector('.slider-track') as HTMLDivElement
    this.sliderOne = document.getElementById('slider1') as HTMLInputElement
    this.sliderTwo = document.getElementById('slider2') as HTMLInputElement
    this.fillColor()
  }

  // writeValue(obj: any): void {
  //   this.val1 = obj;
  //   this.val2 = obj;
  // }

  rangeone() {
    this.val1 = parseInt(this.sliderOne.value);
    this.val2 = parseInt(this.sliderTwo.value);
    if (this.val1 > this.val2) {
      this.val2 = this.val1;
      if (this.val2 == parseInt(this.sliderTwo.max)) {
        this.val1 = parseInt(this.sliderTwo.max);
      }
    }
    this.rangeValueOne.emit(this.val1)
    this.fillColor();
  }

  rangetwo() {
    this.val1 = parseInt(this.sliderOne.value);
    this.val2 = parseInt(this.sliderTwo.value);
    if (this.val2 < this.val1) {
      this.val1 = this.val2;
      if (this.val1 == parseInt(this.sliderOne.min)) {
        this.val2 = 0;
      }
    }
    this.rangeValueTwo.emit(this.val2)
    this.fillColor();
  }

  fillColor() {
    this.range1 = document.getElementById("range1") as HTMLSpanElement
    this.range2 = document.getElementById("range2") as HTMLSpanElement
    let percent1 = ((this.val1 - this.min) / (this.max - this.min)) * 100;
    let percent2 = ((this.val2 - this.min) / (this.max - this.min)) * 100;
    this.sliderTrack.style.background = `linear-gradient(90deg, #D0D7DD ${percent1}% , #7E2EEf ${percent1}% , #7E2EEf ${percent2}%, #D0D7DD ${percent2}%)`;
    this.range1.style.left = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`
    this.range2.style.left = `calc(${percent2}% + (${-5 - percent2 * 0.15}px))`
  }

}
