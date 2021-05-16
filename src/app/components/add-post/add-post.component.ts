import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  content: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitPost() {
    const post = {
      title: this.title,
      content: this.content,
    }
    this.addPost.emit(post);
  }

}
