import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { DailyInfo } from '../models/daily-info';

@Injectable({
  providedIn: 'root'
})
export class DailyInfoService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'http://localhost:3000/api/dailyInfo/';
  private endpoint = 'https://soo-project-angular.herokuapp.com/api/dailyInfo/';

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

  public addDailyInfo(dailyInfo: DailyInfo): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint, dailyInfo, this.httpOptions);
  }
}
