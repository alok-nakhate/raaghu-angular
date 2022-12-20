import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-card-detail-list',
  templateUrl: './rds-comp-card-detail-list.component.html',
  styleUrls: ['./rds-comp-card-detail-list.component.scss']
})
export class RdsCompCardDetailListComponent implements OnInit {
  IsEditAndDefaultFunctionalityRequired:boolean=false;
  IsSelectionRequired:boolean=false
  @Input() listItems: any = [{ cardID: '1011', cardName: 'MasterCard', cardExpiry: '06/2027', cardLogo: 'dashboard', cardNumber: 1111, radioItems: [{ id: 1011, checked: true, name: "Radio-Button" }] }
    , { cardID: '1012', cardName: 'Visa', cardExpiry: '11/2032', cardLogo: 'tenant', cardNumber: 3256, radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }] }
    , { cardID: '1013', cardName: 'DEbit', cardExpiry: '04/2023', cardLogo: 'plus', cardNumber: 8001, radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }] }
    , { cardID: '1014', cardName: 'Discover', cardExpiry: '08/2027', cardLogo: 'roles', cardNumber: 3412, radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }] }];

  constructor() { }

  ngOnInit(): void {
  }
  
  onSetAsDefaultCard(event: any) {
    const listItems = this.listItems;
    listItems.forEach((element: any) => {
      if (element.cardID === event.cardID) {
        element.radioItems[0].checked = true;
        element.isDefault=true;
      }
      else {
        element.isDefault=false;
        element.radioItems[0].checked = false
      }
    });
    this.listItems = [...listItems];

  }
  onSelectCardForPaymentMethod(event: any) {
    const listItems = this.listItems;
    listItems.forEach((element: any) => {
      if (element.cardID === event.cardID) {
        element.radioItems[0].checked = true;
      }
      else {
        element.radioItems[0].checked = false
      }
    });
    this.listItems = [...listItems];
  }
}
