import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/filter';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:Product[] = [];
  //  product2:Product[] = [];
  private product$ = new BehaviorSubject<Product[]>([]) ;

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{

    return this.http.get<Product[]>('assets/data/data.json');

  }
  // getProductsById():Observable<Product[]>{

  //   return this.http.get<Product[]>('assets/data/data.json');

  // }

}
