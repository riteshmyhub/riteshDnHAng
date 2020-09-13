import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000"
  S_Get_Product_id(EachID: number) {
    return this.http.get<ProductType>(`${this.url}/Products/${EachID}`)
  }
  S_Get_Product_category_api(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.url}/ProductCategory`)
  }
  // get 
  S_get_selected_Product(case_Selected_Id: string): Observable<any> {
    let parmar1 = new HttpParams().set('categoryId', case_Selected_Id);
    return this.http.get<ProductType>(`${this.url}/Products`, { params: parmar1 })
  }
  S_post_Product(Dt: ProductType): Observable<ProductType[]> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<ProductType[]>(`${this.url}/Products`, Dt, options)
  }
  s_update_Product(Dt: ProductType): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<number>(`${this.url}/Products/${Dt.id}`, Dt, options)
  }
  s_delete_Product(Dt: ProductType): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.delete<number>(`${this.url}/Products/${Dt}`, options)
  }
}
