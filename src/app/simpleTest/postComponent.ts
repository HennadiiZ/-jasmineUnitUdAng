export class postComponent {
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
