import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFeedComponent } from './news-feed.component';

const routes: Routes = [
    {
        path: 'feed',
        component: NewsFeedComponent,
        children: [ ]
    },
    {
        path: 'feed/:publisherName', // 'feed',
        component: NewsFeedComponent,
        children: [ ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewsFeedRoutingModule { }
