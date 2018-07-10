import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/hero.model';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: []
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
