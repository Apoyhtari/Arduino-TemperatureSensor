import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'temperature',
  template: './views/tempView.html'
})
export class AppComponent {
	result: Object;
    constructor(http: Http) {
        this.result = {temp:[]};
        http.get('./temp').map((res: Response) => res.json()).subscribe(res => this.result = res, error => this.error = error);
    }
    alerter() {
        console.log("click");
    }
}
