import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface TableHeader {
  displayName: string;
  key: string;
  dataType: string;
  class?: string;
}
@Component({
  selector: 'rds-table',
  templateUrl: './rds-table.component.html',
  styleUrls: ['./rds-table.component.scss']
})
export class RdsTableComponent implements OnInit {

  @Input() showTableBorder: boolean = true;
  @Input() showTableHeader: boolean = true;
  @Input() tableHeaders: TableHeader[] = [];
  @Input() tableData: any[] = [];
  @Input() colorVariant: 'success' | 'danger' | 'dark' | 'warning' | 'info' | 'light' | 'primary' | 'secondary' | undefined = undefined;
  @Input() borderColorVariant: 'success' | 'danger' | 'dark' | 'warning' | 'info' | 'light' | 'primary' | 'secondary' | undefined = undefined;


  constructor() { }

  ngOnInit(): void {
  }

  public get bodyColorClasses(): string[] {
    var bodyClass = ['table table-responsive']
    if (this.showTableBorder === true) {
      bodyClass.push('table-bordered')
    }
    // if (this.borderColorVariant) {
    //   bodyClass.push('border-' + this.borderColorVariant)
    // }
    // if (this.colorVariant) {
    //   bodyClass.push('table-' + this.colorVariant)

    // }
    return bodyClass;
  }

  public get headcolor(): any[]{
    var tableheadcolor = ['']
    if(this.colorVariant){
      tableheadcolor.push('table-' + this.colorVariant)
    }
    return tableheadcolor;
  }

  //public get classes(): string[] {

  //  var classes = ['table']
  //  if (this.hover === true) {
  //    /* classes = ['table-hover'];*/
  //    classes.push('table-hover');     
  //  }
  //  if(this.border === true) {
  //    classes.push('table-bordered')
  //  }
  //  else if(this.stripe === true) {
  //    classes.push('table-striped')
  //  }

  //  return classes;
  //}
}
