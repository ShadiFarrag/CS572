import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServService {

  constructor(private http: HttpClient) { }

  getPostData(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

  getUserData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

}
