import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Heroes',component:HeroesComponent},
  {path:'Heroe',component:HeroeComponent},
  {path:'Busqueda',component:BuscadorComponent},
  {path:'Heroe/:index',component:HeroeComponent},
  {path:'buscar/:termino',component:BuscadorComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}


];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
