import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  {
    path: "blog/:id",
    component: BlogComponent, 
    data: { animation: 'BlogPage'},
  },
  {
    path: "edit-blog/:id",
    component: EditBlogComponent
  },
  {
    path: "edit-post/:id",
    component: EditPostComponent
  },
  {
    path: "blog/:id/post/:idPost",
    component: PostDetailsComponent, 
    data: { animation: 'PostDetailsPage'},
  },
  {
    path: "blogs",
    component: BlogsComponent, 
    data: { animation: 'BlogsPage'},
  },
  {
    path: "", redirectTo:'/blogs', pathMatch:'full'
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
