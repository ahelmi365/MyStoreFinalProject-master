import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  cartTotal:number=0;
  customerFullName:string="";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartTotal = this.cartService.grandTotal;
    this.customerFullName= this.cartService.customerFullName;
    console.log(this.cartService.grandTotal);
  }


}
