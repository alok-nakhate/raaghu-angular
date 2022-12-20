import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-feature-list',
  templateUrl: './rds-feature-list.component.html',
  styleUrls: ['./rds-feature-list.component.scss'],
})
export class RdsFeatureListComponent implements OnInit, OnChanges {
  @Input() header!: string;
  @Input() listItems: any;
  @Input() columns!: number;
  @Input() display_type: 'basic' | 'advanced' = 'basic';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listItems) {
      this.listItems.forEach((element, index) => {
        this.assignDepth(this.listItems, 0, index);
      });
    }
  }

  ngOnInit(): void {
    this.listItems.forEach((element, index) => {
      this.assignDepth(this.listItems, 0, index);
    });

  }



  public assignDepth(arr, depth = 0, index = 0): any {
    if (index < arr.length) {
      arr[index].depth = depth;
      if (arr[index].listItems && arr[index].listItems.length) {
        return this.assignDepth(arr[index].listItems, depth + 1, 0);
      };
      return this.assignDepth(arr, depth, index + 1);
    };
    return;
  }

  getIconIfo(array): any {
    let depth = array[0].depth;
    if (depth > 0 && array.some((x: any) => x.listItems)) {
      return {
        icon: 'chevron_right',
        width: '10px',
        height: '10px',
        colorVariant: '',
        fill: false
      }
    }
    return {
      icon: 'circle',
      width: '5px',
      height: '5px',
      colorVariant: '',
      fill: false,
      strokeWidth: '1px'
    }
  }





}
