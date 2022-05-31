import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { News, dummyNews } from '../../shared/models/News';
import { StoriesService } from '../../core/services/stories/stories.service';
import { path } from '../../shared/variables';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit, OnChanges, OnDestroy {

  stories: any[] = [];
  story: any = dummyNews;

  subscriptions: any[] = [];

  newsFeedPath = path.feed;
  settingsPath = path.settings;
  profilePath = path.profile;

  constructor(private storiesService: StoriesService) { }

  displayNews() {
    const subs = this.storiesService.getNews().subscribe(
      (response: any) => {
        this.stories = response;
        console.log('response received', response);
      },
      (error: any) => {
        console.log('Request failed with error');
        alert('Request failed with error');
      },
      () => {
        console.log('Request completed');
      }
    )
    this.subscriptions.push(subs);
  }

  ngOnInit(): void {
    this.displayNews();
  }

  ngOnChanges(): void {
    this.displayNews();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

}
