import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.less']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // totalLikes: number = 0;
  totalLikes!: number;

  like():void {
    this.totalLikes++;
  }
  
  disLike():void {
    if(this.totalLikes <= 0) {
      this.totalLikes--;
    }
  }

}
