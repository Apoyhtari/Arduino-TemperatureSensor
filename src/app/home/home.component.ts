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
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {

    this.httpService.getCurrentData()
      .subscribe(
        data => this.items = data
      );

  }

}