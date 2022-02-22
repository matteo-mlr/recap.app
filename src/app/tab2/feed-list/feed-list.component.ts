import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from '../../tab1/group';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {

  groups: Group[];

  constructor(private router: Router, private groupService: GroupService) {
    //this.groupService = new GroupService();
    this.groups = this.groupService.getGroups();
  }

  ngOnInit() {}

  goToGroup(group: Group) {
    this.router.navigate(['/tabs/social/group-detail', group.id]);
  }

}
