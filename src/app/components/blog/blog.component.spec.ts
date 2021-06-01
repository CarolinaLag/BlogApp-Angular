import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from 'src/app/models/Blog';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent, TestHostComponent ]
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

  it('should present the blog', () => {
    let h3Tag:HTMLHeadElement = fixture.nativeElement.querySelector('h3');

    expect(h3Tag.innerText).toBe('Vacation');
  });
});

  @Component({
    template: `<app-blog 
    [blog]="blogToSendToChild"></app-blog>`,
  })
  class TestHostComponent {
    blogToSendToChild: Blog = {userId: 55, id: 806, title: 'Vacation', created: '2021-05-27', posts: [] };
  }
