import { Post } from "./Post";

export class Comment {
    id: number;
    content: string;
    
    constructor(id: number, content: string) {
     this.id = id;
     this.content = content;
  }
}