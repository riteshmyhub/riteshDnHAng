import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { blogs } from '../../models/blogs.model';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreateBlogsService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  target_blog_id(BlogID: number) {
    return this.http.get<blogs>(this.baseUrl + '/' + 'blogs' + '/' + BlogID)
  }
  // post method
  s_post_blogs(Dt: blogs): Observable<blogs[]> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<blogs[]>(this.baseUrl + '/' + 'blogs', Dt, options)
  }
  // put method
  s_update_blogs(Dt: blogs): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<number>(this.baseUrl + '/' + 'blogs' + '/' + Dt.id, Dt, options)
  }
  // ______Delete method___
  s_delete_blogs(Dt: blogs): Observable<number> {
    let httpHeaders = new HttpHeaders().set('content-Types', 'application/Json');
    let options = {
      headers: httpHeaders
    };
    return this.http.delete<number>(this.baseUrl + '/' + 'blogs' + '/' + Dt, options)
  }
  // get method
  s_get_blogs(): Observable<blogs[]> {
    return this.http.get<blogs[]>(this.baseUrl + '/' + 'blogs')
  }

}
