import { LoginRequestInterface } from './../../shared/types/login-request.interface';
import { AuthResponseInterface } from './../types/auth-response.interface';
import { environment } from './../../../environments/environment.prod';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}users`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}users/login`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}user`;
    return this.http.get(url).pipe(map(this.getUser));
  }
}
