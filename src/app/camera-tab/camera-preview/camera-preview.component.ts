import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Swiper, Zoom } from 'swiper';
import { SwiperEvents } from 'swiper/types';
import { GooglePhotoService } from '../../services/google-photo.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss'],
})
export class CameraPreviewComponent implements OnInit {

  base64Images: any = [];
  images: string[] = [];
  currentIndex = 0;
  @ViewChild('swiper') swiper: Swiper;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private googlePhotoService: GooglePhotoService
  ) {}

  ngOnInit() {
    
    this.getCookieImages();

    const eventEmitter: string = this.route.snapshot.paramMap.get('eventEmitter');

    if (eventEmitter == 'camera') {
      const photoBase64 = this.route.snapshot.paramMap.get('photoBase64');
      const dataUrlImage = this.route.snapshot.paramMap.get('photoDataUrl');
      this.base64Images.push(photoBase64);
      this.images.push(dataUrlImage);
    } else {
      const images = this.route.snapshot.paramMap.get('images').split(',');
      for (const image of images) {
        this.images.push(image);
      }
    } 
  };

  setCookieImages() {
    let cookieImages = this.images.join(',')
    this.cookieService.set('previewImages', cookieImages);
  };

  getCookieImages() {
    if (this.cookieService.check('previewImages')) {
      let cookieImages = this.cookieService.get('previewImages');
      this.images = cookieImages.split(',');
    }
  }

  slideChanged(event) {
    this.currentIndex = event[0]['realIndex'];
  };

  goToSendPage() {
    this.googlePhotoService.getUploadToken(this.base64Images[0]);
    this.router.navigate(['/tabs/camera/camera-send']);
  }

}
