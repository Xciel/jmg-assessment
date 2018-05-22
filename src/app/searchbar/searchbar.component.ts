import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap, debounce
} from 'rxjs/operators';

import { Feed } from '../models/feed/feed';
import { RssfeedService } from '../rssfeed.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  storedFeeds$: Observable<Feed[]>;
  private searchTerms = new Subject<string>();

  constructor(private rssFeedService: RssfeedService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.storedFeeds$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.rssFeedService.searchFeeds(term))
    );
  }

}
