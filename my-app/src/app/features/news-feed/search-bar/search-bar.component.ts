import { Component, Input, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { News, Content, dummyNews, newsList } from '../../../shared/models/News';
import { User, dummyUser } from '../../../shared/models/User';
import { StoriesService } from '../../../core/services/stories/stories.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() stories: News[] = [];

  story: News = dummyNews;
  subscriptions$: Subscription[] = [];

  hide: boolean = true;
  user: User = dummyUser;

  inputForm = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

  constructor(private storiesService: StoriesService) { }


  debounceT(time: number): void {
    console.log('debounceT()');
    const subscription$ = this.inputForm.valueChanges
      .pipe(debounceTime(time))
      .subscribe(
        (response: any) => {
          console.log('debounceT receives: ', response, 'and pass to fetchStories: ', response.search);
          this.storiesService.fetchStories(response.search);
          console.log('storiesService.fetchStories(response): ', this.storiesService.filterStories(this.stories, response));
        },
        (error: any) => console.log('debounceT request fails, with: ', error),
        () => console.log('debounceT() completed')
      );
    this.subscriptions$.push(subscription$);
  }

  onSubmit(){}


  ngOnInit(): void {
    this.debounceT(1000);
  }

  ngOnChanges(): void { }

  ngDoCheck(): void { }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }
}
