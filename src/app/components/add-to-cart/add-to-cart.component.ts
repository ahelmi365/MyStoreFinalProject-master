import { SelectedProductsService } from './../../services/selected-products.service';
import { Component, OnInit } from '@angular/core';
import { SelectedProducts } from 'src/app/models/selected-products.model';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  enableAddToCart:boolean=false;
  countProducts:any=null;
  selectList: any[]=[
    {
      id:-1,
      value:"Please select "
    },
    {

      id: 0,
      value: 1
    },
    {
      id: 1,
      value: 2
    },
    {
      id: 2,
      value: 3
    },
    {
      id: 3,
      value: 4
    },
    {
      id: 4,
      value: 5
    },
    {
      id: 5,
      value: 6
    },
    {
      id: 6,
      value: 7
    },
    {
      id: 7,
      value: 8
    },
    {
      id: 8,
      value: 9
    },
    {
      id: 9,
      value: 10
    },
  ];

  selectedProducts:SelectedProducts[]=[];

  constructor( private selectedProductsService:SelectedProductsService) { }

  ngOnInit(): void {
    // this.selectedProductsService.getProducts().subscribe(res=>{
    //   this.products = res;
    // });


  }


  selectChange(event:any):any{
    if(+this.countProducts>0){
      this.enableAddToCart=true;
    }else{
      this.enableAddToCart=false;
    }
  }

}
