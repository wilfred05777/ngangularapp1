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
