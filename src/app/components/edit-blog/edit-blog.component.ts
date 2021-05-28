import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  // @Output() addBlog: EventEmitter<Blog> = new EventEmitter();
  
  blog: Blog;
  blogs: Blog[] = [];

  userId: number;
  title: string = '';
  created: string;

  id: number;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
   this.getBlog();
  }

  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlog(id).subscribe((blog) => {
      this.blog = blog;
      this.title = this.blog.title;
    })
  }

  onSubmit() {
    this.blog.title = this.title;
    
    this.blogService.updateBlog(this.blog.id, this.blog).subscribe(data => {
      this.location.back();
      console.log(data);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
