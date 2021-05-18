import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  {
    path: "", redirectTo:'/blogs', pathMatch:'full',
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "blog/:id",
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
