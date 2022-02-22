import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraPreviewComponent } from './camera-preview/camera-preview.component';
import { CameraComponent } from './camera/camera.component';
import { CameraTabComponent } from './camera-tab.page';
import { CameraSendComponent } from './camera-send/camera-send.component';

const routes: Routes = [
  {
    path: '',
    component: CameraTabComponent,
    children: [
      {
        path: 'camera-live',
        component: CameraComponent
      },
      {
        path: 'camera-preview',
        component: CameraPreviewComponent
      },
      {
        path: 'camera-send',
        component: CameraSendComponent
      },
      {
        path: '',
        redirectTo: 'camera-live',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CameraTabRoutingModule {}
