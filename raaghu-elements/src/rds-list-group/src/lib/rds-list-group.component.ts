import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-list-group',
  templateUrl: './rds-list-group.component.html',
  styleUrls: ['./rds-list-group.component.scss']
})
export class RdsListGroupComponent implements OnInit {

  showTop = '';
  showBottom = '';
  title = 'rds-list-group';
  // labelLeft!: string; 
  public selectdataItem: selectedData = [];
  @Input() labelPosition?: 'top' | 'bottom' = 'top';
  @Input() label: string = '';

  @Output() onClick = new EventEmitter<any>();

  @Input() listItem: any[] = [];

  @Input() multiSelect: boolean = false;

  selected: any;

  ngOnInit(): void {

  }

  selectedData(item: any) {
    this.selected = item.label;
    this.selectdataItem = [{
      label: this.selected
    }]
    this.onClick.emit(this.selectdataItem);
  }

  activeProject(item: any) {
    if (!this.multiSelect) {
      for (var i = 0; i < this.listItem.length; i++) {
        this.listItem[i].isActive = false;
      }
    }
    item.isActive = !item.isActive;
  }

  // public get divclasses(): string[] {
  //   var classes = ['form-label']
  //   if (this.labelPosition === 'Top') {
  //     classes.push('top-0');
  //     this.labelLeft = ' ';
  //   }
  //   else if (this.labelPosition === 'Bottom') {
  //     classes.push(' d-flex flex-column-reverse')
  //     this.labelLeft = ' ';
  //   }
  //   else if (this.labelPosition === 'Left') {
  //     classes.push('d-flex align-items-baseline gap-3 ')
  //     this.labelLeft = ' ';
  //   }
  //   else if (this.labelPosition === 'Right') {
  //     classes.push(' d-flex align-items-baseline gap-3');
  //     this.labelLeft = '2';
  //   }
  //   return classes;
  // }

}


export class selectedData {
  constructor(
    label: string
  ) { }

}
