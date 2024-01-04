import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICategoryDTO } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string
  ) {}

  public getAllSubscribers(): Observable<ICategoryDTO[]> {
    return this.http.get<any>(this.baseUrl + 'subscription');
  }

  public addSubscription(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'subscription', data);
  }

  public deleteSubscription(id: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `subscription/${id}`);
  }
}
