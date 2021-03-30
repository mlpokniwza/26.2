import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackendService } from './backend.service';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [BrowserModule, FormsModule, CatalogModule, HomeModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
