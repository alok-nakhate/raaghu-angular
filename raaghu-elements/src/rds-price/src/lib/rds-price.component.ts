import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'rds-price',
  templateUrl: './rds-price.component.html',
  styleUrls: ['./rds-price.component.scss']
})
export class RdsPriceComponent implements OnInit, OnChanges {
  @Input() discount: number = 0;
  @Input() actualPrice: number = 0;
  @Input() withDiscount: boolean = true;
  @Input() originalPrice = 0;
  // withDiscountPrice?:number;

  numberPrice?: number = 0;
   @Input() numberPricetwo?: number;
   @Input() role: 'Basic' | 'withoutDiscount' = 'Basic';
   
  constructor() { }

  

  


  ngOnChanges(): void {
    
  }

  ngOnInit(): void {
    this.discount < 0 ? this.discount = 0 : this.discount > 100 ? this.discount = 100 : this.discount = this.discount;
  }

  calculateprice() {
    if (this.withDiscount) {
      return this.actualPrice - ((this.actualPrice * this.discount) / 100);
    }
    return this.actualPrice;
    //  this.numberPrice = this.withDiscountPrice ;

  }

}
