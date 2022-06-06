import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import for reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/shared/material.module';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewsFeedComponent } from './news-feed.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { StoryComponent } from './story/story.component';
import { PostCommentComponent } from './story/post-comment/post-comment.component';
import { CommentComponent } from './story/comment/comment.component';
import { SearchBarComponent } from 'src/app/features/news-feed/search-bar/search-bar.component';
import { LikeStoryComponent } from './story/like-story/like-story.component';
import { LikeCommentComponent } from './story/comment/like-comment/like-comment.component';

@NgModule({
    declarations: [
        NewsFeedComponent,
        PostFeedComponent,
        StoryComponent,
        PostCommentComponent,
        CommentComponent,
        SearchBarComponent,
        LikeStoryComponent,
        LikeCommentComponent
    ],
    imports: [
        CommonModule,
        NewsFeedRoutingModule,
        AngularMaterialModule,
        SharedModule,
        ReactiveFormsModule
    ]
})

export class NewsFeedModule { }
