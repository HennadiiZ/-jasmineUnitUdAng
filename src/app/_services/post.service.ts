import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = 'http://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {}

  getPost(): Observable<Object> {
    return this.http.get(`${this.API_URL}/posts`);
  }

  addPost(post: any): Observable<Object> {
    return this.http.post(`${this.API_URL}/posts`, post);
  }

  deletePost(id: any): Observable<Object> {
    return this.http.delete(`${this.API_URL}/posts/${id}`);
  }
}
