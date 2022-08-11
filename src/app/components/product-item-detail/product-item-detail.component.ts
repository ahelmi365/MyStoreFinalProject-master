import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit, OnDestroy {

  itemId: number = 0;
  productItemAmount: number = 1;
  @Input() product: Product[] = [];
  sub: Subscription;

  constructor(private cartService: CartService, private productService: ProductService, private activatedRoute: ActivatedRoute) {


    this.sub = this.activatedRoute.params.subscribe(params => {
      this.itemId = params['id'];
    });

  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {
      this.product = res;
    });

  }


  onAddToCart(event: any) {
    // window.alert("Item added to the cart with amount: " + this.productItemAmount);
    const product = this.product.find((p) => p.id == this.itemId);
    if (!product) {
      return;
    }

    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description: product.description,
      amount: this.productItemAmount
    });

    event.target.classList.add("btn-success");
    event.target.innerHTML = "Added to cart";
  }

  updateAmount(event: any) {

    console.log("Amout updated");
    const addButton = <HTMLInputElement>document.getElementById("btn-" + event.product.id)
    addButton.classList.remove("btn-success");
    addButton.innerHTML = "Add to cart";
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
