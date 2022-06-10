import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cart, CartObj } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  cartObj$ = new Subject<any>();

  constructor() { }

  getCartObj(): Observable<any> {
    return this.cartObj$.asObservable();
  }

  updateCart(obj: Product, quantity: number): void {
    const cartObj: CartObj = {...obj, quantity}
    this.cartObj$.next(cartObj);
  }
}
