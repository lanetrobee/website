import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './features/landing/landing.component';
import { MarioComponent } from './projects/mario/mario.component';

const routes: Routes = [
  { path: 'landing-component', component: LandingComponent },
  { path: 'mario-component', component: MarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
