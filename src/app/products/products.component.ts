import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  modalClass = 'desktop-modal';

  constructor() { }

  ngOnInit() {
  }

  doIt() {

  }

  setMobile() {
    this.modalClass = 'mobile-modal';
  }

  setDesktop() {
    this.modalClass = 'desktop-modal';
  }
}
