import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from '../../../shared/models/News';
import { url } from '../../../shared/utils/url';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  // returns Observable
  fetchList() {
    return this.http.get<News[]>(
      `${url.api.base}${url.api.news.route}${url.api.news.path || ''}${''}`);
  }

  // returns Observable
  postNews(doc: News) {
    return this.http.post<News>(
      `${url.api.base}${url.api.news.route}${url.api.news.path || ''}${''}`, doc);
  }

}
