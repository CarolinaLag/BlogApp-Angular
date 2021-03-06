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

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog> (
    'https://mi-blogs.azurewebsites.net/api/blogs/' + id
    );
  }

  addBlog(blog: Blog):Observable<Blog> {
    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/blogs', blog, httpOptions);
  }

  deleteBlog(blogId:number):Observable<Blog> {
    return this.http.delete<Blog>('https://mi-blogs.azurewebsites.net/api/blogs/' + blogId);
  }

  updateBlog(blogId: number, blog:Blog):Observable<Blog> {
    return this.http.put<Blog>('https://mi-blogs.azurewebsites.net/api/blogs/' + blogId, blog);
  }
}
