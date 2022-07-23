// import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedProducts } from '../models/selected-products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cardDataList: SelectedProducts[] = [];
  // create BehaviorSubject Observable to update other components with new changes
  private cardDataListObs = new BehaviorSubject<SelectedProducts[]>([]);
  grandTotal:number = 0;
  constructor(private http: HttpClient) { }

  getProductData() {
    return this.cardDataListObs.asObservable();
  }

  setProduct(Product: any) {
    this.cardDataList.push(...Product);
    this.cardDataListObs.next(Product);
  }

  // addToCart(product: any) {
  //   this.cardDataList.push(product);
  //   this.cardDataListObs.next(this.cardDataList);
  //   // this.getTotalAmount();

  //   console.log(this.cardDataList);
  //   // console.log(this.cardDataListObs);
  // }

  addToCart(product: SelectedProducts) {
    // check if the item is already in the Cart
    const itemFound: boolean = this.cardDataList.some(
      (el: any) => el.id === product.id);

    if (itemFound) { // if in the cart, update ethe amount only in the cardDataList array
      console.log("Found old item")
      this.cardDataList.forEach((element: any) => {
        if (element.id == product.id) {
          element.amount = product.amount;
        }
      });
    } else { // if not in the cart, push the product to the cardDataList array
      this.cardDataList.push(product);
    }
    this.cardDataListObs.next(this.cardDataList); // update the observale with the new array
    this.getTotalAmount();

  }

  getTotalAmount() {
    this.grandTotal=0;
    this.cardDataList.map((prod: any) => {
      this.grandTotal += ((+prod.amount) * (+prod.price));
      // console.log("this.grandTotal: "+ this.grandTotal)
    });

  }

  removeCartData(product: any) {
    this.cardDataList.map((prod: any, index: any) => {
      if (product.id == prod.id) {
        this.cardDataList.splice(index, 1);
      }
    });
    this.cardDataListObs.next(this.cardDataList); // update the observale with the new array
    this.getTotalAmount();
  }

  removeAllCart() {
    this.cardDataList = [];
    this.cardDataListObs.next(this.cardDataList);
  }
}
