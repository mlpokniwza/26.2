import { Component, OnInit, ViewChild } from '@angular/core' ;
import { ProductListComponent } from './product-list/product-list.component' ;
import { BackendService } from './backend.service' ;
@Component({
selector: 'app-root',
templateUrl: './app.component.html' ,
styles: []
})
export class AppComponent implements OnInit {
constructor(private backendService: BackendService) {}
 @ViewChild('productList')
productList: ProductListComponent ;
ngOnInit(): void {
 this.productList.products = this.backendService.getProducts();
 }
}