import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-label',
  templateUrl: './rds-label.component.html',
  styleUrls: ['./rds-label.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class RdsLabelComponent implements OnInit {
  @Input() label?: any;
  @Input() multiline: boolean = false;
  @Input() bold: boolean = false;
  @Input() italic: boolean = false;
 /*  @Input() size: 'small' | 'medium' | 'large' = 'medium'; */
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
   /*  if(this.size == 'medium'){
      const mode2 = `${this.size === 'medium' ? 'fs-4' : this.size === 'large' ? 'fs-3' : this.size === 'small'? 'fs-2': 'fs-4'}`; */
    
    const mode1 = `${this.bold === true ? ' fw-bold' : ''}`;
    const mode2 = `${this.italic === true ? ' fst-italic' : ''}`;
    return mode1 + mode2;
  }


}
