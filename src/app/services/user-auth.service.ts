import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { CredenciaisDTO } from '../models/dto/credentials.dto';
import { UserDTO } from '../models/dto/user.dto';
import * as jwt_decode from 'jwt-decode';
import TokenJwtDTO from '../models/dto/token-jwt.dto';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  decodedToken: TokenJwtDTO;

  url: string = environment.urlApi.concat('/api/usuario');

  constructor(private readonly http: HttpClient) {}

  getToken(userAuth: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.post<CredenciaisDTO>(`${this.url}/auth`, userAuth).pipe(
      map((resp) => {
        if (resp) {
          localStorage.setItem('token', resp.token);
          this.decodedToken = jwt_decode.jwtDecode(resp.token);
        }
        return resp;
      })
    );
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    this.decodedToken = jwt_decode.jwtDecode(token);
  }

  insertUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${this.url}`, user);
  }

  updateUser(user: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>(`${this.url}`, user);
  }

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.url}`);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  findByLogin(login: string): Observable<UserDTO> {
    return this.http.get(`${this.url}/get-login/${login}`);
  }
}
