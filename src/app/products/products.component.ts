import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxSmartModalComponent, NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  @ViewChild('myModal') public myModal: NgxSmartModalComponent;
  modalClass = 'desktop-modal';

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  doIt() {
    this.myModal.open();
  }

  setMobile() {
    this.modalClass = 'mobile-modal';
  }

  setDesktop() {
    this.modalClass = 'desktop-modal';
  }
}
