import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() compName:string

  products:object[] = [
    {name:'HangBag', quantity:2},
    {name:'NailPaint', quantity:3},
    {name:'HairClips', quantity:5}
  ];

  pName:String='';
  pQuantity:number=0;
  
  @Output('getProductDetails') getProduct = new EventEmitter();
  
  addProduct(value1: string, value2:number){
   
    console.log(value1,value2);
    this.pName = value1;
    this.pQuantity= value2;
    this.products.push({name:this.pName, quantity:this.pQuantity});
    this.getProduct.emit({name:this.pName, quantity:this.pQuantity});
    
  }
  

}