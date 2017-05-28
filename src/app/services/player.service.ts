import { Player } from "../models/player.model";

export class PlayerService {
  players = [new Player('Nigel', 20, 40, 18),
    new Player('Jessica', 15, 27, 18)];

    restoreHealth(playerName: string) {
        const playerIndex = this.players.findIndex(obj => obj.name === playerName);
        this.players[playerIndex].currentHp = this.players[playerIndex].maxHp;
    }

    increaseHealth(playerName: string, incrementAmount: number) {
        const playerIndex = this.players.findIndex(obj => obj.name === playerName);
        const maxHp = this.players[playerIndex].maxHp;

        const newAmount: number = this.players[playerIndex].currentHp + parseInt(String(incrementAmount)); // It's stupid that I have to parse like that but that's the only way it works for some stupid reason
        this.players[playerIndex].currentHp = newAmount;

        // Can't increment past full health, so just restore to max
        if (this.players[playerIndex].currentHp > maxHp) {
            this.restoreHealth(playerName);
        }
    }

    decreaseHealth(playerName: string, decrementAmount: number) {
        const playerIndex = this.players.findIndex(obj => obj.name === playerName);

        let newAmount: number = this.players[playerIndex].currentHp - parseInt(String(decrementAmount)); // See comment in increaseHealth

        if (newAmount < 0) {
            newAmount = 0;
        }

        this.players[playerIndex].currentHp = newAmount;
    }

    setHealth(playerName: string, healthAmount: number) {
        const playerIndex = this.players.findIndex(obj => obj.name === playerName);
        const maxHp = this.players[playerIndex].maxHp;

        if (healthAmount > maxHp) {
            healthAmount = maxHp;
        }
        if (healthAmount < 0) {
            healthAmount = 0;
        }
        this.players[playerIndex].currentHp = healthAmount;
    }
}