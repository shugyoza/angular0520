import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { News, Comment, Content, dummyComment, dummyNews, newsList } from '../../../../shared/models/News';
import { User, dummyUser } from '../../../../shared/models/User';
import { StoriesService } from '../../../../core/services/stories/stories.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.sass']
})
export class PostCommentComponent implements OnInit {

  comment: Comment = dummyComment;
  subscriptions: any[] = [];

  hide: boolean = true;
  user: User = dummyUser;

  inputForm = new FormGroup({
    newComment: new FormControl('', Validators.required)
  })

  constructor(private storiesService: StoriesService) { }

  onSubmit(): void {

    console.log('Hello')
/*
    this.comment = {
      publisherName: 'StephenAngularSis',
      publishedTime: new Date(),
      content: {
          video: '',
          text: this.postCommentForm?.get('newComment'),
          image: 'https://wallpaperaccess.com/full/899071.jpg'
      }
    }
    console.log(`story to send`, this.comment);
    window.alert(`New Story! ${input}`);
    const subscription = this.storiesService.postNews(this.story).subscribe(
      (response: any) => {
        console.log('Response received');
        this.comment = response;
        console.log(`Response we received`, this.comment);
      },
      (error: any) => {
        alert('Request failed with error');
      },
      () => {
        console.log('Request completed.')
      }
    )
    // keep track of subscriptions to unsubscribe onDestroy
    this.subscriptions.push(subscription); */
  }

  onPostComment() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

}
