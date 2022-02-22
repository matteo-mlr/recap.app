import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Group } from '../../tab1/group';
import { Post } from '../../tab1/post';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {

  @Input() group: Group;
  @ViewChild(IonSlides) slides: IonSlides;
  posts: Post[];
  date: string;
  currentIndex = 0;

  constructor() {}

  ngOnInit() {
    this.posts = this.group.posts.slice(0,3);
    this.date = this.posts[0].date;
  }

  slideChanged() {
    this.slides.getActiveIndex().then(index => {
      this.currentIndex = index;
    });
  };

}
