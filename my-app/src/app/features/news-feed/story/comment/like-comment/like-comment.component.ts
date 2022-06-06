import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LikedId } from '../../../../../shared/models/News';

@Component({
  selector: 'app-like-comment',
  templateUrl: './like-comment.component.html',
  styleUrls: ['./like-comment.component.sass']
})
export class LikeCommentComponent implements OnInit {

    @Input() liked: boolean = false;
    @Input() likes: LikedId[] = [];

    inputForm = new FormGroup({
        like: new FormControl(false)
    })

  onLike() {
      console.log('onLike(), inputForm.value.like: ', this.inputForm.value.like)
  }

  constructor() { }

  ngOnInit(): void {
   }

}
