import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class HeroCacheService {
  hero: Hero;
  constructor(private heroService: HeroService) {}

  fetchCachedHero(id: number) {
    if (!this.hero) {
      this.hero = this.heroService.getHeroById(id);
    }
    return this.hero;
  }
}
