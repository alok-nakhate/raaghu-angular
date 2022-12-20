import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { Icons } from './icons';
import { Flags } from './flag-icons';

@Component({
  selector: 'rds-icon',
  templateUrl: './rds-icon.component.html',
  styleUrls: ['./rds-icon.component.scss'],
})
export class RdsIconComponent implements OnInit, OnChanges {
  private svgIcon!: SVGElement;
  title = 'rds-icon';
  @Input() height: string = '';
  // @Input() disabled: boolean | undefined = false;
  @Input() fill: boolean | undefined = false;
  @Input() stroke: boolean | undefined = true;
  @Input() width: string = '';
  @Input() name: string = '';
  @Input() colorVariant!: string;
  @Input() opacity: string = '';
  @Input() strokeWidth: string = '';

  constructor(private element: ElementRef,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    if (this.name) {
      let svgData: string = Icons[this.name];
      if (!svgData || svgData === '') {
        svgData = Flags[this.name]
      }
      if (svgData) {
        if (this.svgIcon) {
          this.element.nativeElement.removeChild(this.svgIcon);
        }
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
      }
    }
  }

  ngOnChanges(): void {
    if (this.name) {
      let svgData: string = Icons[this.name];
      if (!svgData || svgData === '') {
        svgData = Flags[this.name]
      }
      if (svgData) {
        if (this.svgIcon) {
          this.element.nativeElement.removeChild(this.svgIcon);
        }
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
      }
    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    let fillColor = 'currentColor';
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    const svg = div.querySelector('svg');
    if (this.height) {
      svg.style.height = this.height;
    }
    if (this.strokeWidth) {
      svg.style['stroke-width'] = this.strokeWidth;
    }
    if (this.width) {
      svg.style.width = this.width;
    }
    // if (this.disabled) {
    //   svg.classList.add('disabled');
    // }
    if (this.opacity) {
      svg.style.opacity = this.opacity;
    }
    if (this.colorVariant == 'primary') {
      // svg.setAttribute('class', 'icon-' + this.colorVariant);
      fillColor = '#7E2EEf';
    } else if (this.colorVariant == 'secondary') {
      fillColor = '#2B0066';
    } else if (this.colorVariant == 'success') {
      fillColor = '#2EEF59';
    } else if (this.colorVariant == 'info') {
      fillColor = '#3ef1e8';
    } else if (this.colorVariant == 'warning') {
      fillColor = '#E3A300';
    } else if (this.colorVariant == 'danger') {
      fillColor = '#EF2E2E';
    } else if (this.colorVariant == 'dark') {
      fillColor = '#363636';
    } else if (this.colorVariant == 'light') {
      fillColor = '#F8F9FA';
    } else if (this.colorVariant == 'review') {
      fillColor = '#E3A300';
    } else if (this.colorVariant == 'basic') {
      fillColor = '#00A443';
    } else if (this.colorVariant == 'standard') {
      fillColor = '#005FA4';
    } else if (this.colorVariant == 'premium') {
      fillColor = '#660064';
    } else if (this.colorVariant == 'professional') {
      fillColor = '#F76161';
    }

    if (this.fill) {
      svg.style.fill = fillColor;
    } else {
      svg.style.fill = 'none';
    }

    if (this.stroke || this.stroke === undefined) {
      svg.style.stroke = fillColor;
    } else {
      svg.style.stroke = 'none';
    }
    // if (this.color) {
    //   const paths = svg.querySelectorAll('[stroke]');
    //   for et i = 0; i < paths.length; i++) {
    //     paths[i].style.stroke = this.color;
    //   }
    // }

    return svg || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }


}
