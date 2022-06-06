import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LikedId } from '../../../../shared/models/News';
import { User, dummyUser } from '../../../../shared/models/User';
import { StoriesService } from '../../../../core/services/stories/stories.service';

import { url } from '../../../../shared/utils/url';

@Component({
  selector: 'app-like-story',
  templateUrl: './like-story.component.html',
  styleUrls: ['./like-story.component.sass']
})
export class LikeStoryComponent implements OnInit {

    @Input() liked: boolean = false;
    @Input() likes: LikedId[] = [];

    inputForm = new FormGroup({
        like: new FormControl(false)
    })

  onLike() {
      console.log(this.inputForm.value.like)
  }

  constructor() { }

  ngOnInit(): void { }

}
