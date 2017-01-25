import { Component, OnInit, AfterContentInit } from '@angular/core';

import {HttpService} from '../http.service';
import any = jasmine.any;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [HttpService]
})
export class ChartsComponent implements OnInit, AfterContentInit {
  items: any[];

  constructor(private httpService: HttpService) {
  }

  mapdata = [];
  dateData = [];
  //instantiate the graph with random values
  pieChartOptions = {
  chartType: 'LineChart',
  dataTable: [
    ['temperature', 'temp per Day'],
    ['', 2],
    ['', 2],
    ['', 2],
    ['', 2],
    ['', 7]
  ],
  options: {'title': 'Tasks'},
};

  ngOnInit() {
    this.httpService.getChartDate()
      .subscribe(
        (data => {
            this.items = data
            this.mapdata = this.items.map(String)
            console.log("datedata: ", this.mapdata)
            var j = 1;
            for(j; j < this.pieChartOptions.dataTable.length; j++){
              this.pieChartOptions.dataTable[j][0] = this.mapdata[j];
            }
        }
        ));
    this.httpService.getChartData()
      .subscribe(
        (data => {
          this.items = data
          this.dateData = this.items.map(Number)
          console.log("chartdata: ", this.dateData)
          // TODO: clean up the timestamps

          //start index from 1 because we need to name the columns
          var i = 1;
          for(i; i < this.pieChartOptions.dataTable.length; i++){
            this.pieChartOptions.dataTable[i][1] = this.dateData[i];
          }
        }));

    console.log(this.pieChartOptions);
  }

  ngAfterContentInit() {
    console.log(this.mapdata)
  }

  private log() {
    console.log(this.dateData[0]);
  }

  //here we need an array of arrays



}
