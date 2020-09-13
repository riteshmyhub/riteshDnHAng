import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { industries } from '../../models/industries.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IndustriesService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  target_Industries_id(IndusID: number) {
    return this.http.get<industries>(`${this.baseUrl}/industries/${IndusID}`)
  }
  s_get_Industries(): Observable<industries[]> {
    return this.http.get<industries[]>(`${this.baseUrl}/industries`)
  }
  s_post_Industries(Dt: industries): Observable<industries[]> {
    return this.http.post<industries[]>(`${this.baseUrl}/industries`, Dt)
  }
  s_update_Industries(Dt: industries): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<number>(`${this.baseUrl}/industries/${Dt.id}`, Dt, options)
  }

}

