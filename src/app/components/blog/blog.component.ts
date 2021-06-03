import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {  
  @Input() blog: Blog;
  blogs: Blog[] = [];

  id: number; 

  constructor(private blogService: BlogService,
              private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location
              ) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlog(id).subscribe((blog) => {
      this.blog = blog;
      console.log(blog);
    })
  }

  addPost(p:Post) {
    this.postService.addPost(p).subscribe(post => {
      this.blog.posts.push(post);
      console.log(post)
    })
  }

  onDelete(blogId:number) {
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.router.navigate(['/blogs'])
    })
  }

  onEdit(blogId:number) {
    this.blogService.updateBlog(blogId, this.blog).subscribe(() => {
      this.blogService.getBlogs();
      console.log(blogId)
      this.router.navigate(['/edit-blog/' + this.blog.id])
    })
  }

  goBack(): void {
    this.router.navigate(['/blogs'])
  }
}
