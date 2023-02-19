import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  
  private url:string="https://randomuser.me/api/";
  constructor(private _http:HttpClient) { }
  

  getpersonas():Observable<any>{
    return this._http.get<any>(this.url);
  }




}
