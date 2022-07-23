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
  // productsDetails:Product[] = [];
  // products$:Observable<Product[]>;

  constructor(private productService:ProductService) {
    // this.products$ = this.productService.getProducts2();
    // this.productService.loadTProducts();
    // this.products$ = this.productService.getProducts();
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.products = res;
    });

    // this.productService.getProductDetails(1).subscribe(res=>{
    //   this.productsDetails = res;
    // });


  }



}
