import { Injectable } from '@angular/core';
import {Hero} from "./hero"
import {HEROES} from "./mock-heroes"
import {Observable, of} from "rxjs";
//observable is used to return value to Hero[]
import {MessageService} from "./message.service"
import {HttpClient ,HttpHeaders} from "@angular/common/http"
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,
    private http:HttpClient,
    ) {}

    private heroesUrl = 'api/heroes'

  private log(message: string) {
    this.messageService.add (`HeroService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return (error:any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    }
  } // doubt in the whiole private function
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError<Hero[]>('getHeroes', [])))
  }
  getHero(id :number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of (HEROES.find(hero => hero.id === id))
  }
  //Heroservice fetches the data from HEROES synchronously.
  //But this cannot be implemented in case of a real backend API
  //Hence we need to use some asynchronous property to this.
}
