import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';

import {HttpService} from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  items: any[];
  temp:any[];
  pieChartOptions = {
    chartType: 'Gauge',
    dataTable: [
      ['label', 'value'],
      ['', 2],
    ],
    options: {'title': 'Tasks'},
  };
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {

    this.httpService.getCurrentData()
      .subscribe(
        data =>{
          this.items = data
          this.temp = this.items.map(Number)
          this.pieChartOptions.dataTable[1][1] = this.temp[0]
        }
      );
    // TODO: implement updating of the chart
    console.log(this.pieChartOptions);
  }

}
