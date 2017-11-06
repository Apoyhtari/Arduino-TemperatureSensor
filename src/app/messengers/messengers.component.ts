import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-messengers',
  templateUrl: './messengers.component.html',
  styleUrls: ['./messengers.component.css']
})
export class MessengersComponent implements OnInit {
  items;
  injectScript: string;
  constructor(private httpService: HttpService) {
  }
  ngOnInit(){
    this.httpService.getAppSettings()
      .subscribe(
        (data => {
          this.items = data
          console.log("something again");
          console.log(this.items);
          this.getInjectRule();
        }));
  }
  ngAfterViewChecked() {
    console.log(document.getElementById('foo'))
    /*this.webView = document.getElementById('foo');
    this.webView.addEventListener('dom-ready', () => {
      console.log('finished loading the view');
    })*/
  }
  getInjectRule() {
    this.injectScript = './inject.js';
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].indexof('slack') >= 0){
        console.log('slack found');
        this.injectScript = '';
      } else {
        this.injectScript = './inject.js'
      }
    }
  }
}
