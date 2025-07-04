import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/dto/category.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlApiCategory = environment.urlApi.concat('/api/category');

  constructor(private http: HttpClient) { }

  getAllCategoryPage(pageIndex: number, pageSize: number): Observable<HttpResponse<Category[]>> {
    return this.http.get<Category[]>(`${this.urlApiCategory}?page=${pageIndex}&size=${pageSize}`, { observe: 'response' });
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApiCategory}/get-all`);
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
