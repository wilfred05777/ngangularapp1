import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroServices: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }
}
