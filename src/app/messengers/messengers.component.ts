import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-messengers',
  templateUrl: './messengers.component.html',
  styleUrls: ['./messengers.component.css']
})
export class MessengersComponent implements OnInit {
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
  ngAfterViewChecked() {
    console.log(document.getElementById('foo'))
    /*this.webView = document.getElementById('foo');
    this.webView.addEventListener('dom-ready', () => {
      console.log('finished loading the view');
    })*/
  }
}
