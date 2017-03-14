import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-computer-stats',
  templateUrl: './computer-stats.component.html',
  styleUrls: ['./computer-stats.component.css']
})
export class ComputerStatsComponent implements OnInit {
  items;
  freeMemory;
  totalMemory;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    setInterval(() =>this.httpService.getTotalMemory()
      .subscribe(
        (data => {
            this.items = data
            this.totalMemory = this.items.map(String)
          }
        )), 5000);

    setInterval(() => this.httpService.getFreeMemory()
      .subscribe(
        (data => {
          this.freeMemory = data
          console.log(this.freeMemory);
        })), 5000);
  }

}
