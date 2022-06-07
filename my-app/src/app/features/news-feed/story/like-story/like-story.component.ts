import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LikedId } from '../../../../shared/models/News';
import { News, dummyNews } from '../../../../shared/models/News';
import { User, dummyUser } from '../../../../shared/models/User';
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
    @Input() stories: any[] = [];
    @Input() story: any = dummyNews;

    @Input() liked: boolean = false;
    @Input() likes: LikedId[] = [];

    subscriptions$: any = [];

    inputForm = new FormGroup({
        like: new FormControl(false)
    })

    constructor(
      private storiesService: StoriesService,
      private authentication: AuthenticationService) { }

  onLike() {
      // console.log(this.inputForm.value.like, this.likes, this.storiesService.stories$.subscribe(data => console.log(data)))
      // console.log('onLike()', this.stories, this.story, this.story._id, this.likes)
      console.log('onlike', this.story.likedIdList)
      this.story.likedIdList = [...this.story.likedIdList, this]
  }


  ngOnInit(): void { }

}
