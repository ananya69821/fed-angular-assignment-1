import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products:object[] = [
    {name:'HangBag', quantity:2},
    {name:'NailPaint', quantity:3},
    {name:'HairClips', quantity:5}
  ];

  pName:String='';
  pQuantity:number=0;
  
  addProduct(value1: string, value2:number){
   
    console.log(value1,value2);
    this.pName = value1;
    this.pQuantity= value2;
    this.products.push({name:this.pName, quantity:this.pQuantity});
    
  }

}
