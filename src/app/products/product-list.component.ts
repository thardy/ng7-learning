import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  // @Input() products: Product[];
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }

  ngOnInit() {
    // this.productService.products$
    //   .subscribe((products) => {
    //     this.products = products;
    //   });
  }

}
