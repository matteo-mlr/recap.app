import { Injectable } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  public webcamImage: WebcamImage = null;
  public deviceId: string;
  public errors: WebcamInitError[] = [];

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public triggerPhoto(): void {
    this.trigger.next();
  }
  
  public handleImage(webcamImage: WebcamImage) {
    console.log(webcamImage);
    return webcamImage;
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
    this.errors.push(error);
  }

}
