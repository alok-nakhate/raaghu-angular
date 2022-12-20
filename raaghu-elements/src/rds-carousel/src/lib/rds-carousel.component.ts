import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'rds-carousel',
  templateUrl: './rds-carousel.component.html',
  styleUrls: ['./rds-carousel.component.scss']
})
export class RdsCarouselComponent implements OnInit {

  static count = 0;
  id = 'carousel';

  @Input()
  crossFade = false;

  @Input()
  indicators = false;

  @Input()
  controls = false;

  @Input() display_type: 'basic' | 'advanced' = 'basic';

  @Input()
  imageItem = [
    {
      img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
      caption: 'this is the caption section were u can add the caption for the image'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      caption: 'this is the caption section were u can add the caption for the image'
    }
  ];

  @Input() carousalItem = [{
    icon: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    name: 'Sam Smith',
    roleName: 'Product Manager',
    subTitle: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra.'
  },
  {
    icon: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    name: 'king John',
    roleName: 'Tech Lead',
    subTitle: 'this is the caption section were u can add the caption for the image',

  }];

  constructor() {
    this.id = 'carousel' + RdsCarouselComponent.count++;
  }

  ngOnInit(): void {
  }

  public get classes(): string {
    const mode1 = this.crossFade ? ' carousel-fade' : '';
    const mode2 = this.display_type === 'advanced' ? ' carousel-dark' : '';
    return 'carousel slide' + mode1 + mode2;
  }

}
