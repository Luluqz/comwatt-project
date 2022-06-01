import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductHttpService } from 'src/app/service/product-http.service';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product$: Observable<Product>;
  public product: Product;
  public empty: string;

  constructor(  
    private activatedRoute: ActivatedRoute,
    private productHttpService: ProductHttpService
  ) { }

  ngOnInit(): void {
    this.product$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productHttpService.getOne(params.get('id')!))
    );
    this.product$.subscribe({
      next: (product: Product) => this.product = product,
      error: (error) => console.log(error)
    })
  }

}
