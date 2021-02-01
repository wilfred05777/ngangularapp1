import { Component, Input, OnInit } from '@angular/core';
import { HeroCacheService } from 'src/app/services/hero-cache.service';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.scss'],
})
export class HeroBioComponent implements OnInit {
  @Input() heroId: number;

  constructor(private heroCache: HeroCacheService) {}

  ngOnInit(): void {
    this.heroCache.fetchCachedHero(this.heroId);
  }
}
