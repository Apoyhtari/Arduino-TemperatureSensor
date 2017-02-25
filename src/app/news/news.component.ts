import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewChecked {
  items;
  webView;
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
