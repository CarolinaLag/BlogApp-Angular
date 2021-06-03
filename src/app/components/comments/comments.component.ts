import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  getComments(): void {
    this.commentService.getComments().subscribe((data) => {
      console.log(data);
    });
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.commentService.getComments();
    });
  }
}
