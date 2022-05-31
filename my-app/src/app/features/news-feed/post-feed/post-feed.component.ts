import { Component, OnInit, OnDestroy } from '@angular/core';

import { News, Content, dummyNews, newsList } from '../../../shared/models/News';
import { StoriesService } from '../../../core/services/stories/stories.service';
@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.sass']
})
export class PostFeedComponent implements OnInit {

  story: News = dummyNews;
  subscriptions: any[] = [];

  constructor(private storiesService: StoriesService) { }

  onAddStory(input: string): void {

    this.story = {
      publisherName: 'Stephen AngularSis. TODO: get publisherName from params.id',
      publishedTime: new Date(),
      content: {
          video: 'video.avi',
          text: `${input}. TODO: use regex.match to detect whether value contains a file extension. If so, whether the file extension is a video or image. Else, it is just a text, and assigne the value to the corresponding properties.`,
          image: 'image.png'
      },
      comment: [],
      likedIdList: []
    }
    console.log(`story to send`, this.story);
    window.alert(`New Story! ${input}`);
    const subscription = this.storiesService.postNews(this.story).subscribe(
      (response: any) => {
        console.log('Response received');
        this.story = response;
        console.log(`Response we received`, this.story);
      },
      (error: any) => {
        alert('Request failed with error');
      },
      () => {
        console.log('Request completed.')
      }
    )
    // keep track of subscriptions to unsubscribe onDestroy
    this.subscriptions.push(subscription);
    this.ngOnDestroy();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
