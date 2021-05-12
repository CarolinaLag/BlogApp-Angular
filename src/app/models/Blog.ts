import { Post } from "./Post";

export class Blog {
    userId: number;
    title: string;
    posts: Post[];
  
    constructor(userId: number, title: string, posts: Post[]) {
     this.userId = userId;
     this.title = title;
     this.posts = posts;
    }
  }