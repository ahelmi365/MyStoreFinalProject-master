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
  cartTotal: number = 0;
  productItemAmount: number = 1;



  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProductData().subscribe((products) => {
      this.selectedProducts = products;
    });
    this.cartTotal = this.cartService.grandTotal;

  }


  // onChangeAmount(event: any) {
  //   // this.cartService.addToCart(this.selectedProducts[0]);
  //   const selectedProduct= this.selectedProducts;
  //   if (!selectedProduct){
  //     return
  //   }
  //   console.log(selectedProduct.id);
  //   // console.log(this.selectedProducts);

  // }

  onChangeAmount(event: any) {
    console.log(event.target.id);
    console.log("*********************************");
    const proId = event.target.id.split("-")[1];
    console.log(typeof proId);

    const newAmount = (document.getElementById(event.target.id) as HTMLInputElement).value;
    console.log(newAmount);

    this.cartService.addToCart({
      id: +proId,
      name: "",
      price: 0,
      url: "",
      description: "",
      amount: +newAmount
    });
    this.cartTotal = this.cartService.grandTotal;
  }

  removeCartItem(event: any) {
    console.log(event.target.id);
    const proId = event.target.id.split("-")[1];
    console.log(proId);
    this.cartService.removeCartData({
      id: +proId,
      name: "",
      price: 0,
      url: "",
      description: "",
      amount: 0
    });

    this.cartTotal = this.cartService.grandTotal;
  }











}
