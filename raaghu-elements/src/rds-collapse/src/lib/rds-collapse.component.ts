import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'rds-collapse',
  templateUrl: './rds-collapse.component.html',
  styleUrls: ['./rds-collapse.component.scss']
})
export class RdsCollapseComponent implements OnInit {


  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow: EventEmitter<any> = new EventEmitter<any>();

  show: boolean = false;
  @Input() buttonList: any = [];
  constructor() { }

  ngOnInit(): void {

  }

  open(id: string): void {
    this.show = !this.show;
    id.split(',').forEach((item: string) => {
      var element: any = document.getElementById(item);
      var collapse = new Collapse(element);
      collapse.show();
    })
    if (this.show) {
      this.onShow.emit();
    } else {
      this.onClose.emit();
    }
  }

}
