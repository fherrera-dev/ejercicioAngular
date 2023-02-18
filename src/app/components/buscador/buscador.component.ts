import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
             ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{

      console.log( this.heroes );
    });

  }

}
