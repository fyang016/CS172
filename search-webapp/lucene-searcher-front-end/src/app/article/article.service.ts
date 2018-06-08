import { Injectable } from '@angular/core';
import { Article } from './article';
// import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Operator } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getIpAddress() {
      return this.http
            .get('https://freegeoip.net/json/?callback')
            .map(response => response || {})
            .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse):
    Observable<any> {
      //Log error in the browser console
      console.error('observable error: ', error);

      return Observable.throw(error);
  }
  getArticles(query: string="UCR"):  Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + '/api/articles?query=' + query);
  }
}
