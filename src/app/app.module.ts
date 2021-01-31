import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CircuralDependencyInjectionComponent } from './pages/circural-dependency-injection/circural-dependency-injection.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBiosComponent } from './pages/hero-bios/hero-bios.component';
import { NG0200CircularDependencyComponent } from './pages/dependency-injection/ng0200-circular-dependency/ng0200-circular-dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CircuralDependencyInjectionComponent,
    DependencyInjectionComponent,
    HeroBiosComponent,
    NG0200CircularDependencyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
