import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { News, News_, Content, dummyNews, newsList } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.sass']
})
export class PostFeedComponent implements OnInit, OnDestroy {
  @Input() stories: News_[] = [];
  story!: News;
  subscriptions$: any[] = [];

  hide: boolean = true;
  user: User = dummyUser;

  inputForm = new FormGroup({
    // we need Validators.required only for the button to be [disabled]
    newStory: new FormControl('', Validators.required)
  })

  constructor(private storiesService: StoriesService) { }

  onSubmit(): void {
      this.story = {
        // TODO: we should grab the publisherName from params
        publisherName: 'StephenAngularSis',
        publishedTime: new Date(),
        content: {
          // TODO: for content video, text, and image, input value should be filtered by regex
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

  ngOnInit(): void { }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }
}
