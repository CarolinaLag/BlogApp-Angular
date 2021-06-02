import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { MockBlogService } from 'src/app/services/MockBlogService';
import { BlogsComponent } from './blogs.component';


describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsComponent ],
      imports: [HttpClientModule],
      providers: [{provide: BlogService, useClass: MockBlogService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blogs', () => {
    // let h3Tag: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(component.blogs.length).toBe(1);
    expect(component.blogs[0].title).toBe('Vacation');
  });
});


