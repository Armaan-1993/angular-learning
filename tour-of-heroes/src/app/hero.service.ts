import { Injectable } from '@angular/core';
import {Hero} from "./hero"
import {HEROES} from "./mock-heroes"
import {Observable, of} from "rxjs";
//observable is used to return value to Hero[]
import {MessageService} from "./message.service"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
    
   }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of ( HEROES)
  }
  getHero(id :number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of (HEROES.find(hero => hero.id === id))
  }
  //Heroservice fetches the data from HEROES synchronously.
  //But this cannot be implemented in case of a real backend API
  //Hence we need to use some asynchronous property to this.
}
