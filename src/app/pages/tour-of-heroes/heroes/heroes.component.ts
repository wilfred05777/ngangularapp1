import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from './hero';
import { HEROES } from './mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getAllHeroes();
  // }
  getHeroes(): void {
    this.heroService
      .getAllHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
