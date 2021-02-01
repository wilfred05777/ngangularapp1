import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { HeroBiosComponent } from './pages/dependency-injection/hero-bios/hero-bios.component';

const routes: Routes = [
  { path: '', component: HeroBiosComponent },
  { path: 'di', component: DependencyInjectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
