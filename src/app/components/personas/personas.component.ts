import { Component } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  
  Personas:any[]=[];
  
  constructor(private _persona:PersonasService, private _servicios:PersonasService) { }

  ngOnInit(): void {
    //aqui se llaman las funsiones
  
   this.Getdata();
  }

  Getdata(){
    this._persona.getpersonas().subscribe(data =>{
      console.log(data);
      this.Personas=data.results;
      console.log(this.Personas);
      
    })
  }
  
}
