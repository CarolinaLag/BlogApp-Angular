import { Observable, of, Subject } from 'rxjs';
import { Blog } from '../models/Blog';

export class MockBlogService {
    private blogs:Observable<Blog[]>;
//   private blogs = new Subject<Blog[]>();
//   blogs$ = this.blogs.asObservable();

  constructor() {}

  testData: Blog[] = [
    {
      userId: 55,
      id: 806,
      title: 'Vacation',
      created: '2021-05-27',
      posts: [],
    },
  ];

  getBlogs(): Observable<Blog[]> {
    this.blogs = of(this.testData);
    return this.blogs;
  }
}
