import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from '../services/message.service';
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

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    // this.getAnotherHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getAnotherHeroes(): void {
    this.heroService
      .getAllHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getAllHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
