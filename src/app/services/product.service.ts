import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDTO } from '../models/dto/product.dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.urlApi.concat('/product');

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllProductsPage(pageIndex: number, pageSize: number): Observable<HttpResponse<ProductDTO[]>> {
    return this.http.get<ProductDTO[]>(`${this.url}?page=${pageIndex}&size=${pageSize}`, { observe: 'response' });
  }

  getAllProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${this.url}/get-all`);
  }

  insertProduct(product: ProductDTO): Observable<ProductDTO> {
    return this.http.post<ProductDTO>(`${this.url}`, product);
  }

  editProduct(product: ProductDTO): Observable<ProductDTO> {
    return this.http.put<ProductDTO>(`${this.url}`, product);
  }

  deleteProduct(productId: number): Observable<ProductDTO> {
    return this.http.delete<ProductDTO>(`${this.url}/${productId}`);
  }
}
