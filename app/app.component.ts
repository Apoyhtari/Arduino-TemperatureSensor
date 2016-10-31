import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HeroService }       from './app.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'temperature',
  templateUrl: './views/tempView.html',
  providers: [HeroService]
})
export class AppComponent {
    result: string;
    constructor(private http: HeroService) {
    }
    getData() {
      this.http.getCurrentTemp()
      .subscribe(
      data => this.result = JSON.stringify(data),
      error => alert(error),
       () => console.log(this.result);
      );
    }
}
