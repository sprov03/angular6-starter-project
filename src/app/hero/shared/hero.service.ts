import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero.model';

@Injectable({providedIn: 'root'})
export class HeroService {
    private heroUrl = '/api/heroes';

    constructor(private http: HttpClient) {
    }

    getHero(id: number): Observable<Hero> {
        return this.http.get<Hero>(`${this.heroUrl}/${id}`);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.heroUrl}`);
    }

    updateHero(hero: Hero): Observable<null> {
        return this.http.put<null>(`${this.heroUrl}/${hero.id}`, hero);
    }

    createHero(hero: Hero): Observable<null> {
        return this.http.post<null>(`${this.heroUrl}`, hero);
    }

    saveHero(hero: Hero): Observable<null> {
        if (hero.id) {
            return this.updateHero(hero);
        } else {
            return this.createHero(hero);
        }
    }

    deleteHero(id: number): Observable<null> {
        return this.http.delete<null>(`${this.heroUrl}/${id}`);
    }
}
