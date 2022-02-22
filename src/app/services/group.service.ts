import { Injectable } from '@angular/core';
import { Group } from '../tab1/group';
import {GooglePhotoService} from "./google-photo.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Group[] = [];

  constructor(private googlePhotoService: GooglePhotoService) {
    this.initGroups();
  }

  // load albums and photos of logged in user
  initGroups(){
    this.googlePhotoService.getAlbums()
      .subscribe(data => {

        for (let i = 0; i < data['albums'].length; i++) {
          this.groups.push(
            {
              id:i,
              path: data['albums'][i]['coverPhotoBaseUrl'],
              name: data['albums'][i]['title'],
              albumId: data['albums'][i]['id'],
              members: 1
            }
          );
          
          console.log(data['albums'][i]['id']);
          this.getPhotosOfAlbum(this.groups[i])
        }
      });
  }

  // load photos of a specific album
  getPhotosOfAlbum(album: Group){
    this.googlePhotoService.getPhotos(album.albumId)
      .subscribe( data => {

        let posts = [];
        for (let mediaListItem of data['mediaItems']){
          posts.push({img: mediaListItem["baseUrl"]})
        }

        album.posts = posts;
      });
  }

  getGroups() {
    return this.groups;
  }

  getGroup(id: number) {
    return this.groups[id];
  }


  // dummy data
    //groups: Group[] = [
    //   {id: 1,path:'bar/bar1.jpg', name:'Berlin', members:4,
    //    posts : [
    //      {img:'bar/bar1.jpg', author:'Robin', date:'11.09.2021 15:30', likes:8},
    //      {img:'bar/bar2.jpg', author:'Matteo', date:'12.09.2021 16:23', likes:6},
    //      {img:'bar/bar3.jpg', author:'Max', date:'13.09.2021 12:30', likes:15},
    //      {img:'bar/bar4.jpg', author:'Alex', date:'14.09.2021 09:45', likes:2}
    //     ]
    //   },
    //   {id: 2,path:'party/party1.jpg', name:'Festival', members:6,
    //    posts : [
    //     {img:'party/party1.jpg', author:'Alex', date:'11.09.2021 19:31', likes:2},
    //     {img:'party/party2.jpg', author:'Robin', date:'11.09.2021 20:04', likes:5},
    //     {img:'party/party3.jpg', author:'Matteo', date:'11.09.2021 20:30', likes:3},
    //     {img:'party/party4.jpg', author:'Alex', date:'11.09.2021 21:27', likes:7},
    //    ]
    //   },
    //   {id: 3,path:'grill/grill4.jpg', name:'Grillen', members:4,
    //   posts : [
    //     {img:'grill/grill4.jpg', author:'Robin', date:'11.09.2021 19:31', likes:2},
    //     {img:'grill/grill2.jpg', author:'Robin', date:'11.09.2021 20:04', likes:5},
    //     {img:'grill/grill3.jpg', author:'Matteo', date:'11.09.2021 20:30', likes:3},
    //     {img:'grill/grill1.jpg', author:'Max', date:'11.09.2021 21:27', likes:7},
    //    ]
    //   },
    //   {id: 4,path:'mailand/img2.jpg', name:'Mailand', members:7,
    //   posts : [
    //     {img:'mailand/img2.jpg', author:'Robin', date:'11.09.2021 15:30', likes:8},
    //     {img:'mailand/img3.jpg', author:'Matteo', date:'12.09.2021 16:23', likes:6},
    //     {img:'mailand/img1.jpg', author:'Max', date:'13.09.2021 12:30', likes:15},
    //     {img:'mailand/img4.jpg', author:'Alex', date:'14.09.2021 09:45', likes:2}
    //    ]
    // },
    //];

}
