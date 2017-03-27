import { Component } from '@angular/core';
import {NativeStorage} from 'ionic-native';
import {profilePicService} from './profile_pic.service';

@Component({
  selector: 'profile-pic',
  templateUrl: './profile_pic.html',
})
export class profilePicComponent {

  profile_pic: string;

  constructor(private profilePicService: profilePicService) {
    NativeStorage.getItem('profile_pic')
      .then(
      data => this.profile_pic = data,
      error => this.profile_pic = './assets/profile.jpg'
      );

    this.profilePicService.changeDP$.subscribe(data => {
      this.profile_pic = data;
      NativeStorage.setItem('profile_pic', data);
    })
  }
}