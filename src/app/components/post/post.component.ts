import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  posts: Post[] = [];

  @Input() blog: Blog;
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
