import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-card',
  templateUrl: './rds-card.component.html',
  styleUrls: ['./rds-card.component.scss']
})
export class RdsCardComponent implements OnInit {

  @Input() custClass: boolean = true;
  @Input() custSidePadding: boolean = true;
  @Input() customTopBottom: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showBody: boolean = true;
  @Input() showFooter: boolean = true;
  @Input() borderColor: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined = undefined;
  @Input() colorVariant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined = undefined;

  //@Input() cardWidth?: number;


  constructor() { }

  ngOnInit(): void {
  }

  public get cardClasses(): string[] {
    let custClasses:string[] = []
    if (this.colorVariant) {
      custClasses.push('text-bg-' + `${this.colorVariant}`);
    }
    if (this.borderColor) {
      custClasses.push('border-' + `${this.borderColor}`);

    }
    return custClasses
  }


  public get cardBody(): string[] {
    let custClass: string[] = []
    // if (this.custClass === true) {
    //   custClass = ['p-0', 'body-border']
    // }
    // if (this.custSidePadding === true) {
    //   custClass = ['px-0', 'body-border']
    // }

    // if (this.customTopBottom === true) {
    //   custClass = ['py-0', 'px-0']
    // }
    return custClass
  }

  // public get title(): string[] {
  //   let custClasses = ['card-title']

  //   return custClasses
  // }


  // public get classes(): string[] {
  //   let classes: string[] = [];
  //   const bgColor = `${this.colorVariant}`;
  //   classes.push(bgColor);

  //   return classes;
  // }


}