import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Comment, dummyComment } from '../../../../shared/models/News';
import { User, dummyUser } from '../../../../shared/models/User';
import { StoriesService } from '../../../../core/services/stories/stories.service';

import { url } from '../../../../shared/utils/url';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  logo = url.logo;
  @Input() comments: Comment[] = [];
  @Input() comment: Comment = dummyComment;

  constructor() { }

  ngOnInit(): void { }

}
