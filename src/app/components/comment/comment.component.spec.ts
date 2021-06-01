import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent, TestHostComponent ],
      imports:[HttpClientModule],
      providers: [{ provide: CommentService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present the comment', () => {
    let pTag: HTMLHeadingElement = fixture.nativeElement.querySelector('p');

    expect(pTag.innerText).toBe('New Comment');
  });
});

@Component({
    template: `<app-comment [comment]="commentToSendToChild"></app-comment>`,
})
class TestHostComponent {
    commentToSendToChild: Comment = {id: 1, content: 'New Comment', postId: 300}
}
