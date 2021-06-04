import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  @Output() deleteComment = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDeleteComment(id: number) {
    this.deleteComment.emit(id);
  }
}
