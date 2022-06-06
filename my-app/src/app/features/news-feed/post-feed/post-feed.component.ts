import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { News, Content, dummyNews, newsList } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.sass']
})
export class PostFeedComponent implements OnInit, OnDestroy {
  @Input() stories: News[] = [];
  story: News = dummyNews;
  subscriptions$: any[] = [];

  hide: boolean = true;
  user: User = dummyUser;

  inputForm = new FormGroup({
    newStory: new FormControl('')
  })

  constructor(private storiesService: StoriesService) { }

  onSubmit(): void {
      this.story = {
        publisherName: 'StephenAngularSis',
        publishedTime: new Date(),
        content: {
            video: 'video-placeholder.mp4',
            text: this.inputForm.value.newStory,
            image: 'https://wallpaperaccess.com/full/899071.jpg'
        },
        comment: [],
        likedIdList: []
      }
      console.log(`story to send: `, this.story);

      this.storiesService.postStory(this.story, this.stories);
  }




  /*
  // method to submit new post
  onSubmit(): void {
    this.story = {
      publisherName: 'StephenAngularSis',
      publishedTime: new Date(),
      content: {
          video: 'video-placeholder.mp4',
          text: this.inputForm.value.newStory,
          image: 'https://wallpaperaccess.com/full/899071.jpg'
      },
      comment: [],
      likedIdList: []
    }
    console.log(`story to send`, this.story);
    window.alert(`New Story! ${'input'}`);
    const subscription = this.storiesService.postNews(this.story).subscribe(
      (response: any) => {
        console.log('Response received');
        this.story = response;
        console.log(`Response we received`, this.story);
      },
      (error: any) => {
        console.log('Request failed with error', error);
      },
      () => {
        console.log('Request completed.')
      }
    )
    // keep track of subscriptions to unsubscribe onDestroy
    this.subscriptions.push(subscription);
  } */

  ngOnInit(): void { }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }
}
