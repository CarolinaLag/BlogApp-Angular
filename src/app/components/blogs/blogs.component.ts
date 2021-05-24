import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  @Input() blog: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(data => {
      console.log(data);
      this.blogs = data;
    });
  }
  
  addBlog(blog:Blog) {
    if(blog.title == '') {
    } else {
    this.blogService.addBlog(blog).subscribe(blog => {
      this.blogs.push(blog);
      console.log(blog)
    });
    blog.title = "";
   }
  }

  deleteBlog(blogId:number) {

   this.blogService.deleteBlog(blogId).subscribe(() => {
     this.blogService.getBlogs();
   });
   console.log(blogId)
   }


  // deleteBlog(blogId:Blog) {
  //   this.blogService.deleteBlog(blogId).subscribe(data => {
  //     console.log(data);
  //   })
  // } 
}
