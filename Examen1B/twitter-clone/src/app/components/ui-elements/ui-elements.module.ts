import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileInfoBtnComponent } from './profile-info-btn/profile-info-btn.component';
import { TweetBarComponent } from './tweet-bar/tweet-bar.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';



@NgModule({
  declarations: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent,
    TweetBarComponent,
    IconBtnComponent
  ],
  exports: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent,
    TweetBarComponent,
    IconBtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiElementsModule { }
