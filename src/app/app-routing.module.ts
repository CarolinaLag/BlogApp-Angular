import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: "blog/:id",
    component: BlogComponent, data: { animation: 'BlogPage'}
  },
  {
    path: "edit-blog/:id",
    component: EditBlogComponent, data: { animation: 'EditBlogPage'}
  },
  {
    path: "blog/:id/post/:idPost",
    component: PostDetailsComponent, data: { animation: 'PostDetailsPage'}
  },
  {
    path: "blogs",
    component: BlogsComponent, data: { animation: 'BlogsPage'}
  },
  // {
  //   path: "add-post",
  //   component: AddPostComponent, data: { animation: 'AddPostPage'}
  // },
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
