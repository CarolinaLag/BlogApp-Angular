import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/Blog';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  userId: number = 55;
  blogUrl:string =
  'https://mi-blogs.azurewebsites.net/api/blogs/user/' + this.userId;

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.blogUrl}`);
  }

  addBlog(blog: Blog):Observable<Blog> {
    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/blogs', blog, httpOptions);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://mi-blogs.azurewebsites.net/api/posts');
  }

  addPost(post: Post):Observable<Post> {
    return this.http.post<Post>('https://mi-blogs.azurewebsites.net/api/posts', post, httpOptions);
  }
}
