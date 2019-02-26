import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
