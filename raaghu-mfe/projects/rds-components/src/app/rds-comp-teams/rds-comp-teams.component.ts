import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-teams',
  templateUrl: './rds-comp-teams.component.html',
  styleUrls: ['./rds-comp-teams.component.scss']
})
export class RdsCompTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayType : 'Basic' | 'Advanced' = 'Basic';

  teamItem =[
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'../assets/no-profile-picture-icon.png',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    },
    {
      title: 'Wily',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Vivek',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Riya',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    }     
  ]
}
