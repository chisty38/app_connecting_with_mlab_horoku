import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'http://localhost:3000/api/alert/';
  private endpoint = 'https://soo-project-angular.herokuapp.com/api/alert';

  private endpoint_see = 'https://soo-project-angular.herokuapp.com/api/seeAlerts/';
  //private endpoint_see = 'http://localhost:3000/api/seeAlerts/'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

  public getAlerts(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint_see, this.httpOptions);
  }

  public addAlert(alert: Alert): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint, alert, this.httpOptions);
  }

  public deleteAlert(alert: Alert): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint_see + 'delete/' + alert._id, this.httpOptions);
  }
}
