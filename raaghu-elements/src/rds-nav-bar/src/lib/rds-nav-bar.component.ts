import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
export interface navItem {
  label: string;
  url: string
}
@Component({
  selector: 'rds-nav-bar',
  templateUrl: './rds-nav-bar.component.html',
  styleUrls: ['./rds-nav-bar.component.scss']
})
export class RdsNavBarComponent implements OnInit {
  // @Input() colorVariant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined = undefined;
  @Input() title: string = 'Navbar';
  @Input() navbarItems: navItem[] = [{
    label: "Home",
    url: ''
  },
  {
    label: "Features",
    url: ''
  },
  {
    label: "Pricing",
    url: ''
  }];
  @Input() size: 'small' | 'medium' | 'large' | 'extra-large' = 'medium'
  @Input() activeTab: number = 0;
  @Output() onTabClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  // public get classes(): string[] {
  //   const styles: any = ['navbar']
  //   // if (this.size === 'small') {
  //   //   styles.push('navbar-expand-sm');
  //   // }
  //   // if (this.size === 'medium') {
  //   //   styles.push('navbar-expand-md');
  //   // }
  //   // if (this.size === 'large') {
  //   //   styles.push('navbar-expand-lg');
  //   // }
  //   // if (this.size === 'extra-large') {
  //   //   styles.push('navbar-expand-xl');
  //   // }
  //   // styles.push('navbar-expand-sm');
  //   // if (this.colorVariant) {
  //   //   styles.push('bg-' + this.colorVariant);

  //   // }
  //   return styles;
  // }
}
