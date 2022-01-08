import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileInfoBtnComponent } from './profile-info-btn/profile-info-btn.component';
import { TweetBarComponent } from './tweet-bar/tweet-bar.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetActionComponent } from './tweet-action/tweet-action.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ExploreListComponent } from './explore-list/explore-list.component';



@NgModule({
  declarations: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent,
    TweetBarComponent,
    IconBtnComponent,
    TweetComponent,
    TweetActionComponent,
    SearchSectionComponent,
    SearchBarComponent,
    ExploreListComponent
  ],
  exports: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent,
    TweetBarComponent,
    IconBtnComponent,
    TweetComponent,
    TweetActionComponent,
    SearchSectionComponent,
    SearchBarComponent,
    ExploreListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiElementsModule { }
