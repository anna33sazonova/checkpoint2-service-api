import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

gamesUrl="https://apis.wilders.dev/wild-games/games/";

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.gamesUrl)
  }

}
