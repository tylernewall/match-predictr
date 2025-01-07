import { Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserScoresComponent } from './pages/user-scores/user-scores.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { TeamsComponent } from './pages/teams/teams.component';

export const routes: Routes = [
     { path: 'dashboard', component: DashboardComponent },
     { path: 'your-scores', component: UserScoresComponent },
     { path: 'leaderboard', component: LeaderboardComponent },
     { path: 'teams', component: TeamsComponent },
     { path: '**', component: PageNotFoundComponent },
];
