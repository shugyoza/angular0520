import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { News, Content, dummyNews, newsList } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  story: News = dummyNews;
  subscriptions: any[] = [];

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
          video: '',
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
        alert('Request failed with error');
      },
      () => {
        console.log('Request completed.')
      }
    )
    // keep track of subscriptions to unsubscribe onDestroy
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
