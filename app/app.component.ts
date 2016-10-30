import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: '<h1>Temperature is: {{this.result}}</h1>'
})
export class AppComponent {
	result: Object;
    constructor(http: Http) {
        this.result = {temp:[]};
        http.get('./temp').map((res: Response) => res.json()).subscribe(res => this.result = res, error => this.error = error);
    }
}
