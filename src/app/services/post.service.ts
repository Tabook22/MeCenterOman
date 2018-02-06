import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService {
// private _getUrl = '/api/posts';
private _getUrl = 'https://api.mlab.com/api/1/databases/fcdb/collections/post?apiKey=Rjp8S_WJbJ5CJ5WkZkSD_TDwg1myI7Aw';
  constructor(private _http: Http) { }

  getPost() {
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

}
