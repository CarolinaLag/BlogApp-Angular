import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  addPost(post:Post) {
    this.blogService.addPost(post).subscribe(post => {
      this.posts.push(post);
      console.log(post)
    })
  }

}
