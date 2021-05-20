import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() addPost: EventEmitter<Post> = new EventEmitter();
  @Input() blog:number;

  blogId: number;
  title: string;
  content: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitPost() {
    this.blogId = this.blog;
    this.title = this.title;
    this.content = this.content;
    console.log(this.blogId)

    let post = new Post(this.blogId, this.title, this.content);
    
    this.addPost.emit(post);
  }
}
