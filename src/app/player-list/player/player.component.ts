import { Component, Input } from "@angular/core";

import { Player } from "../../models/player.model";

@Component({
    selector: 'app-player',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.css']
})
export class PlayerComponent {
    @Input() player: Player;

    getTextColor() {
        // If health is at or below 50%, then make text red
        if (this.player.currentHp <= this.player.maxHp / 2) {
            return 'red';
        } else {
            return 'green';
        }
    }
}