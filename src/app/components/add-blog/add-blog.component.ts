import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  @Output() addBlog: EventEmitter<any> = new EventEmitter();

  title: string;
  created: string;
  userId: number;
  posts: Post[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const blog = {
      title: this.title,
      created: this.created,
      userId: this.userId = 55,
      posts: this.posts
    }

    this.addBlog.emit(blog);
  }

}
