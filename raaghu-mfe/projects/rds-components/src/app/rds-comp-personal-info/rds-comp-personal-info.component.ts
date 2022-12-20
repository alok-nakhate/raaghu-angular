import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-personal-info',
  templateUrl: './rds-comp-personal-info.component.html',
  styleUrls: ['./rds-comp-personal-info.component.scss']
})
export class RdsCompPersonalInfoComponent implements OnInit {
  public personalData: any = {
    firstName: '',
    lastName: '',
    timezone: '',
    country: '',
    emailAddress: '',
    jobRole: '',
    profileImage: 'https://anzdemoui.raaghu.io/assets/MaskGroup.png',
    profileName: '',
    portfolioProjects:[],
    bio:'I am a Lead Ux Designer and working with RDS System Inc. in United Kingdom. I have Ui and Ux skill-set, brand building knowledge also work on client new requirements as per the projects with my product development team.'
  };
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public jobRoleList: any = [];
  public countryList: any = [];
  public timezones: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onProfileSelect(fileInfo: any): void {
    const reader = new FileReader();
    if (fileInfo) {
      const [file] = fileInfo;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.personalData.profileImage = reader.result as string;
      };
    }
  }

  onPortfolioSelect(files:any):void{
    console.log(files);

  }

}
