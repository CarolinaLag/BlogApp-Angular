import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: "blog/:id",
    component: BlogComponent
  },
  {
    path: "blog/:id/post/:idPost",
    component: PostsComponent
  },
  {
    path: "blogs",
    component: BlogsComponent, data: { animation: 'BlogsPage'}
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
