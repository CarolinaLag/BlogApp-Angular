import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[]= [
    {userId: 55, title: 'Blog 1', posts: [{title: 'Post Title 1', content: 'Post content 1'}]},
    {userId: 55, title: 'Blog 2', posts: [{title: 'Post Title 2', content: 'Post content 2'}]},
    {userId: 55, title: 'Blog 3', posts: [{title: 'Post Title 3', content: 'Post content 3'}]},
    {userId: 55, title: 'Blog 4', posts: [{title: 'Post Title 4', content: 'Post content 4'}]}
  ];

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

}
