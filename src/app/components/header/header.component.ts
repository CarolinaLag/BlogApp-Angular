import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() blog: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
