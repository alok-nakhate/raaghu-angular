import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-team-member',
  templateUrl: './rds-team-member.component.html' ,
  styleUrls: ['./rds-team-member.component.scss']
})
export class RdsTeamMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() displayType: 'Basic' | 'Advanced' = 'Basic' ; 
  @Input() teamItem : any[] =[]
  @Input() colorVariant: 'primary'| 'secondary'| 'danger'| 'success'| 'warning'|'info'| 'light'| 'dark' ='primary';

}