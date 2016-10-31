// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web API

  constructor (private http: Http) {}

  getCurrentTemp() {
    return this.http.get('/temp')
                    .map(res => res.json());
  }