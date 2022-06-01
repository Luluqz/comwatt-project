import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private baseUrl = "http://localhost:8080/api/products"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/`);
  }

  getOne(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

}
