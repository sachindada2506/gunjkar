import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCacheService } from '../../shared/language-cache.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  facilities = ['Home.facility.instruction1', "Home.facility.instruction2", "Home.facility.instruction3", "Home.facility.instruction4", "Home.facility.instruction5", "Home.facility.instruction6", "Home.facility.instruction7", "Home.facility.instruction8", "Home.facility.instruction9", "Home.facility.instruction10"]
  // translate2 = this.language.translate;
  constructor(
  ) {
  }

  ngOnInit(): void {
    // this.converted = this.facilities.map(el => { return this.language.get(el.label) });
    // this.converted.subscribe(res => {
    //   console.log(res);

    // });


  }

}
