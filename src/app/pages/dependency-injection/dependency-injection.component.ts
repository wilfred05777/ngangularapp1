import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UserContextService } from 'src/app/services/user-context.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  private userId = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    //stackblitz.com/edit/angular-vnhgpq?file=src%2Fapp%2Fapp.component.ts
    // https: userContext.loadUser(this.userId);
    userContext.loadUser(this.userId);
  }

  ngOnInit(): void {}
}
