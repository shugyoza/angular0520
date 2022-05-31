import { Component, OnInit, Input } from '@angular/core';
import { News, dummyNews } from '../../../shared/models/News';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() story: News = dummyNews;

  constructor() { }

  ngOnInit(): void {
  }

}
