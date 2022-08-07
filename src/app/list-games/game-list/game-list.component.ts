import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/common/game-service.service';
import { Game } from 'src/app/common/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(public gameService: GameServiceService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((gamesList: Game[]) => {
    this.games=gamesList;}
    )

  }

}
