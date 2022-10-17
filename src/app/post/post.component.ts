import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  totalLikes: number;
  myLike: boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output() deleteMe = new EventEmitter();
  
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
