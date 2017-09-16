import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FootballApiService {

  constructor(private http: Http) { }

  baseUrl = "http://api.football-data.org/v1";

  navBarText : string = "";

  getCompetitions(params) {
    return this.http.get(this.baseUrl + "/competitions/?season=2017", this.getHeader()).map(Response => Response.json());
  }

  getStandings(params) {
    return this.http.get(this.baseUrl + "/competitions/"+params.id+"/leagueTable", this.getHeader()).map(Response => Response.json());
  }

  getTeamDetails(params) {
    return this.http.get(this.baseUrl + "/teams/" + params.id, this.getHeader()).map(Response => Response.json());
  }

  genericGet(url){
    return this.http.get(url, this.getHeader()).map(Response => Response.json());
  }

  getHeader() {
    let options = new RequestOptions();
    let headers = new Headers();
    headers.set('X-Auth-Token', '3cdcdaff098341b19be5c6b334800a69');
    options.headers = headers;
    return options;
  }

  setNavBarText(text){
    this.navBarText = text;
  }

  getNavBarText(){
    return this.navBarText;
  }

}