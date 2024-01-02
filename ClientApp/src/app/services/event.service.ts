import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EventDTO, ICategoryDTO, IEventDTO } from "../models/DTOs/EventDTO";

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

	public getEventCategories(): Observable<ICategoryDTO[]> {
		const categories: ICategoryDTO[] = [
			{
				name: "Odbojka",
				categoryId: "7b9bd320-4e1c-4e6b-a7e8-8bc3a4d05a0d",
			},
			{
				name: "Rukomet",
				categoryId: "f19b2a47-9a2c-43e1-8ea3-65af0a112358",
			},
			{
				name: "Kosarka",
				categoryId: "6c2a0e5f-8683-4d85-9b16-3017a39b0c4f",
			},
			{
				name: "Nogomet",
				categoryId: "d16db004-03ac-4a41-94d4-9e6c4f750d7e",
			},
			{
				name: "Yu-Gi-Oh",
				categoryId: "a7c2c19a-9cf2-465f-8a36-2b8d07bf8a09",
			},
			{
				name: "Veslanje",
				categoryId: "21f43a8d-eb89-47fe-8e9f-46e5931ac462",
			},
			{ name: "Šah", categoryId: "f8155912-62fb-4c34-8d2e-54d9b783f15e" },
			{
				name: "Egzistencijska Kriza",
				categoryId: "e5cd875c-c430-4f69-865a-217f8e5337a7",
			},
		];

		return of(categories);
	}
}
