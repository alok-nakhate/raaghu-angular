import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export class CardData {
  cardID: string
  cardName: string
  cardExpiry: string
  cardNumber: number
  cardLogo: string
  isDefault: boolean
  radioItems: [{
    id: number
    checked: boolean
    name: string
  }]
}
@Component({
  selector: 'rds-card-detail',
  templateUrl: './rds-card-detail.component.html',
  styleUrls: ['./rds-card-detail.component.scss']
})
export class RdsCardDetailComponent implements OnInit {

  @Input() cardData: CardData;
  @Input() IsEditAndDefaultFunctionalityRequired: boolean = true;
  @Input() IsSelectionRequired: boolean = true;
  @Output() onSetDefaultcard = new EventEmitter<any>();
  @Output() onSelectPaymentMethod = new EventEmitter<any>();
  @Output() onEditCard = new EventEmitter<any>();
  @Input() label: string = '';
  iconHeight: "38px";
  iconWidth: "38px";
  constructor() { }

  ngOnInit(): void {
  }
  public classes() {
    return 'avatar-sm'
  }
  onEditCardDetails(cardData: any) {
    this.onEditCard.emit(cardData);
  }
  setAsDefaultCard(cardData: any) {
    cardData.radioItems[0].checked = true;
    cardData.isDefault = true;
    this.onSetDefaultcard.emit(cardData);

  }
  setAsPaymentMethod(cardData: any) {
    cardData.radioItems[0].checked = true;
    this.onSelectPaymentMethod.emit(cardData);
  }
}
