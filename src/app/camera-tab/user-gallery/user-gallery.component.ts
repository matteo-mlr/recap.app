import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './gallery-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.scss'],
})
export class UserGalleryComponent implements OnInit {

  images: GalleryItem[] = [new GalleryItem('../../assets/img/img_1.jpg', false), new GalleryItem('../../assets/img/img_2.jpg', false),
                          new GalleryItem('../../assets/img/img_3.jpg', false), new GalleryItem('../../assets/img/img_4.jpg', false),
                          new GalleryItem('../../assets/img/img_5.jpg', false), new GalleryItem('../../assets/img/img_6.jpg', false),
                          new GalleryItem('../../assets/img/img_7.jpg', false), new GalleryItem('../../assets/img/img_8.jpg', false),
                          new GalleryItem('../../assets/img/img_9.jpg', false),];

  constructor(private router: Router) { }

  ngOnInit() {}

  changeSelectedState(index: number) {
    this.images[index].selected = !this.images[index].selected;
  }

  getImageSelected(): boolean {
    for (const image of this.images) {
      if (image.selected === true) {
        return true;
      }
    }
    return false;
  }

  getSelectedImages(): string[] {
    const selectedImages: string[] = [];
    for (const image of this.images) {
      if (image.selected === true) {
        selectedImages.push(image.imagePath);
      }
    }
    return selectedImages;
  }

  routeToPreview() {
    const selectedImages: string[] = this.getSelectedImages();
    this.router.navigate(['/tabs/camera/camera-preview', {images: selectedImages}]);
  }

}
