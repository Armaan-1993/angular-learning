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

  selectedHero : Hero;
  constructor(private heroService: HeroService) {  //doubt
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe (heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes(); //life cycle method. Angular will call getHeroes at the required time
  }
  onSelect(hero:Hero): void { //doubt
    this.selectedHero = hero; 
  }
}
