import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];
  productsTotalInCart:number=0;
  constructor(private productService:ProductService) {
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.products = res;
    });

  }


  incrementNumberOfProductsinCart(val:number){
    this.productsTotalInCart = val;
  }



}
