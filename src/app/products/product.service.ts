import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, of as observableOf} from 'rxjs';
import * as _ from 'lodash';
import {Product} from './product.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class ProductService {
  private itemsSubject = new BehaviorSubject([]);
  // not a fan of this, just mimicking tutorial, FOR NOW
  public products$: Observable<Product[]> = this.itemsSubject.asObservable();

  loadProducts() {
    const hardcodedProducts = [
      new Product({id: 1, name: 'Widget', description: 'It is a Widget', quantity: 100, price: 9.99}),
      new Product({id: 2, name: 'Doohicky', description: 'It is a Doohicky', quantity: 10, price: 99.99}),
      new Product({id: 3, name: 'Thingamajig', description: 'It is a Thingamajig', quantity: 50, price: 19.99}),
    ];

    this.itemsSubject.next(_.cloneDeep(hardcodedProducts));
  }

  add(newItem: Product) {
    const items = this.cloneItems();
    items.push(_.cloneDeep(newItem));

    // publish
    this.publish(items);
  }

  delete(deletedItem: Product) {
    // pretty sure this is jacked because he doesn't persist the deletion to the BehaviorSubject
    //  won't the next component to subscribe get the list WITH the deleted item in it?
    const items = this.cloneItems();
    _.remove(items, item => item.id === deletedItem.id);

    this.itemsSubject.next(items);
  }

  publish(items) {
    this.itemsSubject.next(items);
  }

  private cloneItems() {
    return _.cloneDeep(this.itemsSubject.value);
  }
}
