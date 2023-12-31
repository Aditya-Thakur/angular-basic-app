import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoComponent } from './components/neo/neo.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {
    path: 'neo',
    component: NeoComponent
  }, 
  {
    path: 'weather',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
