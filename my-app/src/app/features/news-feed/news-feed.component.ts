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
import { UserService } from '../../core/services/user/user.service';
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

  subscriptions$: any[] = [];

  constructor(
    private storiesService: StoriesService,
    private userService: UserService
    ) { }

  // method to subscribe to stories Subject, store it in stories, and render DOM
  subscribeStories(keyword: string | undefined): void {
    const subscription$ = this.storiesService.stories$.subscribe(
      (response: any) => {
        if (!keyword) {
          this.stories = response;
          console.log('subscribeStories() receives: ', response, 'this.stories: ', this.stories);
        }
      },
      (error: any) => console.log('get stories() request fails with: ', error),
      () => console.log('get stories() request completed')
    );
    this.subscriptions$.push(subscription$);
  }

  ngOnInit(): void {
    // fetch data list from back end
    this.storiesService.fetchStories();
    // this subscription will automatically update the DOM when Subject got updated (next-ed)
    this.subscribeStories('');
  }

  ngOnChanges(): void {  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

}
