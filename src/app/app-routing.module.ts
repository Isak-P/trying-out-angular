import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BreweriesComponent } from './breweries/breweries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'breweries', component: BreweriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
