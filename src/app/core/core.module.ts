import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
// import { NguCarouselModule } from '@ngu/carousel'

@NgModule({
  declarations: [NavComponent, BannerComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    // NguCarouselModule
  ],
  exports: [
    NavComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class CoreModule { }
