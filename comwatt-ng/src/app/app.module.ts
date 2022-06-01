import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { ListComponent } from './page/list/list.component';
import { DetailComponent } from './page/detail/detail.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { ETypePipe } from './pipe/e-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ListComponent,
    DetailComponent,
    NotFoundComponent,
    HeaderComponent,
    ProductComponent,
    ETypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
