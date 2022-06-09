import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LikedId } from '../../../../shared/models/News';
import { News, News_, dummyNews } from '../../../../shared/models/News';
import { User, User_, dummyUser } from '../../../../shared/models/User';
import { UserService } from 'src/app/core/services/user/user.service';
import { StoriesService } from '../../../../core/services/stories/stories.service';
import { AuthenticationService } from '../../../../core/services/authentication/authentication.service';

import { url } from '../../../../shared/utils/url';

@Component({
  selector: 'app-like-story',
  templateUrl: './like-story.component.html',
  styleUrls: ['./like-story.component.sass']
})
export class LikeStoryComponent implements OnInit {
    // type any because we want to access the story._id value which is not exist in interface News
    @Input() stories: News_[] = [];
    @Input() story!: News_;

    @Input() liked: boolean = false;
    @Input() likes: LikedId[] = [];

    // this is temporary array in replace of array that's suppose to be in User model
    likedStories: any[] = [];

    users: User_[] = [];
    _user!: User_;
    user!: User;
    user_id!: any;
    subscriptions$: any = [];

    inputForm = new FormGroup({
        like: new FormControl(false)
    })

    constructor(
      private storiesService: StoriesService,
      private authentication: AuthenticationService,
      private userService: UserService) { }


  onLike() {

      // subscribe to users array already populated and emitted on login
      const usersObserver = {
        next: (users: User_[]) => {
          this.users = users;
        },
        error: (err: Error) => console.log('onLike() fails with: ', err),
        complete: () => console.log('onLike() completed')
      }
      this.subscriptions$.push(this.userService.users$.subscribe(usersObserver));

      // subscribe to the user emitted on login (without ._id)
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

      // push the user._id into the story.likedIdList (create a new copy)
      this.story.likedIdList = [...this.story.likedIdList, {userId: this._user._id}];
      console.log('user._id added to the story.likedIdList: ', this.story.likedIdList);

      // grab the likedStories array from Subject
      const likedStoriesObserver = {
        next: (likedStories: any) => this.likedStories = likedStories,
        error: (err: Error) => console.log(err),
        complete: () => console.log('completed')
      }
      this.subscriptions$.push(this.userService.likedStories$.subscribe(likedStoriesObserver));

      // push the story._id into the user's likedList (currently stored in this.likedStories)
      this.likedStories = [...this.likedStories, {newsId: this.story._id}];
      console.log('story._id added into the user"s likedStories list: ', this.likedStories);

      // update the stories with the updated story
      for (let i = 0; i < this.stories.length; i++) {
        if (this.stories[i]._id === this.story._id) {
          this.stories[i] = this.story;
        }
      }
      // emit the newly updated stories
      // this.storiesService.stories$.next(this.stories);

      // emit the newly list of likedStories
      this.userService.likedStories$.next(this.likedStories);
      console.log('this.stories: ', this.stories, 'this.likedStories: ', this.likedStories)

  }


  ngOnInit(): void { }

}

/*

  onLike() {

      // fetch all the users and store it in users array
      this.userService.fetchUsers();
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

      // push the user._id into the story.likedIdList (create a new copy)
      this.story.likedIdList = [...this.story.likedIdList, {userId: this._user._id}];
      console.log('user._id added to the story.likedIdList: ', this.story.likedIdList);

      // push the story._id into the user's likedList (currently stored in this.likedStories)
      this.likedStories = [...this.likedStories, {newsId: this.story._id}];
      console.log('story._id added into the user"s likedStories list: ', this.likedStories);

      // emit the updated likedStories to be consumed by LikedStories (list) for rendering
      // this.userService.likedStories$.next(this.likedStories);
      // update the stories
      this.subscriptions$.push(this.storiesService.stories$.subscribe({
        next: (stories: any) => {
          for (let i = 0; i < stories.length; i++) {
            let story = stories[i];
            if (story._id === this.story._id) story = this.story;
            this.storiesService.stories$.next(stories);
          }
        },
        error: (err: Error) => console.log('fails with', err),
        complete: () => console.log('stories with updated story completed')
      }))
  }

*/
