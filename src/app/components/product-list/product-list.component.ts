import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];
  productsTotalInCart:number=0;
  productsSubscription: Subscription = new Subscription();


  constructor(private productService:ProductService, protected cartService: CartService) {
    // this.productsSubscription= Subscription.EMPTY;
   }

  ngOnInit(): void {
    this.productsSubscription = this.productService.getProducts().subscribe(res=>{
      this.products = res;
    });

  }


  incrementNumberOfProductsinCart(val:number){
    this.productsTotalInCart = val;
  }

  ngOnDestroy(){
    if (this.productsSubscription){
      this.productsSubscription.unsubscribe()
    }
  }



}
