import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable
  , of
  , BehaviorSubject
  , AsyncSubject
  , from
  , Subject } from 'rxjs';

import { News, News_, dummyNews } from '../../../shared/models/News';
import { LikedStory } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  public stories$ = new BehaviorSubject([dummyNews])
  public story$ = new BehaviorSubject(dummyNews)
  // newsId given is a valid MongoID, BUT likedStories$ MUST be reassigned a new TRUE and VALID value before rendering

  constructor(private http: HttpClient) { }

  // method to get data from backend, and next the stories$ subject to emit data to subscriber
  fetchStories(keyword: string = '') {
    this.http
      .get<News_[]>(
        `${url.api.base}/${url.api.news.route}/${url.api.news.path}`)
      .subscribe(
        (response: any) => {

          // add helper to filter bad data. - temporary -
          const goodData = helper(response);

          if (!keyword || !keyword.length) {
            this.stories$.next(goodData);
            // this.stories$.next(response);
            console.log('fetchStories() receives: ', response, 'and filtered it to: ', goodData);
          }
          else {
            const filteredData = this.filterStories(goodData, keyword);
            this.stories$.next(filteredData)
          }

        },
        (error: Error) => console.error('fetchStories() request fails with: ', error),
        () => console.log('fetchStories() completed')
      );
  };

  // method to insert a new data to backend, and next the stories$ subject to emit data to subscriber
  postStory(doc: News, stories: News_[]) {
    // we must return here, else error thrown: Property 'subscribe' does not exist on type 'void'
    // // ref.: https://stackoverflow.com/questions/43047170/property-subscribe-does-not-exist-on-type-void-in-angular-cli
    this.http.post<News_>(
      `${url.api.base}/${url.api.news.route}/${url.api.news.path || ''}${''}`, doc)
      .subscribe(
        (response: any) => {
          // update the Subject,
          this.stories$.next([...stories, response]);
          // console.log('postStory() receives: ', response, 'and update the list: ', [...stories, response]);
        },
        (error: any) => console.log('postStory() request fails with: ', error),
        // () => console.log('postStory() completed')
      );
  };

  filterStories(list: any, keyword: string = ''): any {
    const result = [];
    // console.log('filterStories() with keyword: ', keyword)
    for (let i = 0; i < list.length; i++) {
      let doc = list[i];
      if (doc.publisherName.toLowerCase().includes(keyword.toLowerCase()) ||
      doc.content.text.toLowerCase().includes(keyword.toLowerCase())) {
        // console.log('publisherName.toLowerCase', doc.publisherName.toLowerCase(), doc.publisherName.toLowerCase().includes(keyword.toLowerCase()))
        result.push(doc);
      }
    }
    return result;
  }

  /*
  updateStory(doc: News): void {
    this.http.post<News>(
      `${url.api.base}/${url.api.news.route}/${url.api.news.path || ''}${''}`, doc)
      .subscribe(
        (response: any) => {
          // update the Subject,
          this.story$.next(response);
          // console.log('postStory() receives: ', response, 'and update the list: ', [...stories, response]);
        },
        (error: Error) => console.log('updateStory() request fails with: ', error),
        () => console.log('updateStory() completed')
      );
  }; */
}


// temporary helper function to filter bad data inserted into backend
// // e.g. data that has no content or no publisherName
function helper(list: any): any {
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
