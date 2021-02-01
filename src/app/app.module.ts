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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, HeroService, HeroCacheService],
  bootstrap: [AppComponent],
})
export class AppModule {}
