import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  // @Input() products: Product[];
  products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.products$
      .subscribe((products) => {
        this.products = products;
      });
  }

}
