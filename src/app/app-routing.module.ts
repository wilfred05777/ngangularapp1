import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBiosComponent } from './pages/dependency-injection/hero-bios/hero-bios.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { DashboardComponent } from './pages/tour-of-heroes/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/tour-of-heroes/hero-detail/hero-detail.component';
import { TourOfHeroesComponent } from './pages/tour-of-heroes/tour-of-heroes.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'di', component: DependencyInjectionComponent },
  { path: 'store', component: StoreComponent },
  { path: 'heroes', component: TourOfHeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
