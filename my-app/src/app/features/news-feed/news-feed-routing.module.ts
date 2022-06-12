import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFeedComponent } from './news-feed.component';

const routes: Routes = [
    /* // Refactored for lazy loading, moved to app.routing.module
    {
        path: 'feed',
        component: NewsFeedComponent,
        children: [ ]
    },
    {
        path: 'feed/:publisherName', // 'feed',
        component: NewsFeedComponent,
        children: [ ]
    } */
    {
        path: '',   // in app.routing.module already there's 'feed', so this is the root at ../feed/-here-
        component: NewsFeedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]  // refactored for lazy loading
})

export class NewsFeedRoutingModule { }
