import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/Blog';

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

  // getBlogs(): Blog[] {
  //   return this.blogs;
  // }

}
