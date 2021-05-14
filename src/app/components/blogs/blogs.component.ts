import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(data => {
      console.log(data);
      this.blogs = data;
    });
  }
  
  addBlog(blog:Blog) {
    this.blogService.addBlog(blog).subscribe(blog => {
      this.blogs.push(blog);
    })
  }

  // addBlog(blog) {
  //   this.blogService.addBlog(blog).subscribe(data => {
  //     this.blogs.push({title: blog , id: 1, created: '', userId: 55, posts:[]});
  //     console.log(data);
  //   })
  // }
}