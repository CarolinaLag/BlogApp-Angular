import { Post } from './Post';

let d = new Date();

export class Blog {
  userId: number;
  id: number;
  title: string;
  created: string;
  posts: Post[];

  constructor(userId: number, title: string, created: string) {
    this.userId = 55;
    this.id = 0;
    this.title = title;
    this.created = d.toISOString();
    this.posts = [];
  }
}
