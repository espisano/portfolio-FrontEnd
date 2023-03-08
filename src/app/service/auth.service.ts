import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtDto } from '../model/jwt-dto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/'
  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', userLogin)
  }

}
