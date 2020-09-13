import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryType } from '../../models/ProductCategory.model';

@Injectable({
  providedIn: 'root'
})
export class GlobleProductCategoryService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  S_Get_Product_Category(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(`${this.url}/ProductCategory`)
  }
}
