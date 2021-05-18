import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

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

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
