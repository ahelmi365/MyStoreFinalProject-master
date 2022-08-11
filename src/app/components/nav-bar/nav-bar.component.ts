import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myApptitle = "MyStore"
  constructor(protected cartService: CartService) { }

  ngOnInit(): void {
  }

}
