import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }
