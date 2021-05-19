import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://mi-blogs.azurewebsites.net/api/comments');
  }

  addComment(comment: Comment):Observable<Comment> {
    return this.http.post<Comment>('https://mi-blogs.azurewebsites.net/api/comments', comment);
  }
}
