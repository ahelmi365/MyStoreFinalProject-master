// import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cardDataList: any = [];
  productList = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }

  getProductData() {
    return this.productList.asObservable()
  }

  setProduct(Product: any) {
    this.cardDataList.push(...Product);
    this.productList.next(Product);
  }

  // addToCart(product: any) {
  //   this.cardDataList.push(product);
  //   this.productList.next(this.cardDataList);
  //   // this.getTotalAmount();

  //   console.log(this.cardDataList);
  //   // console.log(this.productList);
  // }


  addToCart(product: any) {

    const found: boolean = this.cardDataList.some((el: any) => el.id === product.id);
    if (found) {
      console.log("This item is found");
      this.cardDataList.forEach((element: any) => {
        if (element.id == product.id) {
          element.amount = product.amount;
          this.productList.next(this.cardDataList);
        } else {
          // continue;
        }

      });

    } else {
      console.log("This item is Not found");
      this.cardDataList.push(product);
      this.productList.next(this.cardDataList);

    }

    // this.cardDataList.push(product);
    // this.productList.next(this.cardDataList);


    // this.cardDataList.map((prod: any, index: any) => {
    //   // console.log(product.id)
    //   console.log(prod[index])
    //   // console.log(product.id == prod[index].id)
    //   console.log("------------------------")

    //   // this.cardDataList[index].amount = product.amount;
    //   // this.productList.next(this.cardDataList);

    // })

  }

  getTotalAmount() {
    let grandTotal = 0;
    this.cardDataList.map((prod: any) => {
      grandTotal = +prod.total;
    });
  }

  removeCartData(product: any) {
    this.cardDataList.map((prod: any, index: any) => {
      if (product.id == prod.id) {
        this.cardDataList.splice(index, 1);
      }
    })
  }

  removeAllCart() {
    this.cardDataList = [];
    this.productList.next(this.cardDataList);
  }



}
