import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-testimonial',
  templateUrl: './rds-testimonial.component.html',
  styleUrls: ['./rds-testimonial.component.scss']
})

export class RdsTestimonialComponent implements OnInit {

  @Input() testimonialItems: any[] = [];
  @Input() iconHeight: string = '30px';
  @Input() iconWidth: string = '30px';

  @Input() testimonialItemstwo: any[] = [];
  @Input() role: 'Default' | 'testimonialtwo' = 'Default';
  
  constructor() { }

  ngOnInit(): void {

  }

}
