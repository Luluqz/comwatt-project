import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import * as i18nIsoCountries from 'i18n-iso-countries';

declare var require: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  countries = require("i18n-iso-countries");
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/fr.json"));
  }

  public onInputQuantityChange(ev: any): void {
    this.quantity = Number(ev.target.value);
  }

  public sendCartObj(cartObj: Product, quantity: number): void {
    this.cartService.updateCart(cartObj, quantity)
  }

}
