import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyUserServService {

  constructor(private http: HttpClient) { }

 //Get IP Adress using http://freegeoip.net/json/?callback
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
}

