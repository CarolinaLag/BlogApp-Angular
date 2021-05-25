
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() addComment: EventEmitter<Comment> = new EventEmitter();
  @Input() postId:number;

    content: string;
    // postId: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitComment(f: NgForm) {
    // this.content = this.content;
    // this.post;

    let comment = new Comment(this.content, this.postId);
    
    this.addComment.emit(comment);
    f.resetForm();
  }

}
