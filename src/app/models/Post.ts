import { Comment } from "./Comment";

let d = new Date();

export class Post {
    blogId: number;
    id: number;
    title: string;
    content: string;
    created: string;
    modified: string;
    comments: Comment[];
  
    constructor(blogId: number, title: string, content: string) {
      this.blogId = blogId;
      this.id = 0;
      this.title = title;
      this.content = content;
      this.created = d.toISOString();
      this.modified = d.toISOString();
      this.comments = [];
    }
  }