import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../../tab1/group/group.component';
import { FriendListComponent } from '../../tab1/friend-list/friend-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera-send',
  templateUrl: './camera-send.component.html',
  styleUrls: ['./camera-send.component.scss'],
})
export class CameraSendComponent implements OnInit {

  activeButton = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  tabAction(buttonNumber: number){
    this.activeButton = buttonNumber;
  }

  goBack() {
    this.router.navigate(['..']);
  }

}
