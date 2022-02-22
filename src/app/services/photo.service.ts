import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

export interface Photo {
  filepath: string;
  webviewPath: string;
};

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor() {}

  public async takePhoto() {

    const image = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });

    this.photos.unshift({
      filepath: 'soon..',
      webviewPath: image.webPath
    });

    return image.webPath;

  }

}
