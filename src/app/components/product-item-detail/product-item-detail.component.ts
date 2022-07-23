import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit, OnDestroy {

  itemId: number = 0;
  products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.itemId = params['id'];
    });

  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });

  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
