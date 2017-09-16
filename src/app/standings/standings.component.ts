import { Component, OnInit } from '@angular/core';
import { FootballApiService } from "app/football-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  constructor(private router: Router,private footballApiService: FootballApiService, private route: ActivatedRoute) { }

  items: any[];

  ngOnInit() {
    this.footballApiService.setNavBarText("");
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.footballApiService.getStandings({ id: params['id'] }).subscribe(
          response => {
            this.footballApiService.setNavBarText(response.leagueCaption);
            this.items = response.standing;
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

  onTeamSelected(item){
    let teamURL = item._links.team.href as string;
    let id = teamURL.slice(38);
    this.router.navigate(['team',id]);
  }

}
