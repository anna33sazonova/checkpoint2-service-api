import { Component, Input, OnInit } from '@angular/core'
import { Game } from 'src/app/common/game.model'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent  {

  @Input() game : Game | undefined


}
