import { Comment } from "./Comment";

export class Post {
    id: number;
    title: string;
    content: string;
    created: string;
    modified: string;
    comments: Comment[];
  
    constructor(id: number, title: string, content: string, created: string, modified: string, comments: Comment[]) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.created = created;
      this.modified = modified;
      this.comments = comments;
    }
  }