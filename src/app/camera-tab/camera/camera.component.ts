import { Component, OnInit } from '@angular/core';
import { CameraTabRoutingModule } from '../../camera-tab/camera-tab-routing.module';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';
import { UserGalleryComponent } from '../user-gallery/user-gallery.component';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  constructor(
    public cameraService: CameraService,
    private router: Router
  ) { }

  ngOnInit() {}

  public get triggerObservable(): Observable<void> {
    return this.cameraService.triggerObservable;
  }

  triggerPhoto() {
    this.cameraService.triggerPhoto();
  }

  takePhoto(webcamImage: WebcamImage) {
    const webcamImageObject = this.cameraService.handleImage(webcamImage);
    this.router.navigate(['/tabs/camera/camera-preview', {eventEmitter: 'camera', photoBase64: webcamImageObject['imageAsBase64'], photoDataUrl: webcamImageObject['imageAsDataUrl']}]);
  }

  showNextWebcam(directionOrDeviceId: boolean|string): void {
    this.cameraService.showNextWebcam(directionOrDeviceId);
  }

  public cameraWasSwitched(deviceId: string): void {
    this.cameraService.cameraWasSwitched(deviceId);
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.cameraService.nextWebcamObservable;
  }
  
  public handleInitError(error: WebcamInitError): void {
    this.cameraService.handleInitError(error);
  }

}
