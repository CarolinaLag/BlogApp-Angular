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

  getPost(idPost: number): Observable<Post> {
    return this.http.get<Post> (
    'https://mi-blogs.azurewebsites.net/api/posts/' + idPost
    );
  }

  addPost(post: Post):Observable<Post> {
    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/posts', post);
  }

  deletePost(postId:number):Observable<Post> {
    return this.http.delete<Post>('https://mi-blogs.azurewebsites.net/api/posts/' + postId);
  }

  updatePost(postId: number, post:Post):Observable<Post> {
    return this.http.put<Post>('https://mi-blogs.azurewebsites.net/api/posts/' + postId, post);
  }
}
