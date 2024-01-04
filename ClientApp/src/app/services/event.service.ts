import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventDTO, ICategoryDTO, IEventDTO } from '../models/DTOs/EventDTO';

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

  public getEventById(eventId: string): Observable<EventDTO> {
    return this.http.get<EventDTO>(this.baseUrl + `event/${eventId}`);
  }

  public postEvent(newEvent: IEventDTO) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<EventDTO>(
      this.baseUrl + `event`,
      newEvent,
      httpOptions
    );
  }
}
