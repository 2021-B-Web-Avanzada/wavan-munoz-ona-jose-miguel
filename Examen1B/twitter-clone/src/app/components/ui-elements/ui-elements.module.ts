import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileInfoBtnComponent } from './profile-info-btn/profile-info-btn.component';



@NgModule({
  declarations: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent
  ],
  exports: [
    ProfilePictureComponent,
    ProfileInfoBtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiElementsModule { }
