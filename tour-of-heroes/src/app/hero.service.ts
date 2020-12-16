import { Injectable } from '@angular/core';
import {Hero} from "./hero"
import {HEROES} from "./mock-heroes"
import {Observable, of} from "rxjs";
//observable is used to return value to Hero[]

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    return of ( HEROES)
  }
  //Heroservice fetches the data from HEROES synchronously.
  //But this cannot be implemented in case of a real backend API
  //Hence we need to use some asynchronous property to this.
}
