import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})

//TODO: eher groupListComponent
export class GroupComponent implements OnInit {

  groups: Group[] = [];

  // [
  //   {path:'img1.jpg', name:'Berlin', members:4},
  //   {path:'img2.jpg', name:'Rio', members:3},
  //   {path:'img3.jpg', name:'Milano', members:15},
  //   {path:'img4.jpg', name:'Rom', members:7},

  //   {path:'img1.jpg', name:'Berlin', members:4},
  //   {path:'img2.jpg', name:'Rio', members:3},
  //   {path:'img3.jpg', name:'Milano', members:15},
  //   {path:'img4.jpg', name:'Rom', members:7},
  // ];

  constructor( private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

  testApi() {
    //console.log('hello');
  }

}
