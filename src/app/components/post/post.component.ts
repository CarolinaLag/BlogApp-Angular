
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  posts: Post[] = [];

  @Input() blog: Blog;
  blogs: Blog[] = [];

  id: number;

  constructor(private postService: PostService, 
    private commentService: CommentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
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
}
