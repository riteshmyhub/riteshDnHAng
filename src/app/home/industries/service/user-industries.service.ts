import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { industries } from '../../models/industries.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIndustriesService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  S_get_Industries(): Observable<industries[]> {
    return this.http.get<industries[]>(`${this.url}/industries`)
  }
  s_get_Industry_by_id(EachId: number) {
    return this.http.get(`${this.url}/industries/${EachId}`)
  }
  
}
