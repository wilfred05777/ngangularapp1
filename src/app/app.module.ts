import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBioComponent } from './pages/dependency-injection/hero-bio/hero-bio.component';
import { HeroBiosComponent } from './pages/dependency-injection/hero-bios/hero-bios.component';
import { NG0200CircularDependencyComponent } from './pages/dependency-injection/ng0200-circular-dependency/ng0200-circular-dependency.component';
import { HomeComponent } from './pages/home/home.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { AuthService } from './services/auth.service';
import { HeroCacheService } from './services/hero-cache.service';
import { HeroService } from './services/hero.service';
import { UserContextService } from './services/user-context.service';
import { UserService } from './services/user.service';
import { HeroContactComponent } from './pages/dependency-injection/hero-contact/hero-contact.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './pages/store/store.component';
import { ProductListComponent } from './pages/store/product-list/product-list.component';
import { TourOfHeroesComponent } from './pages/tour-of-heroes/tour-of-heroes.component';
import { HeroesComponent } from './pages/tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from './pages/tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './pages/tour-of-heroes/messages/messages.component';
import { DashboardComponent } from './pages/tour-of-heroes/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DependencyInjectionComponent,
    NG0200CircularDependencyComponent,
    HomeComponent,
    PolicyComponent,
    HeroBiosComponent,
    HeroBioComponent,
    DependencyInjectionComponent,
    HeroContactComponent,
    StoreComponent,
    ProductListComponent,
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [
    AuthService,
    HeroService,
    HeroCacheService,
    UserContextService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// source DI mapping: https://angular.io/guide/dependency-injection-in-action
// source example: https://stackblitz.com/edit/angular-vnhgpq?file=src%2Fapp%2Fapp.component.html
