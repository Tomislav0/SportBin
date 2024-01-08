import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryDTO } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string
  ) {}

  public getEventCategories(): Observable<ICategoryDTO[]> {
    return this.http.get<any>(this.baseUrl + 'category');
  }

  public getCategoryById(categoryId: string): Observable<ICategoryDTO> {
    return this.http.get<any>(this.baseUrl + `category/${categoryId}`);
  }

  public addCategory(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'category', data);
  }

  public deleteCategory(categoryId: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `category/${categoryId}`);
  }
}
