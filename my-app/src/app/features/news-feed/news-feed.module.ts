import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { StoryComponent } from './story/story.component';
import { PostCommentComponent } from './story/post-comment/post-comment.component';
import { CommentComponent } from './story/comment/comment.component';

@NgModule({
    declarations: [
        NewsFeedComponent,
        PostFeedComponent,
        StoryComponent,
        PostCommentComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        NewsFeedRoutingModule,
        MatButtonModule
    ]
})

export class NewsFeedModule { }
