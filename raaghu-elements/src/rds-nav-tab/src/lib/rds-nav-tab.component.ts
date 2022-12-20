import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-nav-tab',
  templateUrl: './rds-nav-tab.component.html',
  styleUrls: ['./rds-nav-tab.component.scss']
})
export class RdsNavTabComponent implements OnInit {

  @Input() navtabsItems?: any
  @Input() horizontalAlignment: 'start' | 'center' | 'end' = 'start';
  @Input() verticalAlignment?: boolean = false;
  @Input() pills: boolean = false;
  @Input() tabs?: boolean = false;
  @Input() fill?: boolean = false;
  @Input() justified?: boolean = false;
  @Input() flex?: boolean = false;
  @Output()
  onClicktab = new EventEmitter<{ evnt: any }>();
  @Input() activeTab: number = 0;
  @Input() tabsWithBorderTop?: boolean = true;
  navIcon: true;
  constructor() { }

  ngOnInit(): void {
    // this.activepage = 0;
  }

  onClick(i: any): void {
    this.activeTab = i;
    this.onClicktab.emit(i)
  }

  public get classes(): string {
    const align = ` justify-content-${this.horizontalAlignment} `;
    const vertical = `${this.verticalAlignment ? ' flex-column vertical-tab ' : ' flex '}`;
    const pill = `${this.pills ? ' nav-pills ' : ''}`;
    const tab = `${this.tabs ? ' rds-tab-2 ' : ''}`;
    const fill = `${this.fill ? ' nav-pills nav-fill ' : ''}`;
    const justify = `${this.justified ? ' nav-pills nav-justified ' : ''}`;
    // const flex = `${this.flex ? ' nav-pills flex-column flex-sm-row ' : ''}`
    const border = `${this.tabsWithBorderTop ? '' : ' rds-tab-2 '}`;
    let navTab = '';
    if (!this.pills && !this.fill && !this.justified) {
      navTab = ' nav-tabs'
    }
    return align + vertical + pill + navTab + tab + fill + justify;
  }


  public get flexClass(): string[] {
    var flecClass = ['col-md-12'];
    if (this.verticalAlignment === true) {
      flecClass.push('d-flex');
    }
    return flecClass
  }


}