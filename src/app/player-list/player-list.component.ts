import { Component, OnInit } from '@angular/core';

import { Player } from "../models/player.model";

import { PlayerService } from "../services/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.players;
  }

}
