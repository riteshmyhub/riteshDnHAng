import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIndusService {
  Url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  S_get_industries() {

  }
  S_get_caseStudy(): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}/industries`);
  }
  S_get_selected_case(case_Selected_Id: string): Observable<any> {
    let parmar1 = new HttpParams().set('industryId', case_Selected_Id);
    return this.http.get(`${this.Url}/caseStudy`, { params: parmar1 });
  }
  S_get_case_id(EachID: number) {
   return this.http.get(`${this.Url}/caseStudy/${EachID}`)
  }
}

