import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";

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
    this.httpService.getTotalMemory()
      .subscribe(
        (data => {
            this.items = data
            this.totalMemory = this.items.map(String)
            console.log("total: ", this.totalMemory)
          }
        ));

    this.httpService.getFreeMemory()
      .subscribe(
        (data => {
          this.freeMemory = data
          console.log("Freeeeee!");
          console.log(this.freeMemory);
        }));
  }

}
