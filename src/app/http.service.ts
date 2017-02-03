import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/RX';
@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  getCurrentData() {
    return this.http.get('http://localhost:3000/temp')
      .map((response: Response) => response.json());
  }
  getChartData () {
    return this.http.get('http://localhost:3000/graphData')
      .map((response: Response) => response.json());
  }
  getChartDate () {
    return this.http.get('http://localhost:3000/graphDate')
      .map((response: Response) => response.json());
  }
  getAppSettings() {
    return this.http.get('http://localhost:3000/appsettings')
      .map((response: Response) => response.json());
  }
}
