import { PostService } from './../services/post.service';
import {Post} from '../models/post';
import { Component, OnInit } from '@angular/core';
import { uuid } from '../util/uuid';
@Component({
  selector: 'app-post-center',
  templateUrl: './post-center.component.html',
  styleUrls: ['./post-center.component.css'],
  providers: [PostService]
})
export class PostCenterComponent implements OnInit {
  posts: Array<Post>;
  // posts: Post[] = [
  // {
  //   pstId: uuid(),
  //   pst_title: ' What is the alt-right and what does it stand for?',
  //   pst_type: 'string;',
  //   pst_status: true,
  //   pst_adate: 'ssss',
  //   pst_author: 'string;',
  //   pst_data: 'string;',
  //   pst_excerpt: 'string;',
  //   pst_img: 'string;',
  //   pst_img_title: ' string;'
  // },
  // {
  //   pstId: uuid(),
  //   pst_title: 'Africa is not poor, we are stealing its wealth',
  //   pst_type: 'string;',
  //   pst_status: true,
  //   pst_adate: '01/02/2018',
  //   pst_author: 'string;',
  //   pst_data: 'string;',
  //   pst_excerpt: 'string;',
  //   pst_img: 'string;',
  //   pst_img_title: ' string;'
  // },
  // {
  //   pstId: uuid(),
  //   pst_title: 'Africas natural resources: From curse to a blessing',
  //   pst_type: 'string;',
  //   pst_status: true,
  //   pst_adate: '01/02/2018',
  //   pst_author: 'string;',
  //   pst_data: 'string;',
  //   pst_excerpt: 'string;',
  //   pst_img: 'string;',
  //   pst_img_title: ' string;'
  // },
  // ];

  selectedPost: Post;
  constructor(private _postService: PostService) {
    this._postService.getPost()
    .subscribe(resPostData => this.posts = resPostData);
   }

  ngOnInit() {
  }

  onSelectedPost(post: any) {
    this.selectedPost = post;
    console.log(this.selectedPost);

  }
}
