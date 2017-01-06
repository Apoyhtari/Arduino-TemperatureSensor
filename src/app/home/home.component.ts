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
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Response )=> console.log(data)
      );
  }

}
