import { Component, OnInit } from '@angular/core';

import {HttpService} from '../http.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [HttpService]
})
export class ChartsComponent implements OnInit {
  items: any[];
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.getChartData()
      .subscribe(
        data => this.items = data
      );
  }
}
