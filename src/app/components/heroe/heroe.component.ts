import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe( params['idx'] );
        console.log(this.heroe);
        console.log("estoy en el heroeee");
        
    });

  }

  // ngOnInit(): void {

  //   this.activatedRoute.params.subscribe( params =>{
  //     this.heroe = this._heroesService.getHeroe( params['id'] );
  //     console.log(this.heroe);
  //     console.log('info del heroe');
      
  // });

  // }

  

}
