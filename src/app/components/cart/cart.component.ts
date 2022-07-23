import { Component, OnInit } from '@angular/core';
import { SelectedProducts } from 'src/app/models/selected-products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedProducts: SelectedProducts[] = [];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProductData().subscribe((products) => {
      this.selectedProducts = products;
    });
  }



}
