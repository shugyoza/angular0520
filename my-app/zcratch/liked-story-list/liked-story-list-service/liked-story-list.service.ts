import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LikedIdList } from '../../../shared/models/News';

@Injectable({
    providedIn: 'root'
})

export class LikedStoryList {

    baseURL: string = '';

    constructor(private http: HttpClient) { }

    
}
