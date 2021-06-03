import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  // comments: Comment[] = [];
  // @Input() blog: Blog;

  // @Input() post: Post;
  // posts: Post[] = [];
  @Output() deleteComment = new EventEmitter();

  constructor(private commentService: CommentService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    // this.commentService.getComments().subscribe(comments => {
    //   this.comments = comments;
    // });
  }

  onDeleteComment(id:number) {
    this.deleteComment.emit(id);
  }
}
