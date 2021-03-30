import { Injectable } from '@angular/core' ;
import { Product } from './product';
@Injectable({
providedIn: 'root'
})
export class BackendService {
constructor() {}
getProducts(): Product[] {
    [
    {
    name: 'ส้มโอ',
    price: 111
    },
    {
    name: 'แตงโม',
    price: 222
    },
    {
    name: 'มะพร้าวนํ้าหอม',
    price: 333
    }
    ];
 return [];
 }
getProductById (productId: number): Product {
  
 return;
}
}