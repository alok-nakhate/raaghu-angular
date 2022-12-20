import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
export interface EditionItem {
  EditionName: string;
  EditionTitle: string;
  Price: string;
  Plan:string;
  features:any[];
}
@Component({
  selector: 'rds-comp-edition',
  templateUrl: './rds-comp-edition.component.html',
  styleUrls: ['./rds-comp-edition.component.scss']
})

export class RdsCompEditionComponent implements OnInit {

  ngOnInit(): void {
    this.Dataset=this.EditionData;
  }
  elementUrls: string[];
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.Dataset=this.EditionData;
  }
 
 
  Editionitems: EditionItem[] = [];
  @Input()
  bodybackGroundColor?: string;
  @Input()
  borderRadious?: number;
  @Input()
  Paddig?: number;
  @Input()
  borderwidth?:number;
  @Input() 
  EditionData: EditionItem[]=[{
 
    EditionName: "Corporate",
    EditionTitle: "Strong Application for large team",
    Price: "45",
    Plan:"Per month",
    features:["Maximum User Count","Test Check feature","Test check feature count 2"]
  }];
  Dataset:any[]=[];
  @Input()
  EditionBorder?:number=0;

}
