import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  private userId: = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
