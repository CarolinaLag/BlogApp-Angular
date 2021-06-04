import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  post: Post;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('idPost');
      this.postService.getPost(id).subscribe((post) => {
        this.post = post;
        console.log(post);
      });
    });
  }

  addComment(c: Comment) {
    this.commentService.addComment(c).subscribe((comment) => {
      this.post.comments.push(comment);
      console.log(comment);
    });
  }

  goBack(): void {
    this.location.back();
  }

  onDeletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(() => {
      this.router.navigate(['/blog', this.post.blogId]);
    });
  }

  onEditPost(postId: number) {
    this.postService.updatePost(postId, this.post).subscribe(() => {
      this.postService.getPosts();
      console.log(postId);
      this.router.navigate(['/edit-post/' + this.post.id]);
    });
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe((data) => {
      this.getPost();
    });
  }
}
