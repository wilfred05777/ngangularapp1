import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBiosComponent } from './pages/dependency-injection/hero-bios/hero-bios.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { TourOfHeroesComponent } from './pages/tour-of-heroes/tour-of-heroes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'di', component: DependencyInjectionComponent },
  { path: 'store', component: StoreComponent },
  { path: 'herotour', component: TourOfHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
