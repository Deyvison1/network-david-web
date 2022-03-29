import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/dto/product.dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.urlApi.concat('/product');

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsPage(pageIndex: number, pageSize: number): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(`${this.url}?page=${pageIndex}&size=${pageSize}`, { observe: 'response' });
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/get-all`);
  }

  insertProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}`, product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${productId}`);
  }
}
