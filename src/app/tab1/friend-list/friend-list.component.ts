import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {

  friends:Friend[] = [
    {name:'Max', img:'pp1.jpg', imgCount:6},
    {name:'Matteo', img:'pp2.jpg', imgCount:3},
    {name:'Alex', img:'pp3.jpg', imgCount:8},
    {name:'Robin', img:'pp4.jpg', imgCount:10}
  ]

  constructor() { }

  ngOnInit() {}

}
