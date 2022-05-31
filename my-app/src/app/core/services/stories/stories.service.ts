import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../../../shared/models/News';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any>('http://localhost:4231/api/news/');
  }

  postNews(doc: News) {
    return this.http.post<any>('http://localhost:4231/api/news/', doc);
  }
}
