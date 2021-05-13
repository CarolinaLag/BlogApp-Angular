import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  //   this.blogs = this.blogService.getBlogs()
  // }

  this.blogService.getBlogs().subscribe(blogs => {
    this.blogs = blogs;
  });

  }
}
