import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesComponent } from './banner-imagenes/banner-imagenes.component';



@NgModule({
  declarations: [
    BannerImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerImagenesComponent //esto en el banner module
  ]
})
export class BannerImagenesModule { }
