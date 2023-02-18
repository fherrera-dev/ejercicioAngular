import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

   heroes:Heroe[] = [];

  constructor( ,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    // this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['',idx] );
  }

}
