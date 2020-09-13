import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CategoryType } from "../../models/ProductCategory.model"
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  target_ProductCategory_Id(CatId: number) {
    return this.http.get<CategoryType>(`${this.url}/ProductCategory/${CatId}`)
  }

  S_get_ProductCategory(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(`${this.url}/ProductCategory`)
  }

  S_Post_ProductCategory(Dt: CategoryType): Observable<CategoryType[]> {
    return this.http.post<CategoryType[]>(`${this.url}/ProductCategory`, Dt)
  }

  S_Update_ProductCategory(Dt: CategoryType): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<number>(`${this.url}/ProductCategory/${Dt.id}`, Dt, options)
  }
  S_Delete_ProductCategory(Dt: CategoryType): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.delete<number>(`${this.url}/ProductCategory/` + Dt, options)
  }
}
