import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Group } from '../group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit {

  group: Group = {id: 0, path: '', name: '', albumId: '', members: 0};

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id: string|null = routeSnapshot.params.id;

    this.group = this.groupService.getGroup(+id);
  }

}
