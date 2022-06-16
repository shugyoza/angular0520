import { Component
  , Input
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

import { User, User_, dummyUser } from '../../../shared/models/User';
import { News } from '../../../shared/models/News';
import { StoriesService } from '../../../core/services/stories/stories.service';
import { UserService } from '../../../core/services/user/user.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-liked-stories',
  templateUrl: './liked-stories.component.html',
  styleUrls: ['./liked-stories.component.sass']
})

export class LikedStoriesComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  likedStories: any[] = [];
  @Input() stories: News[] = [];
  user!: User;
  subscriptions$: any = [];
  hidden: boolean = true;

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
      this.getLikedStories();
  }

  ngOnDestroy() { }

  // method to grab liked newslist from Subject
  getLikedStories() {

      const observer = {
          next: (likedStories: any) => this.likedStories = likedStories,
          error: (err: Error) => console.log('getLikedStories fails with: ', err),
          complete: () => console.log('getLikedStories() grabbed likedStories.')
      }
      this.subscriptions$.push(this.userService.likedStories$.subscribe(observer));

  }

  show(): boolean {
    return this.hidden = !this.hidden;
  }
}

/*
{

  users: User_[] = [];
  _user!: User_;
  user!: User;
  story!: News;
  @Input() likedStories: any[] = [];
  @Input() stories: any[] = [];
  subscriptions$: any[] = [];
  panelOpenState: boolean = false;

  constructor(
    private storiesService: StoriesService,
    private authentication: AuthenticationService,
    private userService: UserService
    ) { }

  // method to grab the user._id, newsList, and filter the newsList before rendering
  renderLikedStories(): void {
  }


  ngOnInit(): void {
    // this.renderLikedStories();
;  }

  ngOnChanges(): void {  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }

  // method to grab liked stories from Subject
  getLikedStories() {
    const observer = {
      next: (likedStories: )
    }
  }

}
 */


/*

  // method to grab the user._id, newsList, and filter the newsList before rendering
  renderLikedStories(): void {

      // subscribed to users array populated on login
      const usersObserver = {
        next: (users: User_[]) => {
          this.users = users;
        },
        error: (err: Error) => console.log('onLike() fails with: ', err),
        complete: () => console.log('onLike() completed')
      }
      this.subscriptions$.push(this.userService.users$.subscribe(usersObserver));

      // get the user emitted on login (without ._id)
      const userObserver = {
        next: (user: User) => {
          this.user = user;
        },
        error: (err: Error) => console.log('onLike() fails with: ', err),
        complete: () => console.log('onLike() completed')
      }
      this.subscriptions$.push(this.authentication.user$.subscribe(userObserver));

      // grab the user (with ._id) with helper callback
      this._user = this.userService.findUserIDByEmail(this.user.userEmail, 'userEmail', this.users);

      // grab all the news from subject
      const storiesObserver = {
        next: (stories: any) => this.stories = stories,
        error: (err: Error) => console.log('renderList() fails with: ', err),
        complete: () => console.log('liked-stories 71')
      }
      this.subscriptions$.push(this.storiesService.stories$.subscribe(storiesObserver));

      // grab the array of likedStories from subject
      const likedStoriesObserver = {
        next: (stories: any) => {
          this.likedStories = stories;
        },
        error: (err: Error) => console.log('renderList() fails with: ', err),
        complete: () => console.log('liked-stories 71')
      }
      // this.subscriptions$.push(this.userService.likedStories$.subscribe(likedStoriesObserver));

  }

  */
