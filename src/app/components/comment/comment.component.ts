import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  comments: Comment[] = [];

  @Input() post: Post;
  posts: Post[] = [];

  constructor(private commentService: CommentService,
    private location: Location) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  onDeleteComment(id:number) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.commentService.getComments();
      window.location.reload();
    })
  }
}
