import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  id: number; 

  constructor(private blogService: BlogService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
  this.blogService.getBlogs().subscribe(blogs => {
    this.blogs = blogs;
  });
  }

  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlog(id).subscribe((blog) => {
      this.blog = blog;
      console.log(blog);
    })
  }
}
