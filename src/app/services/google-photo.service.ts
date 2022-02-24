import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class GooglePhotoService {

  private accessToken;
  private uploadToken;

  constructor(
    private http: HttpClient
    ) {
      if (!!localStorage.getItem('authToken')) {
        this.accessToken = localStorage.getItem('authToken');
      }
    }

  getAlbums(){
    return this.http.get('https://photoslibrary.googleapis.com/v1/albums', {
      params: {access_token : this.accessToken},
      observe: 'body',
      responseType: 'json'
    });
  }

  getPhotos(albumId: string){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.accessToken}`
      })
    };

    return this.http.post('https://photoslibrary.googleapis.com/v1/mediaItems:search',{
      pageSize: '100',
      albumId: albumId
    } , httpOptions);

  };

  setAuthToken(authToken: string) {
    this.accessToken = authToken;
  }

  getUploadToken(imageBase64: string) {

    let binaryImage = Buffer.from(imageBase64, 'binary');

    const toBinString = (bytes) => bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, '0'), '');
    const binary = toBinString(binaryImage);
    console.log(binary);

    const uploadHeaders = new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-type': 'application/octet-stream',
        'X-Goog-Uploadd-Content-Type': 'image/jpeg',
        'X-Goog-Upload-Protocol' : 'raw',
        'observe': 'response'
      });

    const httpUploadHeaders: Object = {
      headers: uploadHeaders,
      responseType: 'text'
    }

    this.http.post('https://photoslibrary.googleapis.com/v1/uploads', imageBase64, httpUploadHeaders)
    .subscribe(data => {
      this.uploadToken = data;
      console.log(data);
      this.createMediaItem(this.uploadToken);
    });

  };

  createAlbum(): void {

    const createAlbumHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });

    const httpCreateAlbumHeaders: Object = {
      headers: createAlbumHeaders,
      responseType: 'json'
    };

    const body = {
      "album": {
        "title": "recap Test"
      }
    }

    this.http.post('https://photoslibrary.googleapis.com/v1/albums', JSON.stringify(body), httpCreateAlbumHeaders)
    .subscribe(data => {
      return data['id'];
    });

  }

  createMediaItem(uploadToken: string): void {

    const createMediaItemHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
     });

    const httpCreateMediaItemHeaders: Object = {
      headers: createMediaItemHeaders
    }

    //const albumId = this.createAlbum();
    
    const body = {
      "newMediaItems": [
        {
          "description": "Testupload",
          "simpleMediaItem": {
            "uploadToken": uploadToken
          }
        }
      ]
    }

    this.http.post('https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate', JSON.stringify(body), httpCreateMediaItemHeaders)
    .subscribe(data => {
      console.log(data);
    });

  }

}
