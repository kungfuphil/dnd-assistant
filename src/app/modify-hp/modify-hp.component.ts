import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Player } from "../models/player.model";

import { PlayerService } from "../services/player.service";

@Component({
  selector: 'app-modify-hp',
  templateUrl: './modify-hp.component.html',
  styleUrls: ['./modify-hp.component.css']
})
export class ModifyHpComponent implements OnInit {
  @Input() player: Player;
  @ViewChild('hpInput') hpInputRef: ElementRef;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onRestoreHealth(player: Player) {
    // console.log('Player passed: ' + JSON.stringify(player, undefined, 2));
    this.playerService.restoreHealth(player.name);
  }

  onIncreaseHealth(player: Player) {
    const incrementAmount = parseInt(this.hpInputRef.nativeElement.value);
    // console.log('Increasing HP by ' + incrementAmount);
    this.playerService.increaseHealth(player.name, incrementAmount);
  }

  onDecreaseHealth(player: Player) {
    const decrementAmount = parseInt(this.hpInputRef.nativeElement.value);
    this.playerService.decreaseHealth(player.name, decrementAmount);
  }

  onSetHealth(player: Player) {
    const newHp = parseInt(this.hpInputRef.nativeElement.value);
    this.playerService.setHealth(player.name, newHp);
  }

}
