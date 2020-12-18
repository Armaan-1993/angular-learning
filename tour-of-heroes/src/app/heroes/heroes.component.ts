import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero"



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes :Hero[]; //doubt

  // selectedHero : Hero;
  constructor(private heroService: HeroService) {  //doubt
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe (heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes(); //life cycle method. Angular will call getHeroes at the required time
  }
    //to add new hero to the server

    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl , hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id = ${newHero.id}`),
        catchError(this.handleError<Hero>('addHero'))
      );
    }

  add(name:string) :void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero)
    });
  }


  // onSelect(hero:Hero): void { //doubt
    // this.selectedHero = hero; 
  //   this.messageService.add("HeroesComponent: Selected Hero")
  // }
}
 