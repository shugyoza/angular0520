import { Component
  , OnInit
  , OnChanges
  , OnDestroy
  , VERSION } from '@angular/core';

import { Observable
  , of
  , BehaviorSubject
  , AsyncSubject
  , from
  , Subject } from 'rxjs';

import { News, dummyNews } from '../../shared/models/News';
import { StoriesService } from '../../core/services/stories/stories.service';
import { url } from '../../shared/utils/url';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})

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


/*
  // getStories() {
  //   const subscription$ = this.storiesService.getNews().subscribe(
  //     (response: any) => {
  //       this.stories = response;
  //       console.log('response received', response);
  //     },
  //     (error: any) => console.log('Request failed with error'),
  //     () => console.log('Request completed')
  //   );
  //   this.subscriptions.push(subscription$);
  // }


  // returns Observable
  fetchStories(): void {
    console.log('getAllNews() called')
    const subscription$ = this.http.get<News[]>('http://localhost:4231/api/news/')
      .subscribe(
        (response: any) => {
          // this.stories$ = response;
          this.storiesSubject$.next(response);
          console.log('getAllNews() response received', response);
        },
        (error: any) => console.log('getAllNews() request failed with error'),
        () => console.log('getAllNews() request completed')
      )
    this.subscriptions.push(subscription$);
  };

  storiesSubject(): News[] {
    console.log('get stories() called');
    let result: any | undefined;
    const subscription$ = this.storiesSubject$.subscribe(
      (response: any) => {
        console.log('get stories() response received', response);
        result = response;
      },
      (error: any) => console.log('get stories() request failed with error'),
      () => console.log('get stories() request completed')
    );
    this.subscriptions.push(subscription$);
    return result;
  }



  // returns Observable
  postNews(doc: News) {
    return this.http.post<News>('http://localhost:4231/api/news/', doc);
  }

}

/*
  get behaviorSubject(): any {
    console.log('get behaviorSubject() called')
    const subscription$ = this.behaviorSubject$.subscribe(
      (response: any) => {
        console.log('get behaviorSubject() response received', response);
        return response;
      },
      (error: any) => console.log('get behaviorSubject() request failed with error'),
      () => console.log('get behaviorSubject() request completed')
    )
    this.subscriptions.push(subscription$);
    return subscription$;
  }

  get asyncSubject(): any {
    console.log('get asyncSubject() called')
    const subscription$ = this.asyncSubject$.subscribe(
      (response: any) => {
        console.log('get asyncSubject() response received', response);
        return response;
      },
      (error: any) => {
        console.log('get asyncSubject() request failed with error'),
      () => console.log('get asyncSubject() request completed')
    )
    this.subscriptions.push(subscription$);
    return subscription$;
  }

  getStories() {
    const async
  }

    get storiesSubject(): any {
    console.log('get storiesSubject() called')
    const subscription$ = this.storiesSubject$.subscribe(
      (response: any) => {
        console.log('get storiesSubject() response received', response);
        return response;
      },
      (error: any) => {

        console.log('get storiesSubject() request failed with error');
      },
      () => console.log('get storiesSubject() request completed')
    )
    this.subscriptions.push(subscription$);
    return subscription$;
  }

*/

/*
export const dummyPostNews = {
  // _id: 1,
  publisherName: 'publisherName',
  publishedTime: new Date(),
  content: {
      // _id: 1,
      video: 'video.mp4',
      text: 'blah blah',
      image: 'image.png'
  },
  comment: [],
  likedIdList: []
} */
