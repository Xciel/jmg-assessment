import { Injectable, } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Feed } from './models/feed/feed';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Injectable()
export class RssfeedService {

  constructor(private http: HttpClient) { }

  getFeeds() {
    return this.http.get('http://assessment.ictwerk.net/data')
      .map(result => {
        return new Feed(result);
      });
  }
  searchFeeds(term: string): Observable<Feed[]> {
    if (!term.trim()) {
      return of ([]);
    }
}}
