import { Injectable } from '@angular/core';
import { HEROES } from '../heroes/mockHeroes';
import { Hero } from '../heroes/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    // return HEROES;
    return of(HEROES);
  }
}
