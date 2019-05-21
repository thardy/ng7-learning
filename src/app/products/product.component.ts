import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';
import {Subject} from 'rxjs/internal/Subject';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  product: Product;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe((params) => {
        if (+params['id']) {
          this.product = this.productService.getById(+params['id']);
        }
      });



  }

}
