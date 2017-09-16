import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from "app/competition/competition.component";
import { StandingsComponent } from "app/standings/standings.component";
import { TeamComponent } from "app/team/team.component";


const appRoutes: Routes = [
    { path: 'competitions', component: CompetitionComponent },
    { path: 'standings/:id', component: StandingsComponent },
    { path: 'team/:id', component: TeamComponent },
    { path: '', redirectTo: 'competitions', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }