import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  companyName:string = "Amazon";
  proName:string;
  proQuantity:number;
  flag:boolean = false;

  printDetails(res){
    this.proName = res.name;
    this.proQuantity=res.quantity;
    this.flag=true;
  }

}
