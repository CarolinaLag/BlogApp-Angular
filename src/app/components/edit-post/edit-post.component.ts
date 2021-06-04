import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  post: Post;

  blogId: number;
  title: string = '';
  content: string = '';

  id: number;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      this.postService.getPost(id).subscribe((post) => {
        this.post = post;
        this.title = this.post.title;
        this.content = this.post.title;
      });
    });
  }

  onSubmitPost() {
    this.post.title = this.title;
    this.post.content = this.content;

    this.postService.updatePost(this.post.id, this.post).subscribe((data) => {
      this.location.back();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
