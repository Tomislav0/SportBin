import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventDTO, IEventDTO } from "../models/DTOs/EventDTO";

@Injectable({
	providedIn: "root",
})
export class EventService {
	constructor(
		public http: HttpClient,
		@Inject("BASE_URL") public baseUrl: string
	) {}

	public getAllEvents(): Observable<EventDTO[]> {
		return this.http.get<EventDTO[]>(this.baseUrl + "event/list");
	}

	public getEventById(eventId: string): Observable<EventDTO> {
		return this.http.get<EventDTO>(this.baseUrl + `event/${eventId}`);
	}

	public postEvent(newEvent: IEventDTO) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
		return this.http.post<EventDTO>(
			this.baseUrl + `event`,
			newEvent,
			httpOptions
		);
	}

	public putEvent(newEvent: IEventDTO) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
			}),
		};
		return this.http.put<EventDTO>(
			this.baseUrl + `event`,
			newEvent,
			httpOptions
		);
	}

	public deleteEvent(eventId: any): Observable<any> {
		return this.http.delete<any>(this.baseUrl + `event/${eventId}`);
	}

	public getEventsByCategory(categoryId: string): Observable<EventDTO[]> {
		return this.http.get<EventDTO[]>(
			this.baseUrl + `event/categoryEvents/${categoryId}`
		);
	}
}
