import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { StandingsComponent } from './standings/standings.component';
import { TeamComponent } from './team/team.component';
import { FootballApiService } from "app/football-api.service";
import { AppRoutingModule } from "app/app.routing.module";
import { PlayersComponent } from './team/players/players.component';
import { FixturesComponent } from './team/fixtures/fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    StandingsComponent,
    TeamComponent,
    PlayersComponent,
    FixturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FootballApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
