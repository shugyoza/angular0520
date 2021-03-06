import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { News, News_, dummyNews } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { url } from '../../../shared/utils/url';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  logo = url.logo;
  panelOpenState: boolean = false;

  @Input() stories: News_[] = [];
  @Input() story!: News_;

  constructor() {}

  onLike() {
    console.log('onLike()')
  }

  ngOnInit(): void {
  }

}
