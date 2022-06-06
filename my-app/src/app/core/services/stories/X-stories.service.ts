import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from '../../../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  // returns Observable
  getNews() {
    return this.http.get<News[]>('http://localhost:4231/api/news/');
  }

  // returns Observable
  postNews(doc: News) {
    return this.http.post<News>('http://localhost:4231/api/news/', doc);
  }

}

