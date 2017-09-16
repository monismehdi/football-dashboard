import { Component, OnInit, Input } from '@angular/core';
import { FootballApiService } from "app/football-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  constructor(private router : Router, private footballApiService: FootballApiService) { }

  items : any[];

  ngOnInit() {
    this.footballApiService.setNavBarText("");
    this.footballApiService.getCompetitions("").subscribe(
      data => {
        this.items = data;
      },
      error =>{
        console.error(error);
      }
    );
  }

  navigateToStandings(item){
    this.router.navigate(['standings',item.id]);
  }

}
