import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { VitalSign } from '../models/vital-sign';

@Injectable({
  providedIn: 'root'
})
export class VitalListService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'http://localhost:3000/api/vitalSign-list-Nurse/';
  private endpoint = 'https://soo-project-angular.herokuapp.com/api/vitalSign-list-Nurse/';

  //private endpoint_dailyTip = 'http://localhost:3000/api/dailyTip/';
  private endpoint_dailyTip = 'https://soo-project-angular.herokuapp.com/api/dailyTip/';

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

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getList_DailyTip(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint_dailyTip, this.httpOptions);
  }

  public addVitalSign(vital: VitalSign): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', vital, this.httpOptions);
  }

  public getVitalSign(vital: VitalSign): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + vital._id, this.httpOptions);
  }

  public editVitalSign(vital: VitalSign): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + vital._id, vital, this.httpOptions);
  }

  public deleteVitalSign(vital: VitalSign): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + vital._id, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
