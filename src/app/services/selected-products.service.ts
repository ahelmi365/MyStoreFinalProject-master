import { SelectedProducts } from 'src/app/models/selected-products.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SelectedProductsService {

  constructor(private http: HttpClient) { }

  // getSelectedProducts():Observable<SelectedProducts>{
  //   return this.http.get<SelectedProducts>(this.SelectedProducts)
  // }
}
