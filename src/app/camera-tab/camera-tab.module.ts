import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CameraTabComponent } from './camera-tab.page';
import { CameraTabRoutingModule } from './camera-tab-routing.module';
import { CameraPreviewComponent } from './camera-preview/camera-preview.component';
import { CameraComponent } from './camera/camera.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { SwiperModule } from 'swiper/angular';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CameraTabRoutingModule,
    RouterModule,
    WebcamModule,
    SwiperModule
  ],
  declarations: [
    CameraTabComponent,
    CameraComponent,
    CameraPreviewComponent,
    UserGalleryComponent
  ]
})

export class CameraTabModule {}
