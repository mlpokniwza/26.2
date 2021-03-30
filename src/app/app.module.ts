import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackendService } from './backend.service';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CatalogModule } from './catalog/catalog.module';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductListComponent
  },
  {
  path: 'products/:id',
  component: ProductDetailComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    HomeComponent,
    LoginComponent ,
    PageNotFoundComponent

  ],
  imports: [BrowserModule, FormsModule, CatalogModule, HomeModule , RouterModule.forRoot(routes)],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
