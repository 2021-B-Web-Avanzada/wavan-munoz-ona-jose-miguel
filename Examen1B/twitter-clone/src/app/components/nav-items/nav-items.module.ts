import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterSectionComponent } from './twitter-section/twitter-section.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TwitterSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TwitterSectionComponent
  ]
})
export class NavItemsModule { }
