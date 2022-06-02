import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Cart, CartObj } from './../../model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

import { CartComponent } from './cart.component';

fdescribe('CartComponent', () => {
  let service: CartService;
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  //remarque après coup: l'implémentation de la logique cart aurait du être plus S.O.L.I.D
  //une approche TDD aurait pu le révéler plus rapidement?

  const cartMock: Cart = {
    "items":[
      {
      "id":52,
      "title":"Titre1",
      "country":"IOT",
      "year":new Date("1975-11-20T00:00:00+00:00"),
      "originalTitle":"Original1",
      "description":"desc1",
      "genre":["HardSF"],
      "ranking":10,
      "price":19.4,
      "productType":"e_book",
      "quantity":1
      },
      {
      "id":88,
      "title":"Titre2",
      "country":"GNQ",
      "year":new Date("2016-08-14T00:00:00+00:00"),
      "originalTitle":"Original2",
      "description":"desc2",
      "genre":["SteamPunk","Fantasy"],
      "ranking":5,
      "price":18.8,
      "productType":"paper_book",
      "quantity":2
    }
    ],
    "totalQuantity":3,
    "totalPrice":57
  };

  const items: Product[] = [
    {
      "id":52,
      "title":"Titre1",
      "country":"IOT",
      "year":new Date("1975-11-20T00:00:00+00:00"),
      "originalTitle":"Original1",
      "description":"desc1",
      "genre":["HardSF"],
      "ranking":10,
      "price":19.4,
      "productType":"e_book"
      },
      {
      "id":88,
      "title":"Titre2",
      "country":"GNQ",
      "year":new Date("2016-08-14T00:00:00+00:00"),
      "originalTitle":"Original2",
      "description":"desc2",
      "genre":["SteamPunk","Fantasy"],
      "ranking":5,
      "price":18.8,
      "productType":"paper_book"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [AppModule],
      providers: [CartService]
    })
    .compileComponents();;
  });

  beforeEach(() => {
    service = TestBed.get(CartService)
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('add 1 item in empty cart', () => {

    beforeEach(() => {
      component.cart.items = [];
      component.cart.totalPrice = 0;
      component.cart.totalQuantity = 0;
      service.updateCart((items[0]), 1);
    })

    it('cart should have 1 totalQuantity', ()=>{
      expect(component.cart.items.length).toEqual(1);
      expect(component.cart.totalQuantity).toEqual(1);
    })
    it('cart should have 19.4 totalPrice', ()=>{
      expect(component.cart.totalPrice).toEqual(19.4);
    })
    it('cart should have 1 item with correct id', ()=>{
      expect(component.cart.items[0].id).toEqual(52);
    })

  })

  describe('remove 1 item from cart', () => {

    beforeEach(() => {
      component.cart.items = [cartMock.items[0]];
      component.cart.totalPrice = 19.4;
      component.cart.totalQuantity = 1;
      component.deleteCartObj(cartMock.items[0]);
    })

    it('cart should have 0 totalQuantity', ()=>{
      expect(component.cart.items.length).toEqual(0);
      expect(component.cart.totalQuantity).toEqual(0);
    })
    it('cart should have 0 totalPrice', ()=>{
      expect(component.cart.totalPrice).toEqual(0);
    })
    it('cart should have 1 item with correct id', ()=> {
      expect(component.cart.items[0]).toBeUndefined();
    })

  })

  describe('add 2 identical item in empty cart', () => {

    beforeEach(() => {
      component.cart.items = [];
      component.cart.totalPrice = 0;
      component.cart.totalQuantity = 0;
      service.updateCart(items[0], 2);
    })

    it('cart should have 1 totalQuantity', ()=>{
      expect(component.cart.items.length).toEqual(1);
      expect(component.cart.totalQuantity).toEqual(2);
    })
    it('cart should have 38.8 totalPrice', ()=>{
      expect(component.cart.totalPrice).toEqual(38.8);
    })
    it('cart should have 2 item with correct id', ()=>{
      expect(component.cart.items[0].id).toEqual(52);
      expect(component.cart.items[0].quantity).toEqual(2)
    })

  })

  describe('add 2 different item in empty cart', () => {

    beforeEach(() => {
      component.cart.items = [];
      component.cart.totalPrice = 0;
      component.cart.totalQuantity = 0;
      service.updateCart(items[0], 1);
      service.updateCart(items[1], 1);
    })

    it('cart should have 1 totalQuantity', ()=>{
      expect(component.cart.items.length).toEqual(2);
      expect(component.cart.totalQuantity).toEqual(2);
    })
    it('cart should have 38.2 totalPrice', ()=>{
      expect(component.cart.totalPrice).toEqual(38.2);
    })
    it('cart should have 1 item with correct id', ()=>{
      expect(component.cart.items[0].id).toEqual(52);
      expect(component.cart.items[1].id).toEqual(88);
      expect(component.cart.items[0].quantity).toEqual(1)
      expect(component.cart.items[1].quantity).toEqual(1)
    })

  })

  describe('getTotalObj', () => {

      it('should have 3 items', () => {
          expect(component.getTotalObj(cartMock.items)).toEqual(3);
      });

  });

  describe('getTotalPrice', () => {

    it('should have 57€', () => {
        expect(component.getTotalPrice(cartMock.items)).toEqual(57);
    });

});


});
