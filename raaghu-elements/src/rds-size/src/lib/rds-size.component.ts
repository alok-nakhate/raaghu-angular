import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'rds-size',
  templateUrl: './rds-size.component.html',
  styleUrls: ['./rds-size.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsSizeComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  
  @Input() sizeData = [{value: 'XS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'}];
  @Input() sizeDataWithDescription = [ { value: '15L', description: "Perfect for a resonable amount of snacks" }, { value: '20L', description: "Enough room for a serious amount of snacks" }];
  @Input() sizeType : 'withoutDescription'|'withDescription' = 'withDescription';
  @Output() onselect : EventEmitter<any>= new EventEmitter<any>();
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let liElements = this.document.querySelectorAll('li');
    let filterLiElement: HTMLLIElement[] = [];
    liElements.forEach(item=>{
      if(item.parentElement?.id == 'rds-size'){
        filterLiElement.push(item);
      }
    })


    filterLiElement.forEach(item=>{
      item.addEventListener('click', function handleClick(event){
        filterLiElement.forEach(item1=>{
          if(item1 == item){
            item1.classList.remove('border');
            item1.classList.add('border-color');
          }
          else{
            item1.classList.remove('border-color');
            item1.classList.add('border');
          }
        })
      })
    })
  }
  onclick(data:any){
    this.onselect.emit(data);
  }
}
