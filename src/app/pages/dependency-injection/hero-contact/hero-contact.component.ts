import { Component, Host, OnInit, Optional } from '@angular/core';
import { HeroCacheService } from 'src/app/services/hero-cache.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-hero-contact',
  templateUrl: './hero-contact.component.html',
  styleUrls: ['./hero-contact.component.scss'],
})
export class HeroContactComponent implements OnInit {
  hasLogger = false;

  constructor(
    @Host() // limit to the host component's instance of the HeroCacheService
    private heroCache: HeroCacheService,

    @Host() //limit search for logger; hides the application-wide logger
    @Optional() // Ok if the logger doesn't exist
    private loggerService?: LoggerService
  ) {
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('HeroContact can Log!');
    }
  }

  get phoneNumber() {
    return this.heroCache.hero.phone;
  }
  ngOnInit(): void {}
}
