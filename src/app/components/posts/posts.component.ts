import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  @Input() blog: Blog;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  getPosts(): void {
    const blogId = this.blog.id;
    this.postService.getPosts().subscribe((data) => {
      this.blog.posts = data.filter((post) => post.id == blogId);
    })
  }

  addPost(post:Post) {
    this.postService.addPost(post).subscribe(post => {
      this.blog.posts.push(post);
      console.log(post)
    })
  }
}
