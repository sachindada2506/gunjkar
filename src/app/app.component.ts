import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private translate: TranslateService, private breakpointObserver: BreakpointObserver) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }
  title = 'gunjkar';
  languages = [
    { id: "en", label: "English" },
    { id: "mr", label: "Marathi" }
  ]

  onSelect(e: MatSelectChange) {
    if (e.value === 'en') {
      this.translate.setDefaultLang(e.value);
    } else {
      this.translate.setDefaultLang(e.value);
    }

  }
}
