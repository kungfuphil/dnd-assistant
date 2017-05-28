// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { PlayerComponent } from "./player-list/player/player.component";
import { PlayerListComponent } from './player-list/player-list.component';
import { ModifyHpComponent } from './modify-hp/modify-hp.component';

// Services
import { PlayerService } from "./services/player.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent,
    ModifyHpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
