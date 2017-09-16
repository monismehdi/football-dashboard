import { Component, OnInit } from '@angular/core';
import { FootballApiService } from "app/football-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private footballApiService : FootballApiService) {
  }

  ngOnInit(){
  }

  getNavBarText(){
    return this.footballApiService.getNavBarText();
  }


}
