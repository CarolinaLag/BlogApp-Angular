import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  @Output() addBlog: EventEmitter<Blog> = new EventEmitter();

  userId: number;
  title: string;
  created: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    this.title = this.title;
    this.created = this.created;

    let blog = new Blog(this.userId, this.title, this.created);
    
    this.addBlog.emit(blog);
    f.resetForm();
  }

}
