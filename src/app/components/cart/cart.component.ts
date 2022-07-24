import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectedProducts } from 'src/app/models/selected-products.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedProducts: SelectedProducts[] = [];
  cartTotal: number = 0;
  productItemAmount: number = 1;

  // properties to get data from the customer Form
  customerFullName: string = "";
  cartGrandTotal: number = 0;

  myForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]{3,}(?: [a-zA-Z]*){0,2}$')]),
    address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[#.0-9a-zA-Z ,-]+$')]),
    ccNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]+$')]),
  })


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    this.cartService.getProductData().subscribe((products) => {
      this.selectedProducts = products;
    });
    this.cartTotal = this.cartService.grandTotal;
    this.cartGrandTotal = this.cartService.grandTotal;

  }


  onChangeAmount(event: any) {
    const proId = event.target.id.split("-")[1];
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
    const proId = event.target.id.split("-")[1];
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

  checkFormValidators(event: any) {
    const fullNameError = document.getElementById("fullNameError");
    if (this.myForm.controls.fullName.invalid) {
      window.alert("Please enter a valid full name (min 3 charachters)");

      (fullNameError as HTMLElement).style.display = "block";
    } else {
      (fullNameError as HTMLElement).style.display = "none";

    }

    const addressError = document.getElementById("addressError");
    if (this.myForm.controls.address.invalid) {
      window.alert("Please enter a valid address (min 6 charachters)");
      (addressError as HTMLElement).style.display = "block";
    } else {
      (addressError as HTMLElement).style.display = "none";
    }

    const ccError = document.getElementById("ccError");
    if (this.myForm.controls.ccNumber.invalid) {
      window.alert("Please enter a valid credit card number (16-digit number)");
      (ccError as HTMLElement).style.display = "block";
    } else {
      (ccError as HTMLElement).style.display = "none";
    }

    if (this.myForm.invalid) {
      event.preventDefault();
      console.log("invalid Form")
    } else {
      this.confirmCart(event);
    }

  }


  confirmCart(event: any) {
    const custName :string = this.myForm.get('fullName')?.value?? "";
    this.cartService.confrimCustomerForm(custName, this.cartGrandTotal);

    // event.currentTarget.submit();
    console.log("Submited");
    this.router.navigateByUrl('/confirmation');
  }


}
