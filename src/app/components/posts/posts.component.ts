import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() blog: Blog;

  @Input() post: Post;
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {}

  getPosts(): void {
    this.postService.getPosts().subscribe((data) => {
    });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(() => {
      this.postService.getPosts();
    });
    console.log(postId);
  }

  updatePost(postId: number, post: Post) {
    this.postService.updatePost(postId, post).subscribe(() => {
      this.postService.getPosts();
    });
    console.log(postId);
  }
}
