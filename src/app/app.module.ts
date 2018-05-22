import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FeedholderComponent } from './feedholder/feedholder.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FeedComponent } from './feedholder/feed/feed.component';
import { RssfeedService } from './rssfeed.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedholderComponent,
    SearchbarComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RssfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
