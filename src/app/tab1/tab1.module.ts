import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { GroupComponent } from './group/group.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FriendListComponent } from './friend-list/friend-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    GroupComponent,
    FriendListComponent,
    GroupDetailComponent
  ]
})
export class Tab1PageModule {}
