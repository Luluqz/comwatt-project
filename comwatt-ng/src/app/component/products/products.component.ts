import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public sendCartObj(cartObj: Product, quantity: number = 1): void {
    this.cartService.updateCart(cartObj, quantity)
  }

}
