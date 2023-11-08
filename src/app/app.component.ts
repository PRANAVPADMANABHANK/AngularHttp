import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AngularHttpRequest';

  onProductCreate(products: {pName: string, desc: string, price: number}){
    console.log(products, "productsForm")
  }
}


