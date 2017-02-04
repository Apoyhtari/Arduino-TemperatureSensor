import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  items;
  constructor(private httpService: HttpService) {
  }
  ngOnInit(){
    this.httpService.getAppSettings()
      .subscribe(
        (data => {
          this.items = data
          console.log("something again");
          console.log(this.items);
        }));
  }
}
