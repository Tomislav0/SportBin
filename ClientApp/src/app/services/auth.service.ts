import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string
  ) {}
  public authorizedSubject = new Subject<boolean>();

  public login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'account/login', data);
  }

  public register(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'account/register', data);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'admin/users');
  }

  public deleteAdmin(userId: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `admin/user/${userId}`);
  }
}
