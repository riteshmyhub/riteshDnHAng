import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blogs } from '../../models/blogs.model';

@Injectable({
  providedIn: 'root'
})
export class GetBlogsService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  // get blogs method
  s_get_blogs(): Observable<blogs[]> {
    return this.http.get<blogs[]>(`${this.baseUrl}/blogs`)
  }
  s_get_blogs_by_id(id: number) {
    return this.http.get(`${this.baseUrl}/blogs/${id}`)
  }
}
