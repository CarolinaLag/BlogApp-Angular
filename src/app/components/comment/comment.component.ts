import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  @Output() deleteComment = new EventEmitter();

  constructor(private commentService: CommentService) {}

  ngOnInit() {}

  onDeleteComment(id: number) {
    this.deleteComment.emit(id);
  }
}
