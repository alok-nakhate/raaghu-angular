import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-delivery-method',
  templateUrl: './rds-comp-delivery-method.component.html',
  styleUrls: ['./rds-comp-delivery-method.component.scss']
})
export class RdsCompDeliveryMethodComponent implements OnInit {

 
  ngOnInit(): void {
  }
  constructor(@Inject(DOCUMENT) private document: Document, public translate: TranslateService) { }

  
  @Input() sizeDataWithDescription = [{type: 'Standard', days:"4-10 buisness days", cost:"$5.00"},{type: 'Express', days:"2-5 buisness days", cost:"$16.00"}, {type: 'Free', days:"10-12 buisness days", cost:"$0.00"}];
  @Input() sizeType : 'withoutDescription'|'withDescription' = 'withDescription';
  @Output() onselect : EventEmitter<any>= new EventEmitter<any>();
 

  ngAfterViewInit(): void {
    let liElements = this.document.querySelectorAll('li');
    let filterLiElement: HTMLLIElement[] = [];
    liElements.forEach(item=>{
      if(item.parentElement?.id == 'rds-delivery'){
        filterLiElement.push(item);

      }
    })




    filterLiElement.forEach(item=>{
      item.addEventListener('click', function handleClick(event){
        filterLiElement.forEach(item1=>{
          let a = item1.querySelector('.checkbox');
          console.log(a);
          if(item1 == item){
            item1.classList.remove('border');
            item1.classList.add('border-color');
            
            a.classList.remove('display-none');
            a.classList.add('display-done')
          }
          else{
            item1.classList.remove('border-color');
            item1.classList.add('border');
            a.classList.remove('display-done');
            a.classList.add('display-none')
          }
        })
      })
    })
  }
  onclick(data:any){
    this.onselect.emit(data);
  }
  continue(){

  }
  back(){
    
  }

}
