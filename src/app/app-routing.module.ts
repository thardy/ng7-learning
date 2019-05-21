import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list.component';
import {ProductComponent} from './products/product.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  // {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
