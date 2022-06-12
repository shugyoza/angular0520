import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LikedIdList } from '../../shared/models/News';
// import { -service - } from ' ';

@Component({
    selector: 'app-liked-story-list',
    templateUrl: './liked-story-list.component.html',
    styleUrls: ['./liked-story-list.component.sass']
})

export class LikedStoryList implements OnInit, OnDestroy, OnChanges {

    likedIdList: LikedIdList = [];
    subscriptions: Observable<LikedIdList> = [];

    constructor( /* inject service here */) { };

    ngOnInit(): void { }

    ngOnChanges(): void { }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}

/*
let dummy = [{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'},
{newsId: '6240fd4fe3aa9b31f24002bf'}]
*/
