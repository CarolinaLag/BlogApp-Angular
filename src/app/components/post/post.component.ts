import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  posts: Post[] = [];

  @Input() blog: Blog;

  id: number;

  constructor() {}

  ngOnInit() {}
}
