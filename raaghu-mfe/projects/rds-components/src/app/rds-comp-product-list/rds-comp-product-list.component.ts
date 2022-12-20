import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RdsIconComponent } from '@libs/rds-icon';

@Component({
  selector: 'rds-comp-product-list',
  templateUrl: './rds-comp-product-list.component.html',
  styleUrls: ['./rds-comp-product-list.component.scss']
})
export class RdsCompProductListComponent implements OnInit {
  showLoadMore = true;

  constructor(private http: HttpClient ) { }
  // notEmptyPost = true;
  // notScrolly = true;
  // throttle = 0;
  // distance = 2;
  // page = 1;
  

  
  ngOnInit() {
    // this.loadInitPost();
    this.Items = this.productListItems.slice(0,12);
    this.showLoadMore = true;
    // this.classes = 'bg-danger'
    
  }

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() role: 'withInlinePrice' | 'simple'|'imageWithInfo' = 'withInlinePrice';
  itemList:any = [];
  recordsPerPage = 6;
  totalRecords: any;
  rating:any;
  classes!: string;
  clickColor: 'danger' | 'light' = 'light';
  changeColor= [];
  

  @Input() productListItems: any[] = [];
  @Input() productlist: any;
  Items: any[] = [];

  @Input()  itemListColor: any = [];

  @Input() itemListRating: any = [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ];

  loadInitPost(){
    // console.log(this.productListItems);

  }
  onScroll(){
    // console.log("scrolled");
    // if(this.notScrolly && this.notEmptyPost){
    //   this.show(this.productListItems)
    //   this.notScrolly = false;
    //   this.loadNextPost();
    // }
    this.Items = this.productListItems
    this.showLoadMore = false;
    


  }
  loadNextPost(){
    // this.show(this.productListItems)
    // const lastpost = this.productListItems[this.productListItems.length - 1];
    // const lastPostid = lastpost.id
    // const dataToSend = new FormData()
    // dataToSend.append('id', lastPostid)
    
  }

  


  show(productListItems: any[]) {
    throw new Error('Method not implemented.');
  }

  // favouriteProd() {
  //   if (this.clickColor == undefined || this.clickColor == 'light') {
  //     this.clickColor = 'danger';
  //   } else if (this.clickColor == 'danger') {
  //     this.clickColor = 'light';
  //   }
  // }

  // favouriteProd() {
  //   if (this.clickColor == undefined || this.clickColor == 'light') {
  //     this.clickColor = 'danger';
  //   } else if (this.clickColor == 'danger') {
  //     this.clickColor = 'light';
  //   }
  // }

  favouriteProd(itemColor: string, index: number){
    if (itemColor == 'danger') {
      this.productListItems[index].iconColor = 'dark';
      this.productListItems[index].fill = false;
    } else if (itemColor == 'dark') {
      this.productListItems[index].iconColor = 'danger';
      this.productListItems[index].fill = true;
    }
  }
  
  

  
  

}
