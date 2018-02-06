import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../models/post';
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
  // inputs: ['posts'],
  // outputs:['SelectedPost']
})
export class PostListComponent implements OnInit {
// We just creating a new event as a new EventEmitter

@Input()
posts: Array<Post>;
@Output()
public SelectedPost = new EventEmitter();
// SelectedPost: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(pst: Post) {
    // Here we emitting the selected post
this.SelectedPost.emit(pst);
  }
}
