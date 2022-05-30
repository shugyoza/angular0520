import { Component, OnInit, Input } from '@angular/core';
import { Comment, dummyComment } from '../../../shared/models/News';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment = dummyComment;

  constructor() { }

  ngOnInit(): void {
  }

}
