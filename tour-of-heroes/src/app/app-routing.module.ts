import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  {path : "heroes" ,component : HeroesComponent},
  {path: "dashboard", component: DashboardComponent},
  {path:"" , redirectTo: "/dashboard", pathMatch: "full"}, //doubt
  {path: "detail/:id", component: HeroDetailComponent} //for dynamic path for heroes with differrnt id's
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
