import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://mi-blogs.azurewebsites.net/api/posts');
  }

  addPost(post: Post):Observable<Post> {
    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/posts', post, httpOptions);
  }
}
