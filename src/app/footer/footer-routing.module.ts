import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.page';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: FooterComponent,
    children: [
      {
        path: 'social',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'camera',
        loadChildren: () => import('../camera-tab/camera-tab.module').then(m => m.CameraTabModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/social',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
