import {Component, Input, OnInit} from '@angular/core';
import {GAME} from "../../../constants/games";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: { id: GAME, label: string };

  constructor() { }

  ngOnInit(): void {
  }

}
