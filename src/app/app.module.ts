import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CirucalDependencyInjectionComponent } from './pages/cirucal-dependency-injection/cirucal-dependency-injection.component';
import { CircuralDependencyInjectionComponent } from './pages/circural-dependency-injection/circural-dependency-injection.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBiosComponent } from './pages/hero-bios/hero-bios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CirucalDependencyInjectionComponent,
    CircuralDependencyInjectionComponent,
    DependencyInjectionComponent,
    HeroBiosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
