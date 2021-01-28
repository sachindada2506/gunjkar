import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { take, map, startWith } from 'rxjs/operators';
// import { slider } from '../slide-animation';
import { slider } from '../../shared/slide-animation';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {
  // Caurosel

  images = ['assets/images/1.jpeg', 'assets/images/2.jpeg', 'assets/images/3.jpeg', 'assets/images/4.jpeg'];
  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    custom: 'banner',
    loop: true,
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    vertical: {
      enabled: false,
      height: 400
    }
  };
  tempData: any[];
  public carouselTileItems$: Observable<number[]>;
  constructor() { }

  ngOnInit(): void {
    this.tempData = [];

    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(3),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[Math.floor(Math.random() * this.images.length)]
        ]);
        return data;
      })
    );
  }

  onmoveFn(data: any) {
    // console.log(data);
  }

}
