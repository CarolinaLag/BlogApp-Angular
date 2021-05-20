import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  post: Post;

  constructor(private route: ActivatedRoute,
    private postService: PostService ) { }

    // Anrop för att hämta min unika post för att få kommentarerna också
  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.id = parseInt(params.get('id'));

    //   this.post = this.postService.getPost(this.id);
    // });
  }
}
