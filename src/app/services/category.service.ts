import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/dto/category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlApiCategory = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  getAllCategory(pageIndex: number, pageSize: number): Observable<HttpResponse<Category[]>> {
    return this.http.get<Category[]>(`${this.urlApiCategory}?page=${pageIndex}&size=${pageSize}`, { observe: 'response' });
  }

  insertCategory(category: Category) {
    return this.http.post<Category>(`${this.urlApiCategory}`, category);
  }

  editCategory(category: Category) {
    return this.http.put<Category>(`${this.urlApiCategory}`, category);
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(`${this.urlApiCategory}/${categoryId}`);
  }
}
