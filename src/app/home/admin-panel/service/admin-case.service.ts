import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { casetype } from '../../models/casetype.model';

@Injectable({
  providedIn: 'root'
})
export class AdminCaseService {
  Url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  S_get_industries_api(): Observable<casetype[]> {
    return this.http.get<casetype[]>(`${this.Url}/industries`)
  }
  // get
  S_get_selected_case(case_Selected_Id: string): Observable<any> {
    let parmar1 = new HttpParams().set('industryId', case_Selected_Id);
    return this.http.get<casetype>(`${this.Url}/caseStudy`, { params: parmar1 })
  }
  // post
  S_post_selected_case(Dt: casetype): Observable<casetype[]> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<casetype[]>(`${this.Url}/caseStudy`, Dt, options)
  }
  // update
  s_update_Industries(Dt: casetype): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<number>(`${this.Url}/caseStudy/${Dt.id}`, Dt, options)
  }
  S_get_case_id(EachID: number) {
    return this.http.get<casetype>(`${this.Url}/caseStudy/${EachID}`)
  }
  // delete 
  s_delete_case(Dt: casetype): Observable<number>{
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.delete<number>(`${this.Url}/caseStudy/${Dt}`, options)
  }
}
