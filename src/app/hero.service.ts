import { Injectable } from '@angular/core';
import { Hero } from './mockdata/hero';
import { HEROES } from './mockdata/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
