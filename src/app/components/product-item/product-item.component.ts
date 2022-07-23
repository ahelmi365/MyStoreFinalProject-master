import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SelectedProducts } from 'src/app/models/selected-products.model';
import { SelectedProductsService } from 'src/app/services/selected-products.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  selectedProducts: SelectedProducts[] = [];
  productItemAmount:number=1;

  constructor(private cartService: CartService, private productService: ProductService, private selectedProductsService: SelectedProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''

    }

  }


  onAddToCart() {
    window.alert("Item added to the cart with amount: " + this.productItemAmount);
    // const itemAmount = (<HTMLInputElement>document.getElementById((this.product.id).toString())).value;
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      description: this.product.description,
      amount: this.productItemAmount
    });
  }

  ngOnInit(): void {
  }


}
