import {Component, OnInit} from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng7-learning';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.loadProducts();
  }
}
