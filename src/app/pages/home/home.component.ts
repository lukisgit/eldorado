import { Component, OnInit } from '@angular/core';
import { GAMES } from 'src/app/constants/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly GAMES = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
