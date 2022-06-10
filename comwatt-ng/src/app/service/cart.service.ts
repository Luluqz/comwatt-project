import { Injectable } from '@angular/core';
import { SubjectService } from './subject.service';
import { Cart, CartObj } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private subjectService: SubjectService) { }

  public transformProductToCartObj(product: Product, quantity: number): CartObj {
    return {...product, quantity}
  }

  // public addToCart(cartObj: CartObj): void {
  //   if (!this.cart.items) this.cart.items = [];
  //   (this.cart.items && this.cart.items.some((obj) => obj.id == cartObj.id)) ? this.updateCartObj(cartObj) : this.pushCartObj(cartObj);
  // }

  // public pushCartObj(cartObj: CartObj): void {
  //   this.cart.items.push(cartObj)
  //   this.updateCart();
  // }

  // public deleteCartObj(cartObj: CartObj): void {
  //   let objIndex = this.cart.items.findIndex((obj => obj.id == cartObj.id));
  //   if (objIndex > -1) this.cart.items.splice(objIndex, 1);
  //   this.updateCart();
  // }

  // public deleteCart(): void {
  //   this.cart.items = [];
  //   this.updateCart();
  // }

  // public updateCartObj(cartObj: CartObj, fromCartPanel: boolean = false): void{
  //   let objIndex = this.cart.items.findIndex((obj => obj.id == cartObj.id));
  //   fromCartPanel ? this.cart.items[objIndex].quantity = cartObj.quantity : this.cart.items[objIndex].quantity += cartObj.quantity;
  //   this.updateCart();
  // }

  // public updateCart(): void{
  //   this.cart.totalQuantity = this.getTotalObj(this.cart.items);
  //   this.cart.totalPrice = this.getTotalPrice(this.cart.items);
  //   this.setSessionStorage(this.cart);
  // }

  public getTotalObj(cartItems: CartObj[]): Cart['totalQuantity']{
    const sum = cartItems.reduce((acc, obj) => {
      return acc + obj.quantity;
    }, 0);
    return sum;
  }

  public getTotalPrice(cartItems: CartObj[]): Cart['totalPrice']{
    // toFixed() : see javascript floating precision : https://www.w3schools.com/js/js_numbers.asp
    const sum = cartItems.reduce((acc, obj) => {
      return acc + obj.quantity * obj.price;
    }, 0).toFixed(2);
    return Number(sum);
  }

  // public onInputQuantityChange(ev: any, cartObj: CartObj): void{
  //   let quantity = Number(ev.target.value);
  //   (quantity > 0) ? this.updateCartObj(cartObj, true) : this.deleteCartObj(cartObj);
  // }

  // cookie could have ben use instead of session storage for more persistent datas
  public setSessionStorage(cart: Cart): void{
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }

  public getSessionStorage(): Cart{
    return sessionStorage.getItem('cart') === null ? null : JSON.parse(sessionStorage['cart']);
  }
}
