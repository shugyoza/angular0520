import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { News, Content, Comment, dummyNews, newsList } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { StoriesService } from '../../../core/services/stories/stories.service';
import { url } from '../../../shared/utils/url';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  logo = url.logo;
  panelOpenState: boolean = false;
  @Input() story: News = dummyNews;
  @Input() comments: Comment[] = [];

  constructor() {}

  onLike() {
    console.log('onLike()')
  }

  ngOnInit(): void {
  }

}
