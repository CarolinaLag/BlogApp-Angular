import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  post: Post;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService ,
    private location: Location) { }

  ngOnInit() {
    // this.postService.getPosts().subscribe(posts => {
    //   this.posts = posts;
    //   console.log(posts)
    // });
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('idPost'));
    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
      console.log(post);
    })
  }

  addComment(c:Comment) {
    this.commentService.addComment(c).subscribe(comment => {
      this.post.comments.push(comment);
      console.log(comment)
    })
  }

  goBack(): void {
    this.location.back();
  }

}
