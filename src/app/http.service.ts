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
    return this.http.get('http://localhost:3000/graphs')
      .map((response: Response) => response.json());
  }
}
