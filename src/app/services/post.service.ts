import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://mi-blogs.azurewebsites.net/api/posts');
  }

  addPost(post: Post):Observable<Post> {
    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/posts', post);
  }
}
