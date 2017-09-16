import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FootballApiService } from "app/football-api.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router,private footballApiService: FootballApiService, private route: ActivatedRoute) { }

  playerItems : any[];
  fixtureItems : any[];
  team : any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.footballApiService.getTeamDetails({ id: params['id'] }).subscribe(
          teamResponse => {
            this.team = teamResponse;
            this.footballApiService.setNavBarText(this.team.name);
            let playerUrl = this.team._links.players.href;
            let fixtureUrl = this.team._links.fixtures.href;
            this.footballApiService.genericGet(playerUrl).subscribe(
              playerResponse => {
                  this.playerItems = playerResponse.players;
                  this.footballApiService.genericGet(fixtureUrl).subscribe(
                    fixtureResponse => {
                      this.fixtureItems = fixtureResponse.fixtures as any[];
                      this.fixtureItems = this.fixtureItems.slice(this.fixtureItems.length-5>0?this.fixtureItems.length-5:0);
                    }
                  )
              }
            );
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

}
