import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDTO } from '../models/DTOs/EventDTO';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string
  ) {}

  public getAllEvents(): Observable<EventDTO[]> {
    return this.http.get<EventDTO[]>(this.baseUrl + 'event/list');
  }
}
