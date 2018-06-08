import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('http://localhost:8080/api/articles')
  }
  
  getIpAddress() {
    return this.http.get('http://ipinfo.io/geo')
  }
}
