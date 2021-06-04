import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  userId: number;
  title: string;
  created: string;
  posts: Post[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe((data) => {
      console.log(data);
      this.blogs = data;
    });
  }

  addBlog(blog: Blog) {
    this.blogService.addBlog(blog).subscribe((blog) => {
      this.blogs.push(blog);
      console.log(blog);
    });
  }

  deleteBlog(blogId: number) {
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.blogService.getBlogs();
    });
  }

  updateBlog(blogId: number, blog: Blog) {
    this.blogService.updateBlog(blogId, blog).subscribe(() => {
      this.blogService.getBlogs();
    });
  }
}
