import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(public http: HttpClient) { }

  getDataExample() {
    return this.http.get<any>('https://r7.bo.yoxam.com/api/login?email=dr&password=admin');
  }

  getBouchonData() {
    return this.http.get<any>('../assets/data/data.json');
  }
}
