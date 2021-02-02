import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HEROES } from '../pages/tour-of-heroes/heroes/mockHeroes';
import { MessageService } from '../pages/tour-of-heroes/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  private heroes: Array<Hero> = [
    new Hero(1, 'RubberMan', 'Hero of many talents', '123-456-7899'),
    new Hero(2, 'Magma', 'Hero of all trades', '555-555-5555'),
    new Hero(3, 'Dr Nice', 'The name says it all', '111-222-3333'),
  ];

  getHeroById(id: number) {
    return this.heroes.find((hero) => hero.id === id);
  }

  getAllHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
