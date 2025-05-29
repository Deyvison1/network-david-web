import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/dto/product.dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../models/dto/credentials';
import { User } from '../models/dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url: string = environment.urlApi.concat('/api/usuario');

  constructor(
    private http: HttpClient
  ) { }

  getToken(userAuth: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.post<CredenciaisDTO>(`${this.url}/auth`, userAuth);
  }
  
  insertUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
