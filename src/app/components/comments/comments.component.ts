import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  getComments(): void {
    const postId = this.post.id;
    this.commentService.getComments().subscribe((data) => {
      this.post.comments = data.filter((comment) => comment.id == postId);
      console.log(data)
    })
  }
}
