import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCaseService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  
}
