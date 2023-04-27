import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title: 'tree', 
    imageUrl: 'assets/images/tree.jpeg', 
    username: 'nature', 
    content: 'I saw the tree'
  }, 
  {
    title: 'mountain', 
    imageUrl: 'assets/images/mountain.jpeg', 
    username: 'mountain', 
    content: 'I saw the mountain'
  }, 
  {
    title: 'biking', 
    imageUrl: 'assets/images/biking.jpeg', 
    username: 'biking', 
    content: 'I saw the bicycle'
  }]


  getPosts(){
    return this.posts;
  }
}
