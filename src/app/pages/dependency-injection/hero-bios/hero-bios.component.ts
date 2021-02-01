import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-bios',
  templateUrl: './hero-bios.component.html',
  styleUrls: ['./hero-bios.component.scss'],
  providers: [HeroService],
})
export class HeroBiosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
