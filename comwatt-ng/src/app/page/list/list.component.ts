import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/service/product-http.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productHttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.productHttpService.getAll().subscribe((products: Product[]) => {
      this.products = products.sort((a, b) => a.title.localeCompare(b.title))
    })
  }

}
