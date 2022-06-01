import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Cart, CartObj } from './../../model/cart';

import { CartComponent } from './cart.component';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [AppModule]
    })
    .compileComponents();;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.cart.items = [];
    component.cart.totalPrice = 0;
    component.cart.totalQuantity = 0
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add 1 item to cart', () => {
  //   component.addToCart(cartMock.items[0]);
  //   expect(component.cart.items.length).toEqual(1);
  //   expect(component.cart.totalQuantity).toEqual(1);
  //   expect(component.cart.totalPrice).toEqual(19.4)
  // })

  describe('getTotalObj', () => {

      it('should add 1 item', () => {
          
      });

      it('should add 2 more items', () => {
          
      });

      it('should remove 1 item', () => {
          
      });

      it('should remove 2 more item', () => {
          
      });

  });

  // it('should add 1 item to cart', () => {
  //   component.addToCart(cartMock.items[0]);
  //   expect(component.cart.items.length).toEqual(1);
  // })
});
