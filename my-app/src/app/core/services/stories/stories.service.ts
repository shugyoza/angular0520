import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable
  , of
  , BehaviorSubject
  , AsyncSubject
  , from
  , Subject } from 'rxjs';

import { News, dummyNews } from '../../../shared/models/News';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  public stories$ = new BehaviorSubject([dummyNews])

  constructor(private http: HttpClient) { }

  // method to get data from backend, and next the stories$ subject to emit data to subscriber
  fetchStories() {
    console.log('fetchStories()')
    return this.http.get<News[]>(
      `${url.api.base}${url.api.news.route}${url.api.news.path || ''}${''}`)
      .subscribe(
        (response: any) => {

          // add helper to filter bad data. temporary
          const filteredResponse = filterStories(response);
          this.stories$.next(filteredResponse);
          // this.storiesSubject$.next(response);
          console.log('fetchStories() receives: ', response, 'and filter it to: ', filteredResponse);
        },
        (error: any) => console.log('fetchStories() request fails with: ', error),
        () => console.log('fetchStories() completed')
      );
  };

  // method to insert a new data to backend, and next the stories$ subject to emit data to subscriber
  postStory(doc: News, stories: News[]) {
    // we must return here, else error thrown: Property 'subscribe' does not exist on type 'void'
    // // ref.: https://stackoverflow.com/questions/43047170/property-subscribe-does-not-exist-on-type-void-in-angular-cli
    return this.http.post<News>(
      `${url.api.base}${url.api.news.route}${url.api.news.path || ''}${''}`, doc)
      .subscribe(
        (response: any) => {
          // update the Subject,
          this.stories$.next([...stories, response]);
          console.log('postStory() receives: ', response, 'and update the list: ', [...stories, response]);
        },
        (error: any) => console.log('postStory() request fails with: ', error),
        () => console.log('postStory() completed')
      );
  };

}


// temporary helper function to filter bad data inserted into backend
// // e.g. data that has no content or no publisherName
function filterStories(list: any): any {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    let doc = list[i];
    if (
      (doc.publisherName && doc.publisherName !== '') &&
      (doc.content && (doc.content.text || doc.content.image))
    ) result.push(doc);
  }
  return result;
}

/*
export class NewsFeedComponent implements OnInit, OnDestroy {
  url = url;
  newsFeedPath = url.client.feed;
  settingsPath = url.client.settings;
  profilePath = url.client.profile;

  stories: News[] = [];
  story$: News = dummyNews;

  subscriptions: any[] = [];

  storiesSubject$ = new Subject();
  //  behaviorSubject$ = new BehaviorSubject(this.stories$);
  //  asyncSubject$ = new AsyncSubject();

  constructor(private storiesService: StoriesService) { }

  // method to get all the stories from back-end, an Observable,
  // // and pass it into the storiesSubject$
  nextStoriesSubject(): void {
    console.log('fetchStories() called')
    const subscription$ = this.storiesService
    .fetchList().subscribe(
        (response: any) => {

          // add helper to filter bad data. temporary
          const filteredResponse = filterStories(response);
          this.storiesSubject$.next(filteredResponse);
          // this.storiesSubject$.next(response);
          console.log('fetchStories() response received', response, filteredResponse);
        },
        (error: any) => console.log('fetchStories() request failed with error'),
        () => console.log('fetchStories() request completed')
      )
      this.subscriptions.push(subscription$);
  };

  // method to subscribe to storiesSubject$ and store it in the stories list
  subscribeStoriesSubject(): void {
    console.log('get stories() called');
    if (!this.stories || !this.storiesSubject$) return;
    const subscription$ = this.storiesSubject$.subscribe(
      (response: any) => {
        console.log('storiesSubject() response received', response, this.storiesSubject$);
        this.stories = response;
        console.log('this.stories', this.stories)
      },
      (error: any) => console.log('get stories() request failed with error'),
      () => console.log('get stories() request completed')
    );
    this.subscriptions.push(subscription$);
  }

  ngOnInit(): void {
    this.nextStoriesSubject();
    this.subscribeStoriesSubject();
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

}


function filterStories(list: any): any {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    let doc = list[i];
    if (
      (doc.publisherName && doc.publisherName !== '') &&
      (doc.content && (doc.content.text || doc.content.image))
    ) result.push(doc);
  }
  return result;
}
*/
