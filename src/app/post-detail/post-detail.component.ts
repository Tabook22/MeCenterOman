import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
  // inputs:['post']
})
export class PostDetailComponent implements OnInit {
  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
