import { Component, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RssfeedService } from './rssfeed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedFeeds;
  pages = [];

  constructor(private rssFeedService: RssfeedService ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.rssFeedService.getFeeds()
    .subscribe(res => {
      console.log(res);
      this.storedFeeds = res;
      for(let i = 0; i < this.storedFeeds.item.length / 5; i++) {
        this.pages.push(i);
      }
    });
  }
}
