import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-background-image',
  templateUrl: './rds-comp-background-image.component.html',
  styleUrls: ['./rds-comp-background-image.component.scss']
})
export class RdsCompBackgroundImageComponent implements OnInit {

  constructor() { }

  @Input() imageUrl: string = ''
  @Input() imageHeight: number = 690;
  @Input() title: string = '';
  @Input() btnLabel: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundRepeat: string = 'no-repeat';
  @Input() backgroundSize: string = 'cover';


  ngOnInit(): void {


  }

  getImageUrl(): string {
    if (this.imageUrl) {
      return 'url(' + this.imageUrl + ')'
    }
    return '';
  }

}
