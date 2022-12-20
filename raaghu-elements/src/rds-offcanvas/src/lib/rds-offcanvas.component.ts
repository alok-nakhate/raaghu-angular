import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-offcanvas',
  templateUrl: './rds-offcanvas.component.html',
  styleUrls: ['./rds-offcanvas.component.scss']
})
export class RdsOffcanvasComponent implements OnInit {


  @Input() placement: 'start' | 'end' | 'top' | 'bottom' = 'start';
  @Input() backDrop: 'static' | true | false = 'static';
  @Input() scrolling: boolean = false;
  @Input() preventEscapeKey: boolean = false;
  @Input() offId = 'canvasExample';
  @Input() canvasTitle: string = '';
  @Input() offcanvaswidth = 250;
  @Input() bodySpacing: boolean = true;
  @Output() onShow = new EventEmitter<Event>();
  @Output() onClose = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    let align = ` offcanvas offcanvas-${this.placement}`;
    return align;
  }
  public get bodyClasses(): string {
    let spacing = `${this.bodySpacing === false ? ' p-0' : ''}`;
    return spacing;
  }
}